const fs = require('fs')
const { DateTime } = require('luxon')
const get = require('lodash/get')
const findLast = require('lodash/findLast')

const SOURCE_PATH = '../../../assets/timeline.tsv'
const OUTPUT_PATH = './timeline.json'

const getDate = itemArr => itemArr[0]
const getAreaType = itemArr => itemArr[1]
const getCountryName = itemArr => itemArr[2]
const getCounrtyCase = itemArr => itemArr[3]
const getWorldCase = itemArr => itemArr[9]
const getTextEn = itemArr => itemArr[4]
const getTextHan = itemArr => itemArr[5]

const getCountryCard = dataArr => {
  let postion = 'left'
  const areaType = getAreaType(dataArr)
  if(areaType === 'TAIWAN' || areaType === 'WORLD') {
    postion = 'right'
  }
  return {
    type: 'EVENT',
    postion,
    date: getDate(dataArr),
    areaType,
    countryName: getCountryName(dataArr),
    counrtyCase: getCounrtyCase(dataArr),
    worldCase: getWorldCase(dataArr),
    textEn: getTextEn(dataArr),
    textHan: getTextHan(dataArr)
  }
}

const createTimeline = () => {
  const oData = []
  let laseDate = null
  let currentDate = null
  let countryCard = null
  try {
    let data = fs.readFileSync(SOURCE_PATH)
    console.log('[createTimeline] (1/4) Tsv file loaded')
    data = data.toString('utf-8')
    let dataArr = data.split(/\r?\n/)
    dataArr.shift()
    console.log('[createTimeline] (2/4) Start formatting data')
    dataArr.forEach(item => {
      const itemArr = item.split('\t')
      switch(itemArr[1]) {
        case 'CARD':
          oData.push(
            {
              head: {
                textEn: getTextEn(itemArr),
                textHan: getTextHan(itemArr)
              },
              cards: []
            }
          )
          break
        case 'WARN':
          if(!get(oData[oData.length - 1], ['cards'])) break
          oData[oData.length - 1].cards.push(
            {
              type: 'WARN',
              date: getDate(itemArr),
              textEn: getTextEn(itemArr),
              textHan: getTextHan(itemArr)
            }
          )
          break
        default:
          if(!get(oData[oData.length - 1], ['cards'])) break

          /* Get TIME CARD */
          laseDate = findLast(get(oData[oData.length - 1], ['cards']), item => item.type === 'TIME')
          laseDate = get(laseDate, ['date'])
          currentDate = getDate(itemArr)
          if(laseDate !== currentDate) {
            oData[oData.length - 1].cards.push(
              {
                type: 'TIME',
                date: getDate(itemArr)
              }
            )
          }
          /* Get COUNTRY CARD */
          countryCard = getCountryCard(itemArr)
          if(countryCard) {
            oData[oData.length - 1].cards.push(countryCard)
          }
      }
    })
    console.log('[createTimeline] (3/4) Data format completed')
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify({
      lastUpdateTime: DateTime.local().toFormat('yyyy/MM/dd TT'),
      data: oData
    }, null, 2), { encoding: 'utf8' })
    console.log('[createTimeline] (4/4) Save timeline.json successed')
  } catch(error) {
    console.error(error)
  }
}

createTimeline()

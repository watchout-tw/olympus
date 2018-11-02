export default {
  id: 'republic-of-china',
  module: 'quiz',
  title: '做個堂堂正正的中華民國人',
  image: 'quiz/republic-of-china.jpg',
  date: '2017-10-10 20:00:00',
  breaking: false,
  description: '「中華民國」106歲生日要到了，在祝福生日快樂（放假）的同時，你對「中華民國」的認識有多少呢？快來測驗看看吧！',
  sequence: {
    navigation: 'sequential',
    hasCorrectAnswer: true,
    canChangeAnswer: false,
    scenes: [
      {
        id: 1,
        title: '行政院長賴清德說：「臺灣是一個主權獨立的國家，名字叫做中華民國。」根據《中華民國憲法》，中華民國領土範圍是什麼？',
        options: [
          {
            title: '臺澎金馬'
          },
          {
            title: '中國大陸'
          },
          {
            title: '固有疆域',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '普天之下，莫非王土'
          }
        ]
      },
      {
        id: 2,
        title: '根據《中華民國憲法增修條文》，在「國家統一」前，中華民國總統由誰選出？',
        options: [
          {
            title: '中華民國全體國民'
          },
          {
            title: '中華民國自由地區全體國民',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '國大代表'
          },
          {
            title: '立法委員'
          }
        ]
      },
      {
        id: 3,
        title: '根據《入出國移民法》，「國民」是指什麼？',
        options: [
          {
            title: '只要是中國人，就是國民'
          },
          {
            title: '在中華民國領土出生，就是國民'
          },
          {
            title: '具有中華民國國籍的人，才是國民'
          },
          {
            title: '具有中華民國國籍且居住在臺灣地區的人，才是國民',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          }
        ]
      },
      {
        id: 4,
        title: '根據《臺灣地區與大陸地區人民關係條例》，「大陸地區」指的是什麼？',
        options: [
          {
            title: '中國大陸'
          },
          {
            title: '美洲大陸'
          },
          {
            title: '南極大陸'
          },
          {
            title: '臺灣地區以外之中華民國領土',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          }
        ]
      },
      {
        id: 5,
        title: '依據《蒙藏邊區人員任用條例》，下列何者可任用為簡任公務員？',
        options: [
          {
            title: '曾任蒙古盟長一年以上'
          },
          {
            title: '曾任蒙古備兵扎薩克副都統一年以上'
          },
          {
            title: '曾任蒙旗扎薩克總管一年以上'
          },
          {
            title: '以上皆是',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          }
        ]
      },
      {
        id: 6,
        title: '依據《監察院監察委員行署組織條例》，監察院要在哪裡設置監察委員行署？',
        options: [
          {
            title: '甘寧青區'
          },
          {
            title: '皖贛區'
          },
          {
            title: '冀熱察區'
          },
          {
            title: '以上皆是',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          }
        ]
      },
      {
        id: 7,
        title: '依據《中華民國刑法》第160條第2項「意圖侮辱▁▁▁▁」將處一年以下有期徒刑、拘役或三百元以下罰金？',
        options: [
          {
            title: '孫中山'
          },
          {
            title: '孫文'
          },
          {
            title: '創立中華民國之孫先生',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '中山樵'
          }
        ]
      },
      {
        id: 8,
        title: '依據《國父陵園管理委員會組織條例》，中華民國政府應於何地設置管理員？',
        options: [
          {
            title: '北平碧雲寺',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '廣東香山縣'
          },
          {
            title: '台北國父紀念館'
          },
          {
            title: '南京中山陵'
          }
        ]
      },
      {
        id: 9,
        title: '依據《華僑身分證明條例施行細則》，哪種族裔的人能獲得「華裔證明文件」？',
        options: [
          {
            title: '臺灣人'
          },
          {
            title: '中國人',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '原住民'
          },
          {
            title: '日本人'
          }
        ]
      },
      {
        id: 10,
        title: '下列哪些中華民國領土之寺廟不適用《監督寺廟條例》？',
        options: [
          {
            title: '香港、澳門'
          },
          {
            title: '蒙古、新疆、寧夏、甘肅'
          },
          {
            title: '西藏、西康、蒙古、青海',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '黑龍江省、吉林省、遼寧省'
          }
        ]
      }
    ]
  },
  authorship: [
    {
      job: '編輯',
      people: ['洪國鈞', '王希']
    },
    {
      job: '設計開發',
      people: ['游知澔']
    }
  ],
  references: [
    '[全國法規資料庫](http://law.moj.gov.tw)'
  ]
}

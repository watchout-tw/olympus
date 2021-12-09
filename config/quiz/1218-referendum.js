export default {
  id: '1218-referendum',
  module: 'quiz',
  image: {
    default: 'quiz/1218-referendum.jpg',
    pathTemplate: 'quiz/1218-referendum-{1}.jpg',
    replacements: [
      {
        key: 'gc',
        regexp: /^[OX]{4}$/
      }
    ]
  },
  sequence: {
    navigation: 'sequential',
    hasCorrectAnswer: false,
    showCorrectAnswer: false,
    canChangeAnswer: false,
    afterClickActions: [
      {
        name: 'coralreef'
      },
      {
        name: 'accumulateSelection'
      }
    ],
    scenes: [
      {
        id: 1,
        title: '核四商轉',
        description: '您是否同意核四啟封商轉發電？',
        options: [
          {
            title: '同意',
            value: 'O',
            details: null
          },
          {
            title: '不同意',
            value: 'X',
            details: null
          }
        ],
        speechTarget: {
          id: 1798,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 2,
        title: '禁萊豬進口',
        description: '你是否同意政府應全面禁止進口含有萊克多巴胺之乙型受體素豬隻之肉品、內臟及其相關產製品？',
        options: [
          {
            title: '同意',
            value: 'O',
            details: null
          },
          {
            title: '不同意',
            value: 'X',
            details: null
          }
        ],
        speechTarget: {
          id: 1799,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 3,
        title: '公投綁大選',
        description: '你是否同意公民投票案公告成立後半年內，若該期間內遇有全國性選舉時，在符合公民投票法規定之情形下，公民投票應與該選舉同日舉行？',
        options: [
          {
            title: '同意',
            value: 'O',
            details: null
          },
          {
            title: '不同意',
            value: 'X',
            details: null
          }
        ],
        speechTarget: {
          id: 1800,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 4,
        title: '三接遷址',
        description: '您是否同意中油第三天然氣接收站遷離桃園大潭藻礁海岸及海域？（即北起觀音溪出海口，南至新屋溪出海口之海岸，及由上述海岸最低潮線往外平行延伸五公里之海域',
        options: [
          {
            title: '同意',
            value: 'O',
            details: null
          },
          {
            title: '不同意',
            value: 'X',
            details: null
          }
        ],
        speechTarget: {
          id: 1801,
          speechType: 'musou_long_form_scene_response'
        }
      }
    ]
  }, // end of sequence object
  incompletePrompt: '測驗尚未結束，同志仍須繼續努力作答。',
  showResultActions: [
    {
      name: 'sort',
      key: 'time'
    },
    {
      name: 'showSelection',
      savedSelection: [
        {
          title: '四個不同意，台灣更有力',
          description: '你跟民主進步黨、台灣基進意見一致',
          pattern: 'X-X-X-X'
        },
        {
          title: '四個都同意，台灣更美麗',
          description: '你跟中國國民黨、新黨意見一致',
          pattern: 'O-O-O-O'
        },
        {
          title: '兩好兩壞',
          description: '你跟台灣民眾黨意見一致',
          pattern: 'X-O-X-O'
        },
        {
          title: '充分理解、理性投票',
          description: '你跟時代力量意見一致',
          pattern: 'X-O-O-O'
        },
        {
          title: '一好三壞',
          description: '你跟綠黨意見一致',
          pattern: 'X-X-O-X'
        }
      ],
      defaultSelection: {
        title: '喔～你的想法很不一樣唷！'
      },
      show: true
    }
  ],
  atCompletionActions: [
    {
      name: 'updateQuery',
      key: 'gc',
      value: {
        method: 'each',
        source: 'accumulatedSelection',
        key: 'value',
        joinChar: '-'
      }
    }
  ],
  closing: '四項公投結果，將影響臺灣未來將怎麼走！12 月 18 日請記得攜帶身分證，到你的戶籍地投票所投下神聖的一票，也別忘記按下社群分享，在臉書和推特  #宣告你的投票意志 喔！',
  references: [
    '[2014年沃草《市長給問嗎》各候選人的回答](https://ask.watchout.tw/games/2014-taipei)',
    '[2014/12/27《ETtoday》記者黃瀞瑩專訪台北市長柯文哲](https://www.ettoday.net/news/20141227/444198.htm)',
    '[2018/10/9《風傳媒》報導](https://www.storm.mg/article/533275)',
    '[2015/10/23《蘋果》報導](https://tw.news.appledaily.com/life/realtime/20151023/717425)',
    '[2015/8/3《中央社》報導](https://www.cna.com.tw/news/firstnews/201508030349.aspx)',
    '[2011/12/12《民視》報導：時任台大醫院醫師柯文哲的發言（2:22）](https://youtu.be/yq5847mEp8k?t=142)',
    '[2014/12/22《獨立媒體》影音：當選台北市長的柯文哲關於雙城論壇的發言（0:39）](https://youtu.be/bpzd3Uljl6g?t=39)',
    '[2017/8/12《蘋果日報》報導](https://tw.appledaily.com/new/realtime/20170812/1180775/)',
    '[2015/1/11《風傳媒》報導](https://www.storm.mg/article/39683)',
    '[2017/2/28《風傳媒》報導](https://www.storm.mg/lifestyle/228523)',
    '[2017/3/27《中央社》報導](https://www.cna.com.tw/news/aopl/201703280216.aspx)',
    '[2018/10/27《自由時報》報導](http://news.ltn.com.tw/news/politics/breakingnews/2594088)',
    '[2018/8/23《臉書》柯文哲「認同卡」內容](https://www.facebook.com/DoctorKoWJ/photos/a.136856586416330/1452270054874970/)'
  ]
}

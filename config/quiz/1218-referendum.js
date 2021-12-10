export default {
  id: '1218-referendum',
  module: 'quiz',
  willUpdateShareURL: true,
  image: {
    default: 'quiz/1218-referendum.jpg',
    pathTemplate: 'quiz/1218-referendum-{1}.jpg',
    replacements: [
      {
        key: 'gc',
        regexp: /^[0-1]{1}-[0-1]{1}-[0-1]{1}-[0-1]{1}$/
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
            value: '1',
            details: null
          },
          {
            title: '不同意',
            value: '0',
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
            value: '1',
            details: null
          },
          {
            title: '不同意',
            value: '0',
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
            value: '1',
            details: null
          },
          {
            title: '不同意',
            value: '0',
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
            value: '1',
            details: null
          },
          {
            title: '不同意',
            value: '0',
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
          pattern: '0-0-0-0'
        },
        {
          title: '四個都同意，台灣更美麗',
          description: '你跟中國國民黨、新黨意見一致',
          pattern: '1-1-1-1'
        },
        {
          title: '兩好兩壞',
          description: '你跟台灣民眾黨意見一致',
          pattern: '0-1-0-1'
        },
        {
          title: '充分理解、理性投票',
          description: '你跟時代力量意見一致',
          pattern: '0-1-1-1'
        },
        {
          title: '一好三壞',
          description: '你跟綠黨意見一致',
          pattern: '0-0-1-0'
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
  closing: '四項公投結果，將影響臺灣未來將怎麼走！12 月 18 日請記得攜帶身分證，到你的戶籍地投票所投下神聖的一票，也別忘記按下社群分享，在臉書和推特  #宣告你的投票意志 喔！'
}

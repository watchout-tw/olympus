export default {
  id: '1218-referendum',
  module: 'quiz',
  willUpdateShareURL: true,
  docHeader: {
    show: false
  },
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
        title: '第 17 案 - 核四商轉',
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
          id: 1218,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 2,
        title: '第 18 案 - 禁萊豬進口',
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
          id: 1219,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 3,
        title: '第 19 案 - 公投綁大選',
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
          id: 1220,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 4,
        title: '第 20 案 - 三接遷址',
        description: '您是否同意中油第三天然氣接收站遷離桃園大潭藻礁海岸及海域？（即北起觀音溪出海口，南至新屋溪出海口之海岸，及由上述海岸最低潮線往外平行延伸五公里之海域）',
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
          id: 1221,
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
          description: '你跟 民主進步黨、台灣基進 意見一致',
          pattern: '0-0-0-0'
        },
        {
          title: '四個都同意，台灣更美麗',
          description: '你跟 中國國民黨、新黨 意見一致',
          pattern: '1-1-1-1'
        },
        {
          title: '兩好兩壞',
          description: '你跟 台灣民眾黨 意見一致',
          pattern: '0-1-0-1'
        },
        {
          title: '充分理解、理性投票',
          description: '你跟 時代力量 意見一致',
          pattern: '0-1-1-1'
        },
        {
          title: '一好三壞',
          description: '你跟 綠黨 意見一致',
          pattern: '0-0-1-0'
        }
      ],
      defaultSelection: {
        title: '喔～你的想法很不一樣唷！'
      },
      show: true
    },
    {
      name: 'showImage',
      // 因為是給 BetterLongForm 用，所以放在 watchout-common-assets
      pathTemplate: 'https://raw.githubusercontent.com/watchout-tw/watchout-common-assets/master/images/projects/quiz/1218-referendum-{1}.jpg'
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
  closing: '按下社群分享，可以直接分享上面的投票意志圖，到臉書或推特哦！四項公投結果，將影響臺灣未來將怎麼走，12 月 18 日請記得攜帶身分證，到你的戶籍地投票所投下神聖的一票！'
}

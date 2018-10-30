export default {
  id: 'congress-midterm-mock-exam',
  module: 'quiz',
  title: '國會草知識期中模擬考',
  image: 'quiz/congress-midterm-mock-exam.jpg',
  date: '2018-04-14 20:00:00',
  breaking: true,
  description: '你是沃草國會草知識的忠實讀者嗎？你還記得過去一年半來學習到的立法院秘辛嗎？沃草推出國會草知識期中模擬考，看看你還記得多少。\n\n想檢驗自己是不是國會草知識達人？快來挑戰期中模擬考見真章吧！',
  sequence: {
    navigation: 'sequential',
    hasCorrectAnswer: true,
    canChangeAnswer: false,
    scenes: [
      {
        id: 1,
        title: '依現行制度，立法院一屆有幾個會期？',
        options: [
          {
            title: '1'
          },
          {
            title: '2'
          },
          {
            title: '4'
          },
          {
            title: '8',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/898755940282620'
        ]
      },
      {
        id: 2,
        title: '第一屆立法院有幾個會期？',
        options: [
          {
            title: '8'
          },
          {
            title: '64'
          },
          {
            title: '81'
          },
          {
            title: '90',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/898755940282620'
        ]
      },
      {
        id: 3,
        title: '委員會的召委多久改選一次？',
        options: [
          {
            title: '每會期',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '每兩會期'
          },
          {
            title: '每四會期'
          },
          {
            title: '每一屆'
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/739623062862576'
        ]
      },
      {
        id: 4,
        title: '下列何者不是委員會召委的權責？',
        options: [
          {
            title: '決定開會議程'
          },
          {
            title: '控制發言時間'
          },
          {
            title: '掌控議事程序'
          },
          {
            title: '任用議事人員',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/649779711846912'
        ]
      },
      {
        id: 5,
        title: '關於立委在非所屬委員會的差別，下列何者敘述有誤？',
        options: [
          {
            title: '發言時間較短'
          },
          {
            title: '無法質詢',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '沒有投票權'
          },
          {
            title: '無法提修正動議'
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/932819843542896'
        ]
      },
      {
        id: 6,
        title: '下列哪一個組合並非立委親子檔？',
        options: [
          {
            title: '陳哲男、陳其邁'
          },
          {
            title: '羅福助、羅明才'
          },
          {
            title: '吳伯雄、吳志揚',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '章孝嚴、蔣萬安'
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/920957131395834'
        ]
      },
      {
        id: 7,
        title: '下列何者最接近立委的年薪？',
        options: [
          {
            title: '900萬'
          },
          {
            title: '1200萬'
          },
          {
            title: '250萬',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '600萬'
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/913074482184099'
        ]
      },
      {
        id: 8,
        title: '一個立委每個月能約有多少預算聘用公費助理，最多又能聘多少人？',
        options: [
          {
            title: '63萬，15人'
          },
          {
            title: '42萬，14人',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '117萬，20人'
          },
          {
            title: '24萬，8人'
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/917570288401185'
        ]
      },
      {
        id: 9,
        title: '行政院大陸委員會是由立法院哪一個常設委員會負責監督？',
        options: [
          {
            title: '內政委員會',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '外交及國防委員會'
          },
          {
            title: '交通委員會'
          },
          {
            title: '司法及法制委員會'
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/750242365133979'
        ]
      },
      {
        id: 10,
        title: '下列何者不是立法院表決大戰時常用的招式？',
        options: [
          {
            title: '要求點名表決'
          },
          {
            title: '要求重付表決'
          },
          {
            title: '靜坐抗議',
            isCorrect: true,
            afterClick: {
              score: 10
            }
          },
          {
            title: '提議將法案退回程序委員會'
          }
        ],
        references: [
          'https://www.facebook.com/watchout.tw/photos/a.670939036397646.1073741895.240170506141170/837380473086834'
        ]
      }
    ],
    results: [
      {
        score: 100,
        text: '恭喜你考100分，真的是好棒棒！'
      },
      {
        score: 90,
        text: '90分不錯喔～繼續加油？'
      },
      {
        score: 80,
        text: '喔喔喔喔是80分呀？'
      },
      {
        score: 70,
        text: '70分嗎？還有進步空間唷。'
      },
      {
        score: 60,
        text: 'UCCU！這樣60分可以嗎？'
      },
      {
        score: '<50',
        text: '不及格呀⋯沒關係，勝敗乃兵家常事啦。'
      }
    ],
    closing: '不管你得了幾分，都請記得國會大小事其實會影響著我們各種日常，立法的每一道程序和立委們做的每一項決定，都可能會改變你生活！每天三分鐘，鎖定沃草動態，掌握立法院最新消息，一起成為監督國會小尖兵吧！'
  },
  authorship: [
    {
      job: '編輯',
      people: ['洪國鈞']
    },
    {
      job: '設計開發',
      people: ['游知澔']
    }
  ],
  references: []
}

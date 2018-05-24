const defaultDarkBackgroundColor = '#333'
const defaultLightTextColor = '#efefef'
// const defaultLightBackgroundColor = '#efefef'
const defaultDarkTextColor = '#333'

export default {
  id: 'another-future',
  module: 'journey',
  beforeTitle: '《二二八日記》',
  title: '你不知道你失去了什麼',
  image: 'journey/another-future.jpg',
  date: '2018-02-27 20:00:00',
  breaking: true,
  sequence: {
    autoplay: false,
    startDate: '1945-10-08',
    endDate: '1947-02-28',
    default: {
      toggles: {
        showCountdown: true
      },
      styles: {
        mainVisualContainer: {
          background: {
            color: defaultDarkBackgroundColor
          }
        },
        options: {
          text: {
            align: 'center',
            size: '1rem',
            color: 'black'
          },
          background: {
            color: 'white',
            opacity: 1
          }
        },
        tags: { // INACTIVE
          background: {
            color: defaultDarkBackgroundColor
          }
        },
        visualTags: {
          border: 'none',
          background: {
            color: defaultDarkBackgroundColor
          },
          text: {
            color: defaultDarkTextColor
          }
        },
        labels: { // INACTIVE
          text: {
            color: defaultLightTextColor
          },
          background: {
            color: defaultDarkBackgroundColor,
            opacity: 1
          }
        },
        subtitle: { // INACTIVE
          position: {
            x: 'center',
            y: 'center'
          },
          text: {
            align: 'center',
            size: '1rem',
            color: defaultLightTextColor
          },
          background: {
            color: defaultDarkBackgroundColor,
            opacity: 0.5
          }
        }
      }
    },
    media: [
      {
        id: 'japanese-surrender-broadcast',
        type: 'audio',
        url: 'https://watchout.tw/musou-aux/modern-history-of-taiwan/Imperial_Rescript_on_the_Termination_of_the_War-excerpt.mp3?l=20s' // Use external URL
      },
      {
        id: 'martial-law-declaration-broadcast',
        type: 'audio',
        url: 'https://watchout.tw/musou-aux/modern-history-of-taiwan/martial-law-declaration-broadcast-chen-yi-excerpt.mp3'
      }
    ],
    scenes: [
      {
        id: 'opening',
        classes: ['wide', 'opening'],
        beforeTitle: '《二二八日記》',
        title: '你不知道你失去了什麼',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-dark.jpg',
          width: 2400,
          height: 1350,
          magnify: false,
          blur: true
        }
      },
      {
        id: '1945-08-15',
        classes: ['wide'],
        date: '1945-08-15',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/radio.png',
          width: 800,
          height: 800,
          magnify: false
        },
        subtitle: [
          '這就是天皇的聲音？',
          '戰爭終於要結束了嗎？',
          '總算不再是殖民地',
          '台灣人能做自己的主人了吧？'
        ],
        backgroundAudio: {
          id: 'japanese-surrender-broadcast'
        },
        default: {
          styles: {
            mainVisualContainer: {
              background: {
                color: '#333'
              }
            }
          }
        }
      },
      {
        id: '1945-10-08',
        classes: ['wide'],
        date: '1945-10-08',
        description: '台灣人要讀自己的報紙，這是台灣第一個留美博士林茂生創立的《民報》，以後每天讀，當作學習國字，擺脫殖民惡習的功課。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/creation_of_minpo.jpg',
          width: 712,
          height: 1000,
          magnify: false
        }
      },
      {
        id: '1945-10-11',
        classes: ['wide'],
        date: '1945-10-11',
        description: '擺脫殖民的身份，不再是二等公民，台灣人是應該歡欣。本省應踐行三民主義，率先做個模範省。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1945-10-11.gif',
          width: 3000,
          height: 2400,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 144,
            x: 130,
            y: 614,
            visible: true,
            click: 'revealUnder'
          }
        ]
      },
      {
        id: '1945-10-12',
        classes: ['wide'],
        date: '1945-10-12',
        description: '台灣人才濟濟，除哲學博士林茂生，又有醫學博士杜聰明、施江南，經濟學博士陳炘，就像杜聰明博士說的一樣，台灣人有科學技術者至少上萬，要建設新生台灣，綽綽有餘。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1945-10-12.gif',
          width: 2000,
          height: 2200,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 86,
            x: 928,
            y: 796,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 86,
            x: 910,
            y: 1620,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 120,
            x: 840,
            y: 1760,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 104,
            height: 564,
            x: 1436,
            y: 378,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 134,
            height: 364,
            x: 492,
            y: 1140,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1945-10-18',
        classes: ['wide'],
        date: '1945-10-18',
        description: '聽別人說《民報》文字太艱澀，我覺得這正是台灣人需要努力的地方，已經回歸祖國，別再看日文、講日語，多讀國文報紙吧！',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1945-10-18.gif',
          width: 2400,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 182,
            height: 410,
            x: 260,
            y: 147,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 182,
            height: 406,
            x: 1068,
            y: 1447,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1945-10-28',
        classes: ['wide'],
        date: '1945-10-28',
        description: '已從台北二中畢業好一段時間，現由哲學博士林茂生主持家長會，台灣文化協會的黃朝生兄也一同參與，真替學弟們感到放心。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1945-10-28.gif',
          width: 1600,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 128,
            x: 582,
            y: 792,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 454,
            y: 878,
            visible: true,
            click: 'revealUnder'
          }
        ]
      },
      {
        id: '1945-11-15',
        classes: ['wide'],
        date: '1945-11-15',
        description: '別的不敢說，台灣人才裡，醫生和律師最多，政府應該加以錄用。剛接收還未上軌道，但法院應速速開辦，不得拖延才是。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1945-11-15.gif',
          width: 2200,
          height: 1800,
          magnify: false
        },
        visualTags: [
          {
            width: 240,
            height: 406,
            x: 374,
            y: 471,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1945-12-27',
        classes: ['wide'],
        date: '1945-12-27',
        description: '檢察官有偵查犯罪和維持社會安寧之責，今已光復，日籍檢察官總算去職，首席檢察官雖不是台籍人士，但至少是同胞。之後願能多聘用本省法律人士。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1945-12-27.gif',
          width: 2280,
          height: 1800,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 86,
            x: 1942,
            y: 592,
            visible: true,
            click: 'revealUnder'
          }
        ]
      },
      {
        id: '1946-01-18',
        classes: ['wide'],
        date: '1946-01-18',
        description: '要作選出代表的準備，選出代表台灣人自己民意的代表。看來亦有不少推事、檢察官由台人擔當，甚好。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-01-18.gif',
          width: 2000,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 128,
            x: 798,
            y: 992,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 82,
            height: 572,
            x: 1532,
            y: 259,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 128,
            height: 766,
            x: 766,
            y: 180,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-02-12',
        classes: ['wide'],
        date: '1946-02-12',
        description: '竟有公務員搭火車不買票，以前不曾見過。據說這是外省人帶來的作風，盼能改進。明明戰爭已經結束，怎麼米價還一直漲，比三個月前高了三倍。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-02-12.gif',
          width: 1800,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 128,
            x: 1244,
            y: 204,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 96,
            x: 1308,
            y: 894,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 56,
            height: 430,
            x: 682,
            y: 560,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 82,
            height: 640,
            x: 1618,
            y: 1042,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 254,
            height: 432,
            x: 612,
            y: 1010,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-02-21',
        classes: ['wide'],
        date: '1946-02-21',
        description: '怎麼連首席檢察官也在走私，怪不得物價飛漲。許久不見的天花病出現了，過去「種痘防疫」的政策取消了嗎？',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-02-21.gif',
          width: 2200,
          height: 1800,
          magnify: false
        },
        visualTags: [
          {
            width: 132,
            height: 418,
            x: 902,
            y: 682,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-03-16',
        classes: ['wide'],
        date: '1946-03-16',
        description: '人才輩出，一時之選。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-03-16.gif',
          width: 2000,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 96,
            x: 1076,
            y: 966,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 750,
            y: 1128,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 686,
            y: 1090,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 96,
            x: 622,
            y: 1126,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 96,
            x: 296,
            y: 972,
            visible: true,
            click: 'revealUnder'
          }
        ]
      },
      {
        id: '1946-03-30',
        classes: ['wide'],
        date: '1946-03-30',
        description: '大報紙居然把大畫家陳澄波的名字給寫錯，來寫封信要求訂正一下。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-03-30.gif',
          width: 2200,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 128,
            x: 1598,
            y: 416,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 1534,
            y: 334,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 1404,
            y: 334,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 1340,
            y: 164,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 92,
            x: 1668,
            y: 742,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 128,
            height: 506,
            x: 1032,
            y: 462,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 128,
            height: 506,
            x: 1020,
            y: 1302,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 128,
            height: 506,
            x: 200,
            y: 1312,
            visible: true,
            click: 'revealUnder'
          }
        ]
      },
      {
        id: '1946-03-31',
        classes: ['wide'],
        date: '1946-03-31',
        description: '日本政府殖民台灣五十年，壓榨了台灣人民不少財產，日產清查一定得公平，千萬不能交給人格品行有疑者。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-03-31.gif',
          width: 1600,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 128,
            x: 414,
            y: 506,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 798,
            y: 1060,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 96,
            x: 662,
            y: 974,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 550,
            y: 1492,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 184,
            x: 848,
            y: 1448,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 64,
            height: 254,
            x: 784,
            y: 1244,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-04-06',
        classes: ['wide'],
        date: '1946-04-06',
        description: '專賣局查緝私煙查到自己口袋裡，一個股長就可以貪污敲詐超過十萬元，惡劣！',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-04-06.gif',
          width: 1800,
          height: 1800,
          magnify: false
        },
        visualTags: [
          {
            width: 84,
            height: 510,
            x: 1428,
            y: 515,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 64,
            height: 340,
            x: 888,
            y: 1001,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-04-16',
        classes: ['wide'],
        date: '1946-04-16',
        description: '王添灯從市參議員選上省參議員了，更上一層樓！',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-04-16.gif',
          width: 1918,
          height: 1600,
          magnify: false
        },
        visualTags: [
          {
            width: 72,
            height: 192,
            x: 1628,
            y: 656,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 78,
            height: 254,
            x: 1272,
            y: 278,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 128,
            height: 382,
            x: 12,
            y: 183,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 316,
            height: 382,
            x: 1038,
            y: 630,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-04-19',
        classes: ['wide'],
        date: '1946-04-19',
        description: '原來我們的參議會權力只有這樣，難怪「議而不決，決而不行」。政府支出又被公務員津貼補助佔了一大款，「爾俸爾祿，民脂民膏」，為政者得要苦民所苦啊！',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-04-19.gif',
          width: 2000,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 104,
            height: 420,
            x: 1287,
            y: 784,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 212,
            height: 420,
            x: 922,
            y: 1222,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-05-07',
        classes: ['wide'],
        date: '1946-05-07',
        description: '買教科書的錢竟被挪去走私，但官員怎是答非所問，莫名其妙。又各縣市預算收入僅有一億餘元，支出卻逾九億，錢哪來？',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-05-07.gif',
          width: 2200,
          height: 1600,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 128,
            x: 1542,
            y: 145,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 1076,
            y: 584,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 212,
            height: 372,
            x: 1128,
            y: 190,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 208,
            height: 372,
            x: 1140,
            y: 622,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-07-14',
        classes: ['wide'],
        date: '1946-07-14',
        description: '捐給孩童的糧食居然被市府人員私吞，負責本案的王育霖檢察官據說是台灣人，應要為台人討公道。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-07-14.gif',
          width: 2000,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 52,
            height: 182,
            x: 590,
            y: 964,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 52,
            height: 578,
            x: 538,
            y: 364,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-07-16',
        classes: ['wide'],
        date: '1946-07-16',
        description: '貪污瀆職公務員橫行，媒體據實報導還來信恐嚇，《民報》用整版貪污事件回擊真是痛快！',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-07-16.gif',
          width: 4843,
          height: 2845,
          magnify: false
        },
        visualTags: [
          {
            width: 54,
            height: 928,
            x: 3884,
            y: 544,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 54,
            height: 98,
            x: 3830,
            y: 334,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 108,
            height: 1152,
            x: 3342,
            y: 336,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-08-13',
        classes: ['wide'],
        date: '1946-08-13',
        description: '王育霖檢察官果然有膽識，直接帶憲兵和法警到市府訊問貪瀆官員，這些貪官還四處嚷嚷說市府被憲兵包圍，真不要臉。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-08-13.gif',
          width: 2114,
          height: 2002,
          magnify: false
        },
        visualTags: [
          {
            width: 112,
            height: 400,
            x: 1508,
            y: 886,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 214,
            height: 425,
            x: 1274,
            y: 296,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-10-14',
        classes: ['wide'],
        date: '1946-10-14',
        description: '全台建設百廢待舉，反先去籌獻金一億元建館慶祝蔣介石六十歲生日，荒謬！',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-10-14.gif',
          width: 1992,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 108,
            height: 1134,
            x: 1154,
            y: 234,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 54,
            height: 1134,
            x: 678,
            y: 234,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-10-16',
        classes: ['wide'],
        date: '1946-10-16',
        description: '陳儀說什麼寬大仁愛是中國人長處，要台人成為地道的中國人，這不就是要我們也一起做事隨便嗎？',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-10-16.gif',
          width: 1810,
          height: 2012,
          magnify: false
        },
        visualTags: [
          {
            width: 54,
            height: 164,
            x: 974,
            y: 986,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 54,
            height: 1132,
            x: 920,
            y: 18,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 54,
            height: 296,
            x: 866,
            y: 18,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 54,
            height: 738,
            x: 762,
            y: 18,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 108,
            height: 370,
            x: 6,
            y: 1224,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 54,
            height: 254,
            x: 732,
            y: 1642,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-11-18',
        classes: ['wide'],
        date: '1946-11-18',
        description: '警察打傷殺害法院法警又拘留其他當事人，法官、檢察官都已經同意保釋，為何還不放人？又不是古代衙門，縣長難道可以說押人就押人？',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-11-18.gif',
          width: 2450,
          height: 2068,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 128,
            x: 1646,
            y: 308,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 1440,
            y: 1022,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 1170,
            y: 990,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 1010,
            y: 906,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 850,
            y: 580,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 64,
            height: 128,
            x: 686,
            y: 862,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 110,
            height: 1170,
            x: 1330,
            y: 26,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1946-11-26',
        classes: ['wide'],
        date: '1946-11-26',
        description: '媒體報導警察開槍亂打人，社長居然被告上法庭成筆禍。已是參議員的王添灯先生還因此官司纏身，殖民政府都不至如此。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1946-11-26.gif',
          width: 1800,
          height: 1600,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 128,
            x: 1076,
            y: 546,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 152,
            height: 1138,
            x: 456,
            y: 232,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1947-02-12',
        classes: ['wide'],
        date: '1947-02-12',
        description: '專賣事業反倒成圖利私人的工具，專賣公司內又多是外省人，薪資比縣市長還高，台灣人要去哪呢？',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1947-02-12.gif',
          width: 2022,
          height: 1800,
          magnify: false
        },
        visualTags: [
          {
            width: 218,
            height: 425,
            x: 5,
            y: 378,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 112,
            height: 425,
            x: 1478,
            y: 794,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1947-02-26',
        classes: ['wide'],
        date: '1947-02-26',
        description: '過去殖民時期臺灣人被壓榨的財富都歸到了日產，現在被盜賣又不追究，跟殖民政府有何異？王育霖不當檢察官了嗎？',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1947-02-26.gif',
          width: 2524,
          height: 2000,
          magnify: false
        },
        visualTags: [
          {
            width: 84,
            height: 200,
            x: 2170,
            y: 1410,
            visible: true,
            click: 'revealUnder'
          },
          {
            width: 162,
            height: 436,
            x: 387,
            y: 538,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 162,
            height: 436,
            x: 880,
            y: 978,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1947-02-28',
        classes: ['wide'],
        date: '1947-02-28',
        description: '這政府不只是謀財，還來害命，實在可惡！今日聽聞眾人將到行政長官公署前討公道，得一起去才行。',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/1947-02-28.gif',
          width: 2000,
          height: 1920,
          magnify: false
        },
        visualTags: [
          {
            width: 64,
            height: 530,
            x: 896,
            y: 769,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          },
          {
            width: 64,
            height: 1142,
            x: 392,
            y: 418,
            styles: {
              background: {
                color: 'yellow',
                opacity: 0.25
              }
            }
          }
        ]
      },
      {
        id: '1947-03-09',
        classes: ['wide'],
        date: '1947-03-09',
        backgroundAudio: {
          id: 'martial-law-declaration-broadcast'
        },
        subtitle: [
          '前幾天，陳儀宣布台北戒嚴',
          '廣播說不會傷害守法民眾，會保護人民',
          '大家也正在組成委員會跟陳儀談判',
          '討論如何讓民眾安心',
          '這幾日街頭仍不斷傳來間歇的槍聲',
          '聽說中國兵從基隆上岸',
          '《民報》也停刊了',
          '不知道他們還好嗎？'
        ]
      },
      {
        id: '林茂生',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/林茂生.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '東京大學文學士、美國哥倫比亞大學哲學博士，是臺灣歷史上第一位留美博士。創辦《台灣民報》。二二八事件時，被武裝人員以陳儀長官找談話為由帶走，就再也沒出現過。'
      },
      {
        id: '施江南',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/施江南.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '東京大學醫學博士，是第二位拿到醫學博士的台灣人。二二八事件時臥病在床，被軍人從醫院帶走後失蹤。'
      },
      {
        id: '陳炘',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/陳炘.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '美國哥倫比亞大學經濟學博士，創設日治時期第一家台灣人經營的金融機構「大東信託」。二二八事件時，擔任臺灣信託公司董事長，被軍隊逮捕後遭到處死。'
      },
      {
        id: '黃朝生',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/黃朝生.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '醫師，日治時期時曾因抗日被捕，戰後籌組「臺灣省政治建設協會」，第一屆台北市參議員。二二八事件時，被陳儀列為叛亂首謀，被私下處決。'
      },
      {
        id: '林界',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/林界.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '《台灣新生報》高雄印刷廠廠長，第一屆高雄市苓雅區區長。二二八事件時，至高雄壽山要塞司令部和彭孟緝談判，要求約束軍人行為，後被以「暴徒首犯」為由處決。'
      },
      {
        id: '吳鴻麒',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/吳鴻麒.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '曾任台北地方法院和高等法院法官，戰後因辦理「員林事件」得罪警方。二二八事件爆發後，在法院處理公文時被帶走，多日之後屍體於台北南港橋下被發現。姪子吳伯雄曾任中國國民黨主席。'
      },
      {
        id: '楊元丁',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/楊元丁.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '日治時期曾因抗日被捕，戰後籌組「臺灣省政治建設協會」，第一屆基隆市參議員、副議長。二二八事件時失蹤，多日之後遺體於基隆海邊被尋獲。'
      },
      {
        id: '王添灯',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/王添灯.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '第一屆台北市參議員、台灣省參議員，《人民導報》社長，三民主義青年團臺北分團主任。戰後多次於議會或報紙抨擊當局貪污腐敗，遭當局控告。二二八事件時被逮捕，遭私下處決。'
      },
      {
        id: '王育霖',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/王育霖.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '東京大學法律系畢業，戰後曾任新竹地檢署檢察官。曾於調查新竹市長貪瀆案件時倍受打壓，後辭任檢察官，擔任《台灣民報》法律顧問。二二八事件時，被拘捕於西本願寺、遭受刑求，後被處死。'
      },
      {
        id: '陳澄波',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future/陳澄波.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: '台灣知名畫家，東京美術學校研究所畢業，第一屆嘉義市參議員。二二八事件時，至嘉義水上機場與軍隊談判卻遭逮捕，後未經審判於嘉義車站前被槍決。'
      },
      {
        id: 'closing',
        classes: ['wide', 'closing'],
        subtitle: [
          '誰能料想三月會做洪水！',
          '那突發的巨浪，沖破了那堅固的防堤。',
          '那無情的巨浪，流失了那美麗的田園。',
          '那激怒的巨浪，淹沈了那平和的城市。',
          '誰能料想三月會做洪水！',
          '有一位勇敢的青年，曾有過洋的經驗，',
          '未到防堤就被狂浪捲沒去了。',
          '有一位理智的青年，抱有新進的理論，',
          '未到田園就被泥海埋沒去了。',
          '有一位熱血的青年，吐露無限的純情，',
          '未到城市就被崩山壓沒去了。',
          '誰能料想三月會做洪水！',
          '洪水一過，滿地平坡！',
          '洪水一過，族親四散！',
          '洪水一過，人心如灰！',
          '誰能料想三月會做洪水！',
          '國家何時再建？',
          '民族何時復興？',
          '社會何時改革？'
        ],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-dark.jpg',
          width: 2400,
          height: 1350,
          magnify: false
        }
      }
    ] // end of scenes
  },
  authorship: [
    {
      job: '編輯設計',
      people: ['洪國鈞']
    },
    {
      job: '設計開發',
      people: ['游知澔']
    }
  ],
  references: [
    '二二八事件紀念基金會',
    '中研院台灣史研究所台灣日記知識庫',
    '國立公共資訊圖書館數位典藏服務網',
    '國史館臺灣文獻館臺灣省行政長官公署檔案'
  ]
}

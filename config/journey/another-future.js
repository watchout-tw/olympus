const defaultDarkBackgroundColor = '#333'
const defaultLightTextColor = '#efefef'
// const defaultLightBackgroundColor = '#efefef'
const defaultDarkTextColor = '#333'

export default {
  id: 'another-future',
  module: 'journey',
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
        url: 'https://aux.musou.watchout.tw/modern-history-of-taiwan/Imperial_Rescript_on_the_Termination_of_the_War-excerpt.mp3?l=20s' // Use external URL
      },
      {
        id: 'martial-law-declaration-broadcast',
        type: 'audio',
        url: 'https://aux.musou.watchout.tw/modern-history-of-taiwan/martial-law-declaration-broadcast-chen-yi-excerpt.mp3'
      }
    ],
    scenes: [
      {
        id: 'opening',
        name: '開場',
        classes: ['wide', 'opening'],
        beforeTitle: 'message.anotherJourney.diary228',
        title: 'message.anotherJourney.openSceneTitle',
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
        name: '第一景',
        classes: ['wide'],
        date: '1945-08-15',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/radio.png',
          width: 800,
          height: 800,
          magnify: false
        },
        subtitle: [
          'message.anotherJourney.scene1.subtitle.line1',
          'message.anotherJourney.scene1.subtitle.line2',
          'message.anotherJourney.scene1.subtitle.line3',
          'message.anotherJourney.scene1.subtitle.line4'
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
        name: '第二景',
        classes: ['wide'],
        date: '1945-10-08',
        description: 'message.anotherJourney.scene2.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/creation_of_minpo.jpg',
          width: 712,
          height: 1000,
          magnify: false
        }
      },
      {
        id: '1945-10-11',
        name: '第三景',
        classes: ['wide'],
        date: '1945-10-11',
        description: 'message.anotherJourney.scene3.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1945-10-11.gif',
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
        name: '第四景',
        classes: ['wide'],
        date: '1945-10-12',
        description: 'message.anotherJourney.scene4.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1945-10-12.gif',
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
        name: '第五景',
        classes: ['wide'],
        date: '1945-10-18',
        description: 'message.anotherJourney.scene5.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1945-10-18.gif',
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
        name: '第六景',
        classes: ['wide'],
        date: '1945-10-28',
        description: 'message.anotherJourney.scene6.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1945-10-28.gif',
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
        name: '第七景',
        classes: ['wide'],
        date: '1945-11-15',
        description: 'message.anotherJourney.scene7.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1945-11-15.gif',
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
        name: '第八景',
        classes: ['wide'],
        date: '1945-12-27',
        description: 'message.anotherJourney.scene8.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1945-12-27.gif',
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
        name: '第九景',
        classes: ['wide'],
        date: '1946-01-18',
        description: 'message.anotherJourney.scene9.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-01-18.gif',
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
        name: '第十景',
        classes: ['wide'],
        date: '1946-02-12',
        description: 'message.anotherJourney.scene10.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-02-12.gif',
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
        name: '第十一景',
        classes: ['wide'],
        date: '1946-02-21',
        description: 'message.anotherJourney.scene11.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-02-21.gif',
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
        name: '第十二景',
        classes: ['wide'],
        date: '1946-03-16',
        description: 'message.anotherJourney.scene12.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-03-16.gif',
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
        name: '第十三景',
        classes: ['wide'],
        date: '1946-03-30',
        description: 'message.anotherJourney.scene13.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-03-30.gif',
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
        name: '第十四景',
        classes: ['wide'],
        date: '1946-03-31',
        description: 'message.anotherJourney.scene14.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-03-31.gif',
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
        name: '第十五景',
        classes: ['wide'],
        date: '1946-04-06',
        description: 'message.anotherJourney.scene15.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-04-06.gif',
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
        name: '第十六景',
        classes: ['wide'],
        date: '1946-04-16',
        description: 'message.anotherJourney.scene16.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-04-16.gif',
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
        name: '第十七景',
        classes: ['wide'],
        date: '1946-04-19',
        description: 'message.anotherJourney.scene17.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-04-19.gif',
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
        name: '第十八景',
        classes: ['wide'],
        date: '1946-05-07',
        description: 'message.anotherJourney.scene18.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-05-07.gif',
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
        name: '第十九景',
        classes: ['wide'],
        date: '1946-07-14',
        description: 'message.anotherJourney.scene19.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-07-14.gif',
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
        name: '第二十景',
        classes: ['wide'],
        date: '1946-07-16',
        description: 'message.anotherJourney.scene20.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-07-16.gif',
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
        name: '第二十一景',
        classes: ['wide'],
        date: '1946-08-13',
        description: 'message.anotherJourney.scene21.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-08-13.gif',
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
        name: '第二十二景',
        classes: ['wide'],
        date: '1946-10-14',
        description: 'message.anotherJourney.scene22.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-10-14.gif',
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
        name: '第二十三景',
        classes: ['wide'],
        date: '1946-10-16',
        description: 'message.anotherJourney.scene23.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-10-16.gif',
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
        name: '第二十四景',
        classes: ['wide'],
        date: '1946-11-18',
        description: 'message.anotherJourney.scene24.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-11-18.gif',
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
        name: '第二十五景',
        classes: ['wide'],
        date: '1946-11-26',
        description: 'message.anotherJourney.scene25.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1946-11-26.gif',
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
        name: '第二十六景',
        classes: ['wide'],
        date: '1947-02-12',
        description: 'message.anotherJourney.scene26.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1947-02-12.gif',
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
        name: '第二十七景',
        classes: ['wide'],
        date: '1947-02-26',
        description: 'message.anotherJourney.scene27.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1947-02-26.gif',
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
        name: '第二十八景',
        classes: ['wide'],
        date: '1947-02-28',
        description: 'message.anotherJourney.scene28.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/1947-02-28.gif',
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
        name: '第二十九景',
        classes: ['wide'],
        date: '1947-03-09',
        backgroundAudio: {
          id: 'martial-law-declaration-broadcast'
        },
        subtitle: [
          'message.anotherJourney.scene29.subtitle.line1',
          'message.anotherJourney.scene29.subtitle.line2',
          'message.anotherJourney.scene29.subtitle.line3',
          'message.anotherJourney.scene29.subtitle.line4',
          'message.anotherJourney.scene29.subtitle.line5',
          'message.anotherJourney.scene29.subtitle.line6',
          'message.anotherJourney.scene29.subtitle.line7',
          'message.anotherJourney.scene29.subtitle.line8'
        ]
      },
      {
        id: '林茂生',
        name: '第三十景',
        classes: ['square'],
        description: 'message.anotherJourney.scene30.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/林茂生.jpg',
          width: 800,
          height: 800,
          magnify: false
        }
      },
      {
        id: '施江南',
        name: '第三十一景',
        classes: ['square'],
        description: 'message.anotherJourney.scene31.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/施江南.jpg',
          width: 800,
          height: 800,
          magnify: false
        }
      },
      {
        id: '陳炘',
        name: '第三十二景',
        classes: ['square'],
        description: 'message.anotherJourney.scene32.description',
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/陳炘.jpg',
          width: 800,
          height: 800,
          magnify: false
        }
      },
      {
        id: '黃朝生',
        name: '第三十三景',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/黃朝生.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: 'message.anotherJourney.scene33.description'
      },
      {
        id: '林界',
        name: '第三十四景',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/林界.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: 'message.anotherJourney.scene34.description'
      },
      {
        id: '吳鴻麒',
        name: '第三十五景',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/吳鴻麒.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: 'message.anotherJourney.scene35.description'
      },
      {
        id: '楊元丁',
        name: '第三十六景',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/楊元丁.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: 'message.anotherJourney.scene36.description'
      },
      {
        id: '王添灯',
        name: '第三十七景',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/王添灯.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: 'message.anotherJourney.scene37.description'
      },
      {
        id: '王育霖',
        name: '第三十八景',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/王育霖.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: 'message.anotherJourney.scene38.description'
      },
      {
        id: '陳澄波',
        name: '第三十九景',
        classes: ['square'],
        mainVisual: {
          type: 'image',
          url: 'journey/another-future-images/陳澄波.jpg',
          width: 800,
          height: 800,
          magnify: false
        },
        description: 'message.anotherJourney.scene39.description'
      },
      {
        id: 'closing',
        name: '第四十景',
        classes: ['wide', 'closing'],
        subtitle: [
          'message.anotherJourney.scene40.subtitle.line1',
          'message.anotherJourney.scene40.subtitle.line2',
          'message.anotherJourney.scene40.subtitle.line3',
          'message.anotherJourney.scene40.subtitle.line4',
          'message.anotherJourney.scene40.subtitle.line5',
          'message.anotherJourney.scene40.subtitle.line6',
          'message.anotherJourney.scene40.subtitle.line7',
          'message.anotherJourney.scene40.subtitle.line8',
          'message.anotherJourney.scene40.subtitle.line9',
          'message.anotherJourney.scene40.subtitle.line10',
          'message.anotherJourney.scene40.subtitle.line11',
          'message.anotherJourney.scene40.subtitle.line12',
          'message.anotherJourney.scene40.subtitle.line13',
          'message.anotherJourney.scene40.subtitle.line14',
          'message.anotherJourney.scene40.subtitle.line15',
          'message.anotherJourney.scene40.subtitle.line16'
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
  references: [
    'message.anotherJourney.references.memorialFoudation',
    'message.anotherJourney.references.taiwanDiaryArchive',
    'message.anotherJourney.references.digitalCollectionService',
    'message.anotherJourney.references.officialDocuments'
  ]
}

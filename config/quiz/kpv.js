export default {
  id: 'kpv',
  module: 'quiz',
  image: {
    default: 'quiz/kpv.png',
    pathTemplate: 'quiz/kpv-{1}.png',
    replacements: [
      {
        key: 'gc',
        regexp: /^[0-6]{1}-[0-6]{1}-[0-6]{1}$/
      }
    ]
  },
  sequence: {
    navigation: 'sequential',
    hasCorrectAnswer: true,
    showCorrectAnswer: true,
    canChangeAnswer: false,
    afterClickActions: [
      {
        name: 'coralreef'
      },
      {
        name: 'showDetail'
      },
      {
        name: 'accumulateScore'
      },
      {
        name: 'accumulateDetails',
        keys: [
          'time',
          'time.year',
          'person.title',
          'person.name'
        ]
      },
      {
        name: 'compareDetails',
        base: {
          'time': null,
          'time.year': 2014,
          'person.title': '候選人',
          'person.name': '柯文哲'
        },
        matchScenarios: [
          {
            match: [false, true, true, true],
            classes: ['correct'],
            message: '這真的是2014當選前的柯文哲耶，你怎麼這麼厲害？'
          },
          {
            match: [false, undefined, undefined, true],
            classes: ['incorrect'],
            message: '這是柯文哲，但不是2014當選前的柯文哲。'
          },
          {
            match: [false, undefined, undefined, false],
            classes: ['incorrect'],
            message: '這才不是柯文哲。'
          }
        ]
      },
      {
        name: 'showPrompt',
        keys: [
          'message'
        ]
      }
    ],
    scenes: [
      {
        id: 1,
        title: '對於同志婚姻及同志遊行，柯文哲的看法？',
        options: [
          {
            title: '我不但會公開支持同志婚姻，更要有計畫地遊說立法機關、舉行公開演講與辯論。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 3,
                date: 4
              },
              person: {
                name: '馮光遠',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            }
          },
          {
            title: '尊重並祝福同志婚姻，若無其他重大行程，我也都會樂於參加每一屆的同志遊行。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 7,
                date: 18
              },
              person: {
                name: '柯文哲',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            score: 1
          },
          {
            title: '同性戀我會尊重你，但並不表示我要去promotion（宣傳）；參加遊行的意願不高。',
            details: {
              type: '發言',
              time: {
                year: 2014,
                month: 12,
                date: 27
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《ETtoday》記者黃瀞瑩專訪'
            }
          },
          {
            title: '人民有不表態的自由。',
            details: {
              type: '發言',
              time: {
                year: 2018,
                month: 10,
                date: 9
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《風傳媒》報導'
            }
          }
        ],
        speechTarget: {
          id: 1798,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 2,
        title: '既得利益者不願意被打房，青年又無力負擔高房價，柯文哲如何解決？',
        options: [
          {
            title: '不會打房，因為營建業還是台灣重要的產業，亂打房會影響台灣經濟，台灣會完蛋。',
            details: {
              type: '發言',
              time: {
                year: 2015,
                month: 10,
                date: 23
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《蘋果》報導'
            }
          },
          {
            title: '台北市高房價的問題不是靠「打房」能解決，而是要靠提供更多住宅。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 4,
                date: 1
              },
              person: {
                name: '丁守中',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            }
          },
          {
            title: '由政府大量興辦只租不賣的「公共住宅」，目標設定台北市住宅存量的5%，約五萬戶。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 7,
                date: 28
              },
              person: {
                name: '柯文哲',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            score: 1
          },
          {
            title: '單純增建「社會住宅」、「青年住宅」等，無法徹底解決居住問題，也要考量整體社區的發展。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 4,
                date: 26
              },
              person: {
                name: '馮光遠',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            }
          }
        ],
        speechTarget: {
          id: 1799,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 3,
        title: '對於中國方面的施壓，柯文哲如何處理？',
        options: [
          {
            title: '我們不能無視他的存在，或逢中必反，但也不能完全任其擺佈，決定我們未來的發展走向。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 8,
                date: 7
              },
              person: {
                name: '柯文哲',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            score: 1
          },
          {
            title: '九二共識是兩岸關係和平發展的基礎，我對這個立場表示了解和尊重。',
            details: {
              type: '發言',
              time: {
                year: 2015,
                month: 8,
                date: 3
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              scenario: '面對中國媒體採訪',
              platform: '《中央社》報導'
            }
          },
          {
            title: '九二共識，就是下跪投降。',
            details: {
              type: '發言',
              time: {
                year: 2011,
                month: 12,
                date: 12
              },
              person: {
                name: '柯文哲',
                title: '時任台大醫院醫師'
              },
              platform: '《民視》報導'
            }
          },
          {
            title: '「九二共識」是甚麼，我到現在還不曉得。',
            details: {
              type: '發言',
              time: {
                year: 2014,
                month: 12,
                date: 22
              },
              platform: '《獨立媒體》影音',
              person: {
                name: '柯文哲',
                title: '當選台北市長的'
              },
              scenario: '關於雙城論壇'
            }
          }
        ],
        speechTarget: {
          id: 1800,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 4,
        title: '對於世大運選手村，柯文哲的說法？',
        options: [
          {
            title: '剛剛選手村、選手餐廳走一遭，我們比光州好太多了，目前沒看到甚麼需要改進的地方。',
            details: {
              type: '發言',
              time: {
                year: 2017,
                month: 8,
                date: 12
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《蘋果日報》報導'
            }
          },
          {
            title: '世大運花26億蓋選手村，12天後就拆掉，一聽就火大。',
            details: {
              type: '發言',
              time: {
                year: 2015,
                month: 1,
                date: 11
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《風傳媒》報導'
            }
          },
          {
            title: '台北市政府承辦2017世大運，在選手村的規畫方面，我認為一開始就走錯路。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 7,
                date: 28
              },
              person: {
                name: '柯文哲',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            score: 1
          },
          {
            title: '應該可以透過空間空屋活化的方式來獲得足夠的選手村場所。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 4,
                date: 26
              },
              person: {
                name: '馮光遠',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            }
          }
        ],
        speechTarget: {
          id: 1801,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 5,
        title: '對於轉型正義，柯文哲的立場？',
        options: [
          {
            title: '非選柯文哲不可的理由：實踐社會公義、落實轉型正義、建立公義社會。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 10,
                date: 7
              },
              person: {
                name: '柯文哲',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            score: 1
          },
          {
            title: '228只有受者者、沒有加害者，無法撫平傷痛。',
            details: {
              type: '發言',
              time: {
                year: 2017,
                month: 2,
                date: 28
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《風傳媒》報導'
            }
          },
          {
            title: '對「去蔣化」的看法是，應該給蔣介石公正的評斷，轉型正義不要變成勝利者的正義。',
            details: {
              type: '發言',
              time: {
                year: 2017,
                month: 3,
                date: 27
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《中央社》報導'
            }
          },
          {
            title: '現在運作好好的，以後不會再發生，你管過去在幹什麼？',
            details: {
              type: '發言',
              time: {
                year: 2018,
                month: 10,
                date: 27
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《自由時報》報導'
            }
          }
        ],
        speechTarget: {
          id: 1802,
          speechType: 'musou_long_form_scene_response'
        }
      },
      {
        id: 6,
        title: '2014沃草《市長給問嗎》網友提問「為什麼要投票給你」，柯文哲的回答？',
        options: [
          {
            title: '堅持進步價值：民主自由、多元開放、法治人權、關懷弱勢、永續經營。',
            details: {
              type: '「認同卡」內容',
              time: {
                year: 2018,
                month: 8,
                date: 23
              },
              person: {
                name: '柯文哲',
                title: '台北市長'
              },
              platform: '《臉書》'
            }
          },
          {
            title: '我將透過各種方式，積極增加年輕人與勞工薪資、並創造就業機會。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 10,
                date: 28
              },
              person: {
                name: '連勝文',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            }
          },
          {
            title: '建立「市長踹共」的網站，市長與市政團隊會立刻出面說明公民連署通過的問題。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 4,
                date: 22
              },
              person: {
                name: '馮光遠',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            }
          },
          {
            title: '素人新氣象，苦悶的台灣需要出路。',
            details: {
              type: '回答',
              time: {
                year: 2014,
                month: 10,
                date: 7
              },
              person: {
                name: '柯文哲',
                title: '候選人'
              },
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            score: 1
          }
        ],
        speechTarget: {
          id: 1803,
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
      name: 'showGroups',
      chartType: 'segments',
      base: {
        'time': null,
        'time.year': 2014,
        'person.title': '候選人',
        'person.name': '柯文哲'
      },
      message: '你的柯文哲成份組成統計圖表',
      groups: [
        {
          name: '選前柯文哲',
          color: '#50E3C2',
          match: [false, true, true, true],
          message: '你的柯文哲是2014當選前的柯文哲。'
        },
        {
          name: '選後柯市長',
          color: '#FF5368',
          match: [false, undefined, undefined, true],
          message: '你的柯文哲是2014當選後的柯市長。'
        },
        {
          name: '不是柯文哲',
          color: '#9B9B9B',
          match: [false, undefined, undefined, false],
          message: '你的柯文哲不是柯文哲。'
        }
      ],
      show: true,
      showGroupMessage: false
    },
    {
      name: 'showOccurences',
      chartType: 'segments',
      segment: {
        colors: ['#FF5368', '#FFB55D', '#F8E71C', '#B7F661', '#50E3C2', '#4DEBDF'],
        keys: [
          'time.year',
          'person.title',
          'person.name'
        ]
      },
      show: false
    }
  ],
  atCompletionActions: [
    {
      name: 'updateQuery',
      key: 'gc',
      value: {
        method: 'each',
        source: 'result.groups',
        key: 'count',
        joinChar: '-'
      }
    }
  ],
  closing: '四年過去了，還記得2014《台北市長給問嗎》，候選人說過什麼嗎？凡走過必留下痕跡，候選人在《台北市長給問嗎》的回答紀錄，都是檢驗政治人物的重要參考。\n\n針對2018選舉，沃草團隊推出《[六都市長給問嗎](https://ask.watchout.tw/)》，目標是持續強化公民與政治人物直接溝通的平台。基於這樣的理念，從今年六月起，我們就持續邀請所有六都市長候選人加入網站，台北市五位候選人中，已有吳萼洋、姚文智、李錫錕確定加入，而丁守中、柯文哲兩位的競選團隊成員也已口頭承諾阿草加入網站，請各位持續關注他們兩位的參戰消息。我們會持續邀請，也請所有關注市長選舉的公民，到網站上提問、連署你所關心的問題，也關注哪些候選人真正加入，並回答公民的問題。',
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

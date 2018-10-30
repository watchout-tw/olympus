export default {
  id: 'kpv',
  module: 'quiz',
  title: '柯p價值',
  image: 'quiz/kpv.png',
  date: '2018-11-08 20:00:00',
  breaking: true,
  description: '台北市長柯文哲在2014年參選時，加入沃草《台北市長給問嗎》網站，回答公民的提問。柯文哲的發言經常引起關注，不只帶來高人氣，甚至形成了「柯粉」、「柯黑」在網路上爭論的現象。四年過去了，你還記得哪些是柯文哲在2014年《市長給問嗎》網站上說過的話嗎？快來測測你的記憶力，看看你有多了解柯文哲！',
  sequence: {
    navigation: 'sequential',
    hasCorrectAnswer: true,
    canChangeAnswer: false,
    scenes: [
      {
        id: 1,
        title: '對於同志婚姻及同志遊行的看法？',
        options: [
          {
            title: '我不但會公開支持同志婚姻，更要有計畫地遊說立法機關、舉行公開演講與辯論。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '馮光遠',
              platform: '沃草《市長給問嗎》'
            }
          },
          {
            title: '尊重並祝福同志婚姻，若無其他重大行程，我也都會樂於參加每一屆的同志遊行。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '柯文哲',
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            afterClick: {
              score: 1
            }
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
              person: '柯文哲',
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
              person: '柯文哲',
              platform: '《風傳媒》報導'
            }
          }
        ]
      },
      {
        id: 2,
        title: '既得利益者不願意被打房，青年又無力負擔高房價，如何解決？',
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
              person: '柯文哲',
              platform: '《蘋果》報導'
            }
          },
          {
            title: '台北市高房價的問題不是靠「打房」能解決，而是要靠提供更多住宅。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '丁守中',
              platform: '沃草《市長給問嗎》'
            }
          },
          {
            title: '由政府大量興辦只租不賣的「公共住宅」，目標設定台北市住宅存量的5%，約五萬戶。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '柯文哲',
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            afterClick: {
              score: 1
            }
          },
          {
            title: '單純增建「社會住宅」、「青年住宅」等，無法徹底解決居住問題，也要考量整體社區的發展。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '馮光遠',
              platform: '沃草《市長給問嗎》'
            }
          }
        ]
      },
      {
        id: 3,
        title: '對於中國方面的施壓，你會如何處理？',
        options: [
          {
            title: '我們不能無視他的存在，或逢中必反，但也不能完全任其擺佈，決定我們未來的發展走向。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '柯文哲',
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            afterClick: {
              score: 1
            }
          },
          {
            title: '九二共識是兩岸關係和平發展的基礎，我對這個立場表示了解和尊重。',
            details: {
              type: '面對中國媒體採訪發言',
              time: {
                year: 2015,
                month: 8,
                date: 3
              },
              person: '柯文哲',
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
              title: '時任台大醫院醫師',
              person: '柯文哲',
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
              person: '柯文哲',
              scenario: '接受媒體訪問關於雙城論壇'
            }
          }
        ]
      },
      {
        id: 4,
        title: '對於世大運選手村的看法？',
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
              person: '柯文哲',
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
              person: '柯文哲',
              platform: '《風傳媒》報導'
            }
          },
          {
            title: '台北市政府承辦2017世大運，在選手村的規畫方面，我認為一開始就走錯路。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '柯文哲',
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            afterClick: {
              score: 1
            }
          },
          {
            title: '應該可以透過空間空屋活化的方式來獲得足夠的選手村場所。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '馮光遠',
              platform: '沃草《市長給問嗎》'
            }
          }
        ]
      },
      {
        id: 5,
        title: '對轉型正義的看法？',
        options: [
          {
            title: '非選柯文哲不可的理由：實踐社會公義、落實轉型正義、建立公義社會。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '柯文哲',
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            afterClick: {
              score: 1
            }
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
              person: '柯文哲',
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
              person: '柯文哲',
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
              person: '柯文哲',
              platform: '《自由時報》報導'
            }
          }
        ]
      },
      {
        id: 6,
        title: '回答《2014市長給問嗎》中提問「為什麼要投票給你」的理由？',
        options: [
          {
            title: '堅持進步價值：民主自由、多元開放、法治人權、關懷弱勢、永續經營。',
            details: {
              type: '內容',
              time: {
                year: 2018,
                month: 8,
                date: 23
              },
              person: '柯文哲',
              scenario: '臉書「認同卡」'
            }
          },
          {
            title: '我將透過各種方式，積極增加年輕人與勞工薪資、並創造就業機會。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '連勝文',
              platform: '沃草《市長給問嗎》'
            }
          },
          {
            title: '建立「市長踹共」的網站，市長與市政團隊會立刻出面說明公民連署通過的問題。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '馮光遠',
              platform: '沃草《市長給問嗎》'
            }
          },
          {
            title: '素人新氣象，苦悶的台灣需要出路。',
            details: {
              type: '回答',
              time: {
                year: 2014
              },
              person: '柯文哲',
              platform: '沃草《市長給問嗎》'
            },
            isCorrect: true,
            afterClick: {
              score: 1
            }
          }
        ]
      }
    ]
  },
  authorship: [
    {
      job: '編輯',
      people: ['王希', '洪國鈞']
    },
    {
      job: '設計開發',
      people: ['游知澔']
    }
  ],
  references: []
}

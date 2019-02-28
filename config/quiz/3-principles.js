export default {
  id: '3-principles',
  module: 'quiz',
  sequence: {
    navigation: 'sequential',
    hasCorrectAnswer: true,
    canChangeAnswer: false,
    afterClickActions: [
      {
        name: 'accumulateScore'
      }
    ],
    scenes: [
      {
        id: 1,
        title: '下列那一項敘述最能說明三民主義是「國家發展」的指導綱領？【1994年大學推薦甄選學測】',
        options: [
          {
            title: '以打不平的精神，將民族革命、政治革命與社會革命，畢其功於一役'
          },
          {
            title: '聯合世界上以獨立國家待我之民族，共同奮鬥'
          },
          {
            title: '主張促進中國之國家地位平等、政治地位平等以及經濟地位平等'
          },
          {
            title: '主張依軍政、訓政、憲改三個時期來推行建設',
            isCorrect: true,
            score: 10
          }
        ],
        references: []
      },
      {
        id: 2,
        title: '就民族主義的功能來說，民族主義又可作什麼闡釋？【1994年航海人員、漁船船員、船舶電信人員特考】',
        options: [
          {
            title: '平天下主義'
          },
          {
            title: '民族平等主義'
          },
          {
            title: '理想的世界主義'
          },
          {
            title: '國家圖發展和種族圖生存的寶貝',
            isCorrect: true,
            score: 10
          }
        ],
        references: []
      },
      {
        id: 3,
        title: '先總統　蔣公說：「團結在三民主義之下，革命才能成功，中國才能達到自由平等的地位。」由此可見三民主義是什麼主義？【1993年警察特考】',
        options: [
          {
            title: '平等主義'
          },
          {
            title: '救國主義',
            isCorrect: true,
            score: 10
          },
          {
            title: '建國主義'
          },
          {
            title: '自由主義'
          }
        ],
        references: []
      },
      {
        id: 4,
        title: '就歷史進化的道理言，國父是認為民權是如何產生的？【1994年國安局特考】',
        options: [
          {
            title: '天賦與生俱來'
          },
          {
            title: '神權進化而來'
          },
          {
            title: '人權伸張而來'
          },
          {
            title: '潮流造就而來',
            isCorrect: true,
            score: 10
          }
        ],
        references: []
      },
      {
        id: 5,
        title: '國父認為人類要能夠生存，須有兩件最大的事，這兩件最大的事是指什麼？【1994年專門職業及技術人員普考】',
        options: [
          {
            title: '教和衛'
          },
          {
            title: '保和養',
            isCorrect: true,
            score: 10
          },
          {
            title: '管和教'
          },
          {
            title: '教和養'
          }
        ],
        references: []
      },
      {
        id: 6,
        title: '為使選舉能達到選賢與能的理想，所以應當？【1992年專門職業及技術人員普考】',
        options: [
          {
            title: '以學歷限制選舉人資格'
          },
          {
            title: '以考試限制選舉人資格'
          },
          {
            title: '以考試限制候選人資格',
            isCorrect: true,
            score: 10
          },
          {
            title: '對選舉人和候選人不應有任何限制'
          }
        ],
        references: []
      },
      {
        id: 7,
        title: '歐美的三權分立制，其所以容易形成國會專制，那是因為什麼緣故？【1994年航海人員、漁船船員、船舶電信人員特考】',
        options: [
          {
            title: '國會擁有質詢權與預算權'
          },
          {
            title: '行政機關兼考試權'
          },
          {
            title: '立法機關兼監察權',
            isCorrect: true,
            score: 10
          },
          {
            title: '國會擁有倒閣權'
          }
        ],
        references: []
      },
      {
        id: 8,
        title: '國父在民族主義中指出，我國自何時而後，都是一個民族造成一個國家？【1993年司法政風人員特考】',
        options: [
          {
            title: '周朝'
          },
          {
            title: '秦漢',
            isCorrect: true,
            score: 10
          },
          {
            title: '魏晉'
          },
          {
            title: '隋唐'
          }
        ],
        references: []
      },
      {
        id: 9,
        title: '五權憲法的精神在於五權▁▁？【1993年全國公務人員普通考試】',
        options: [
          {
            title: '分立而相成',
            isCorrect: true,
            score: 10
          },
          {
            title: '分立而牽制'
          },
          {
            title: '各自孤立'
          },
          {
            title: '互相制衡'
          }
        ],
        references: []
      },
      {
        id: 10,
        title: '中國以前沒有自由這個名詞，但國父說有一種跟自由相彷彿的固有名詞是？【1996年高等暨普通中醫師檢定考試】',
        options: [
          {
            title: '為所欲為'
          },
          {
            title: '我行我素'
          },
          {
            title: '放蕩不羈',
            isCorrect: true,
            score: 10
          },
          {
            title: '放浪形骸'
          }
        ],
        references: []
      }
    ]
  },
  results: [
    {
      score: 80,
      text: '恭喜你成功通過黨國體制篩選，可以當公務員囉！'
    },
    {
      score: 60,
      text: '你是不是沒用過國立編譯館課本？'
    },
    {
      text: '你已經成為去中國化教材的受害者。'
    }
  ],
  closing: '覺得《三民主義》考題很荒謬嗎？這可是《中華民國憲法》明定的立國精神喔！1949年以來，只有熟讀《三民主義》的台灣人，才能得到較好的升學機會或是考上公職，成為「人生勝利組」，這就是數十年來中華民國國家機器篩選「人才」的方法。直到1994年考試院才開始逐步廢除《三民主義》作為國家考試科目；大學入學考試則一直要到2009年開始才不用再考《三民主義》。',
  references: [
    '考選部1993年警察特考[試題](http://wwwc.moex.gov.tw/ExamQuesFiles/Question/082/018000c104.pdf)及[答案](http://wwwc.moex.gov.tw/ExamQuesFiles/StandardAnswer/082/33448s.pdf)',
    '考選部1994年國安局特考[試題](http://wwwc.moex.gov.tw/ExamQuesFiles/Question/083/013000c084.pdf)及[答案](http://wwwc.moex.gov.tw/ExamQuesFiles/StandardAnswer/083/15604s.pdf)',
    '考選部1994年專門職業及技術人員普考[試題](http://wwwc.moex.gov.tw/ExamQuesFiles/Question/083/033000c164.pdf)及[答案](http://wwwc.moex.gov.tw/ExamQuesFiles/StandardAnswer/083/15659s.pdf)',
    '考選部1992年專門職業及技術人員普考[試題](http://wwwc.moex.gov.tw/ExamQuesFiles/Question/081/001000c144.pdf)及[答案](http://wwwc.moex.gov.tw/ExamQuesFiles/Answer//081010_81%E5%B9%B4%E6%B8%AC%E9%A9%97%E9%A1%8C%E7%AD%94%E6%A1%88.pdf)',
    '考選部1994年航海人員、漁船船員、船舶電信人員特考[試題](http://wwwc.moex.gov.tw/ExamQuesFiles/Question/083/030000c064.pdf)及[答案](http://wwwc.moex.gov.tw/ExamQuesFiles/StandardAnswer/083/15652s.pdf)',
    '考選部1993年司法政風人員特考[試題](http://wwwc.moex.gov.tw/ExamQuesFiles/Question/082/023000c084.pdf)及[答案](http://wwwc.moex.gov.tw/ExamQuesFiles/StandardAnswer/082/33464s.pdf)',
    '考選部1993年全國公務人員普通考試[試題](http://wwwc.moex.gov.tw/ExamQuesFiles/Question/082/016000c034.pdf)及[答案](http://wwwc.moex.gov.tw/ExamQuesFiles/ModifyAnswer/082/15059m.pdf)',
    '考選部1996年高等暨普通中醫師檢定考試[試題](http://wwwc.moex.gov.tw/ExamQuesFiles/Question/085/006000c124.pdf)及[答案](http://wwwc.moex.gov.tw/ExamQuesFiles/StandardAnswer/085/16533s.pdf)',
    '大考中心1994年學測社會科[試題](http://www.ceec.edu.tw/AbilityExam/AbilityExamPaper/83SAT_Paper/83%E5%B9%B4%E5%AD%B8%E6%B8%AC%E7%A4%BE%E6%9C%83%E7%A7%91.pdf)及[答案](http://www.ceec.edu.tw/AbilityExam/AbilityExamPaper/83SAT_Paper/83%E5%B9%B4%E5%AD%B8%E6%B8%AC%E7%AD%94%E6%A1%88.pdf)',
    '大考中心1995年學測社會科[試題](http://www.ceec.edu.tw/AbilityExam/AbilityExamPaper/84SAT_Paper/84%E5%B9%B4%E5%AD%B8%E6%B8%AC%E7%A4%BE%E6%9C%83%E7%A7%91.pdf)及[答案](http://www.ceec.edu.tw/AbilityExam/AbilityExamPaper/84SAT_Paper/84%E5%B9%B4%E5%AD%B8%E6%B8%AC%E7%AD%94%E6%A1%88.pdf)'
  ]
}

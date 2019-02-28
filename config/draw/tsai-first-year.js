export default {
  id: 'tsai-first-year',
  module: 'draw',
  charts: [
    {
      id: 'unemployment',
      title: '每年失業率',
      sheetID: '541577362',
      speechTarget: {
        id: 482,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 1,
          unit: '%',
          label: '%',
          min: 0,
          max: 10,
          ticks: [0, 5, 10],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '失業率',
        before: '從馬英九到蔡英文政府，你覺得每年的失業率長怎樣呢？',
        after: '在2008年世界金融危機後失業率**大幅升高**，之後**穩定下降**。\n\n根據行政院主計處[統計資料](https://www.stat.gov.tw/point.asp?index=3)，國民黨馬政府2008年5月上任時，國內失業率為3.87%。2009年8月時曾一度攀升到6.08％，達到失業率歷史高峰。2016年5月蔡英文上任時，失業率則為3.84％， 就任一年後，目前最新一季的平均失業率是3.80%。'
      }
    },
    {
      id: 'annual-visitors',
      title: '每年來台旅客人數',
      sheetID: '1810543594',
      speechTarget: {
        id: 483,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 1000000,
          unit: 'person',
          label: '百萬人',
          min: 0,
          max: 12000000,
          ticks: [0, 5000000, 10000000, 12000000],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '來台旅客有多少',
        before: '政黨輪替後，被視為推展觀光績效的來台旅客人數常被拿出來檢驗，到底蔡英文政府執政的第一年，不分國籍的旅客來台旅客是增加還是減少呢？',
        after: '蔡政府執政第一年，來台旅客**持續增加**中。\n\n根據交通部觀光局[統計數據](http://admin.taiwan.net.tw/statistics/year.aspx?no=134)，民進黨扁政府2007年卸任前來台旅客為371萬人。國民黨馬政府執政後，來台旅客人數持續攀高，至2015年達1,043萬人。2016年民進黨蔡政府執政後，來台旅客人數則持續上升至1,069萬人。'
      }
    },
    {
      id: 'monthly-visitors-china',
      title: '中國旅客每月來台人數',
      sheetID: '918177893', // run get.py and get sheetID from data/graphs.json
      speechTarget: {
        id: 484,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'month',
          label: '月'
        },
        y: {
          divider: 10000,
          unit: 'person',
          label: '萬人',
          min: 0,
          max: 900000,
          ticks: [0, 500000, 900000],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '中國旅客有多少',
        before: '國民黨馬政府執政時，中國旅客來台人數連年攀高，在民進黨蔡政府執政這一年，你認為會怎麼變化呢？',
        after: '蔡英文執政後，中國旅客人數**逐月下降**。\n\n根據交通部觀光局[統計數據](http://admin.taiwan.net.tw/statistics/year.aspx?no=134)，2015年4月，每月來台旅客中有超過35萬人為中國人，約佔全體來台旅客4成。至2016年2月總統馬英九卸任前夕，中國旅客更是單月突破四十萬人，比例高達44%成為近年高峰。\n\n2016年5月政黨輪替後，中國旅客人數逐月下降，於2016年6月起低於30萬人。至今年3月，來台中國旅客人數降至20萬人，佔總體來台旅客22%。'
      }
    },
    {
      id: 'monthly-visitors-world',
      title: '世界旅客每月來台人數',
      sheetID: '918177893', // run get.py and get sheetID from data/graphs.json
      speechTarget: {
        id: 485,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'month',
          label: '月'
        },
        y: {
          divider: 10000,
          unit: 'person',
          label: '萬人',
          min: 0,
          max: 900000,
          ticks: [0, 500000, 900000],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      compare: [
        {
          id: 'monthly-visitors-china',
          label: '中國旅客每月來台人數',
          valLabel: true
        }
      ],
      text: {
        title: '中國以外國際旅客有多少',
        before: '民進黨蔡政府執政一年來，中國旅客以外的國際旅客來台人數，你認為是增加還是減少呢？',
        after: '一年來，中國以外國際旅客**增加35.5%**。\n\n交通部觀光局[統計](http://admin.taiwan.net.tw/statistics/year.aspx?no=134)，2016年4月政黨輪替前，除中國外其他國家來台旅客與前一年同期相近，約為53萬人，佔總體旅客人數約58%。\n\n政黨輪替後，其他國家旅客不斷攀升，至2016年底更一度突破80萬人，到今年3月份則為72萬人，佔總體旅客78%。'
      }
    },
    {
      id: 'annual-revenue',
      title: '中央政府歲入',
      sheetID: '1456792974',
      speechTarget: {
        id: 486,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 1000000,
          unit: 'ntd',
          label: '兆元',
          min: 1000000,
          max: 2400000,
          ticks: [1000000, 2000000],
          formatString: 'd'
        }
      },
      sequenceCount: 2,
      sequence: {
        label: {
          formatString: '.2f'
        }
      },
      text: {
        title: '政府每年收入',
        before: '民進黨執政一年來，政府藉由稅收、營業盈餘等各項財政收入所構成的「歲入」預算，你覺得跟馬政府比起來有什麼不同？',
        after: '維持馬政府時的趨勢，歲入**穩定上升**中。\n\n行政院主計處[統計資料](http://www.dgbas.gov.tw/public/data/dgbas01/106/106Ctab/106C歷年中央政府收支概況表.PDF)指出，政府歲入於民進黨扁政府2007年卸任前為1兆6355億元。到了國民黨馬政府時期，2010年曾一度下滑至1兆4974億，到卸任前2015年時則增加到1兆8857億元。民進黨蔡政府執政後，2017年預算歲入則為1兆8411億元。'
      }
    },
    {
      id: 'annual-spending',
      title: '中央政府歲出',
      sheetID: '1456792974',
      speechTarget: {
        id: 487,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 1000000,
          unit: 'ntd',
          label: '兆元',
          min: 1000000,
          max: 2400000,
          ticks: [1000000, 2000000],
          formatString: 'd'
        }
      },
      sequenceCount: 2,
      sequence: {
        label: {
          formatString: '.2f'
        }
      },
      compare: [
        {
          id: 'annual-revenue',
          label: '中央政府歲入',
          valLabel: true
        }
      ],
      text: {
        title: '政府每年支出',
        before: '這一年下來，政府每年推動各項政務的「歲出」預算，你認為跟馬英九政府相比如何呢？',
        after: '蔡政府第一年歲出預算維持和前一年相當，**無明顯成長**。\n\n依據行政院主計處[統計資料](http://www.dgbas.gov.tw/public/data/dgbas01/106/106Ctab/106C歷年中央政府收支概況表.PDF)，於2006年民進黨扁政府執政期間，開始出現收入大於支出，2007年在歲出為1兆5520億元下，還創造了834億元餘絀。\n\n國民黨政府上任後，除政黨輪替第一年（2008）仍有餘絀，其餘7年都呈現超支，其中以2012年超支2140億元為最。而民進黨再次執政後，目前仍是歲出大於歲入，以2017年預算來看，歲入1兆8411億元、歲出1兆9740億元，超支1329億元。'
      }
    },
    {
      id: 'public-debt',
      title: '中央政府一年以上公共債務未償餘額',
      sheetID: '92876274',
      speechTarget: {
        id: 488,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 1000000,
          unit: 'ntd',
          label: '兆元',
          min: 0,
          max: 8000000,
          ticks: [0, 5000000, 8000000],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '政府累積債務',
        before: '自2010年國民黨政府到現在民進黨政府執政一年來，政府積欠的「一年以上未償公共債務」，你認為該如何變化呢？',
        after: '原先累積速度趨緩的債務**又有上升的趨勢**。\n\n根據財政部[統計資料](http://www.mof.gov.tw/Pages/public/Data/statistic/monthly/10602/22150_10602.pdf)，民進黨扁政府卸任前「公共債務」為3兆7182億元。國民黨馬政府就任後，在首次任期屆滿前、2011年時，國債增加到4兆7551億元。\n\n而馬英九政府2015年卸任前，國債更增加到5兆3012億元。民進黨政府上任一年，截至2017年2月底國債額度則為5兆3808億元，依據預算預計年底債務將為5兆5194億元。'
      }
    }
  ],
  beforeConclusion: '畫完了，然後呢？',
  conclusion: {
    title: '結論：關心政治、持續監督',
    description: '這次你得了幾分呢？蔡總統第一年的表現和你想的一樣嗎？\n\n真實的數據，是否讓你感到意外？逐年攀升的國債是否令你吃驚呢？事實上，現在立法院正在審查前瞻基礎建設特別條例，未來八年很可能會再舉債八千八百多億，國債也會繼續攀升，或許明年再看到這些圖表的時候，你會更為驚訝。\n\n在沃草，我們持續以各種方式報導國會，**努力降低理解複雜議題的門檻**。像《蔡總統的第一年》這樣的資訊新聞需要許多人力整理資料、設計、製作，如果你喜歡沃草的內容，請別忘了[支持我們](https://watchout.tw/?support)！'
  }
}

export default {
  id: 'tsai-second-year',
  module: 'draw',
  title: '蔡總統的第二年',
  description: '蔡英文政府已執政滿兩週年，跟過去幾年相比，到底表現好不好呢？沃草透過比較從扁政府、馬政府到蔡政府第一、二年的各項數據，請你先自己畫出心中的感受，再來看看跟真實數據的差多少？',
  image: 'draw/tsai-second-year.png',
  date: '2017-05-17 22:00:00',
  breaking: false,
  authorship: [
    {
      job: '數據分析',
      people: ['洪國鈞']
    },
    {
      job: '編輯',
      people: ['洪國鈞']
    },
    {
      job: '設計開發',
      people: ['陳昭廷', '游知澔']
    }
  ],
  graphs: [
    {
      id: 'annual-death',
      title: '死亡率',
      sheetID: '',
      speechTarget: {
        id: 178,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 10000,
          unit: 'person',
          label: '萬人',
          min: 0,
          max: 500000,
          ticks: [0, 250000, 500000],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '死亡率',
        before: '',
        after: ''
      }
    },
    {
      id: 'annual-birth',
      title: '出生率',
      sheetID: '',
      speechTarget: {
        id: 178,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 10000,
          unit: 'person',
          label: '萬人',
          min: 0,
          max: 500000,
          ticks: [0, 250000, 500000],
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
          id: 'annual-death',
          label: '死亡率'
        }
      ],
      text: {
        title: '出生率',
        before: '',
        after: ''
      }
    },
    {
      id: 'annual-visitors',
      title: '每年來台旅客人數',
      sheetID: '',
      speechTarget: {
        id: 176,
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
          ticks: [0, 4000000, 8000000, 12000000],
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
          id: 'annual-visitors-china',
          label: '中國每年來台旅客人數'
        }
      ],
      text: {
        title: '來台旅客有多少',
        before: '政黨輪替後，被視為推展觀光績效的來台旅客人數常被拿出來檢驗，到底蔡英文政府執政的第一年，不分國籍的旅客來台旅客是增加還是減少呢？',
        after: '蔡政府執政第一年，來台旅客**持續增加**中。\n\n根據交通部觀光局[統計數據](http://admin.taiwan.net.tw/statistics/year.aspx?no=134)，民進黨扁政府2007年卸任前來台旅客為371萬人。國民黨馬政府執政後，來台旅客人數持續攀高，至2015年達1,043萬人。2016年民進黨蔡政府執政後，來台旅客人數則持續上升至1,069萬人。'
      }
    },
    {
      id: 'annual-visitors-china',
      title: '中國每年來台旅客人數',
      sheetID: '',
      speechTarget: {
        id: 176,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 100000,
          unit: 'person',
          label: '萬人',
          min: 0,
          max: 4200000,
          ticks: [0, 1400000, 2800000, 4200000],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '中國每年來台旅客人數',
        before: '',
        after: ''
      }
    },
    {
      id: 'annual-stock',
      title: 'STOCK',
      sheetID: '',
      speechTarget: {
        id: 178,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 1000,
          unit: '千點',
          label: '千點',
          min: 0,
          max: 12000,
          ticks: [0, 4000, 8000, 12000],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: 'stock',
        before: '',
        after: ''
      }
    },
    {
      id: 'unemployment',
      title: '每年失業率',
      sheetID: '',
      speechTarget: {
        id: 175,
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
      id: 'economy-growth-rate',
      title: '經濟成長率',
      sheetID: '',
      speechTarget: {
        id: 175,
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
          min: -5,
          max: 15,
          ticks: [-5, 0, 5, 10, 15],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '經濟成長率',
        before: '',
        after: ''
      }
    },
    {
      id: 'customer-price-index',
      title: '消費者物價指數',
      sheetID: '',
      speechTarget: {
        id: 175,
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
          unit: '',
          label: '',
          min: 60,
          max: 120,
          ticks: [60, 80, 100, 120],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '消費者物價指數',
        before: '',
        after: ''
      }
    },
    {
      id: 'annual-income',
      title: '年均所得',
      sheetID: '', // run get.py and get sheetID from data/graphs.json
      speechTarget: {
        id: 178,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'month',
          label: '月'
        },
        y: {
          divider: 1,
          unit: '',
          label: '',
          min: 60,
          max: 120,
          ticks: [60, 80, 100, 120],
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
          id: 'customer-price-index',
          label: '消費者物價指數'
        }
      ],
      text: {
        title: '年均所得',
        before: '',
        after: ''
      }
    },
    {
      id: 'working-hours',
      title: '工時',
      sheetID: '',
      speechTarget: {
        id: 175,
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
          unit: 'hr',
          label: '小時',
          min: 160,
          max: 200,
          ticks: [160, 170, 180, 190, 200],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '工時',
        before: '',
        after: ''
      }
    },
    {
      id: 'air-pollution-shalu',
      title: '空氣指數【沙鹿】',
      sheetID: '',
      speechTarget: {
        id: 175,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'quarter',
          labelBefore: 'Q'
        },
        y: {
          divider: 1,
          unit: '',
          label: '',
          min: 0,
          max: 75,
          ticks: [0, 25, 50, 75],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '空氣指數【沙鹿】',
        before: '',
        after: ''
      }
    },
    {
      id: 'air-pollution-nanzi',
      title: '空氣指數【楠梓】',
      sheetID: '',
      speechTarget: {
        id: 175,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'quarter',
          labelBefore: 'Q'
        },
        y: {
          divider: 1,
          unit: '',
          label: '',
          min: 0,
          max: 75,
          ticks: [0, 25, 50, 75],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '空氣指數【楠梓】',
        before: '',
        after: ''
      }
    },
    {
      id: 'nuclear-power',
      title: '核能',
      sheetID: '',
      speechTarget: {
        id: 175,
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
          unit: '億度',
          label: '億度',
          min: 0,
          max: 500,
          ticks: [0, 100, 200, 300, 400, 500],
          formatString: 'd'
        }
      },
      sequence: {
        label: {
          formatString: '.1f'
        }
      },
      text: {
        title: '核能',
        before: '',
        after: ''
      }
    },
    {
      id: 'power-generate',
      title: '再生能源',
      sheetID: '',
      speechTarget: {
        id: 175,
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
          unit: '億度',
          label: '億度',
          min: 0,
          max: 500,
          ticks: [0, 100, 200, 300, 400, 500],
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
          id: 'nuclear-power',
          label: '核能'
        }
      ],
      text: {
        title: '再生能源',
        before: '',
        after: ''
      }
    }
  ],
  beforeConclusion: '畫完了，然後呢？',
  conclusion: {
    title: '結論：關心政治、持續監督',
    description: '這次你得了幾分呢？蔡總統第一年的表現和你想的一樣嗎？\n\n真實的數據，是否讓你感到意外？逐年攀升的國債是否令你吃驚呢？事實上，現在立法院正在審查前瞻基礎建設特別條例，未來八年很可能會再舉債八千八百多億，國債也會繼續攀升，或許明年再看到這些圖表的時候，你會更為驚訝。\n\n在沃草，我們持續以各種方式報導國會，**努力降低理解複雜議題的門檻**。像《蔡總統的第一年》這樣的資訊新聞需要許多人力整理資料、設計、製作，如果你喜歡沃草的內容，請別忘了[支持我們](https://watchout.tw/#support)！'
  }
}

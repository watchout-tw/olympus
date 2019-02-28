export default {
  id: 'tsai-second-year',
  module: 'draw',
  charts: [
    {
      id: 'economy-growth-rate',
      index: 7,
      title: '經濟成長率',
      sheetID: '',
      speechTarget: {
        id: 489,
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
        before: '先來練習一下吧。自己畫畫看，你覺得這幾年的經濟成長率如何？',
        after: '2010年經濟成長率曾突破10%，之後逐年下滑，**近兩年則緩步提升**。\n\n2009年馬政府執政時遇上全球金融海嘯，經濟呈現負成長，僅有-1.57%。隔年，在比較基準相對低的情況下，達到成長10.63%的高峰，其後逐年下滑，2015年僅有0.81%。蔡英文政府上任後緩步提升，2017年經濟成長率回復至2.81%。'
      }
    },
    {
      id: 'taiwan-stock-exchange-weighted-index',
      index: 8,
      title: '加權股價指數年平均',
      sheetID: '',
      speechTarget: {
        id: 490,
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
        title: '加權股價指數年平均',
        before: '自己畫畫看，你覺得這幾年股票市場的表現如何呢？',
        after: '2009年金融海嘯衝擊後，股市逐漸回升，並於2017年達到加權股價指數**年平均破萬**記錄。\n\n2009年馬政府執政時遇上全球金融海嘯，上市股票加權指數年平均跌至6459點，之後緩步提升。而2017年則達到年平均10208點的歷史紀錄，並持續突破台股破萬點最長天數紀錄。'
      }
    },
    {
      id: 'unemployment',
      index: 1,
      title: '每年失業率',
      sheetID: '',
      speechTarget: {
        id: 491,
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
        before: '自己畫畫看，你覺得這幾年的失業率如何呢？',
        after: '2008年金融海嘯衝擊後失業率大幅升高，之後穩定下降，並於2018年前兩月則為3.67%。\n\n馬政府2008年5月上任時，國內失業率為3.87%。2009年8月時曾一度攀升到6.13％，達到失業率歷史高峰。2016年5月蔡英文上任時，失業率則為3.84％， 就任兩年後，2018年前兩個月的平均失業率則為3.67%。'
      }
    },
    {
      id: 'working-hours',
      index: 2,
      title: '每月總工時',
      sheetID: '',
      speechTarget: {
        id: 492,
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
        title: '每月總工時',
        before: '自己畫畫看，你覺得這幾年的每月總工作時數起伏如何呢？',
        after: '蔡英文執政每月總工時**首年大幅下降**，但**第二年微幅提升**。\n\n歷年每月總工時呈現逐步下滑的趨勢。馬政府時期，月總工時從2008年的每月179.7小時，到2015年降為175.3小時。又因為2016年起正常工時從「雙週84小時」改為「單週40小時」，月總工時再降為169.5小時，2017年微幅提升為169.6小時。'
      }
    },
    {
      id: 'consumer-price-index',
      index: 3,
      title: '消費者物價指數',
      sheetID: '',
      speechTarget: {
        id: 493,
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
          min: 70,
          max: 120,
          ticks: [70, 95, 120],
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
        before: '自己畫畫看，你覺得這幾年物價的波動如何呢？',
        after: '蔡政府執政第二年的物價指數成長幅度為**0.62%**。\n\n如果將2016年物價作為參考基準100，2008年馬政府初執政時為93.74，卸任前夕的2015年則為98.63，每年約成長1.08%。2016年蔡英文執政第一年物價成長率為1.39%，第二年則下降為0.62%。可以和下圖月均總薪資成長幅度最比較。'
      }
    },
    {
      id: 'annual-income',
      index: 4,
      title: '月均總薪資',
      sheetID: '', // run get.py and get sheetID from data/graphs.json
      speechTarget: {
        id: 494,
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
          unit: 'NTD',
          label: '千元',
          min: 36000,
          max: 54000,
          ticks: [36000, 45000, 54000],
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
          id: 'income-based-cpi',
          label: '消費者物價指數',
          valLabel: false
        }
      ],
      text: {
        title: '月均總薪資',
        before: '自己畫畫看，你覺得這幾年勞工薪資的成長狀況如何呢？',
        after: '蔡政府執政第二年的**月均總薪資為49989元**，較前一年**增加2.46%**。\n\n除2008年金融海嘯後連兩年勞工每月平均總薪資呈現負成長，歷年皆緩步成長。馬政府2008年初執政時為44367元，2015年則成長至48490元，每年約成長1.15%。蔡英文執政時，月均總薪資則由2016年的48790元成長為2017年的49989元，增加2.46%。'
      }
    },
    {
      id: 'annual-birth',
      index: 5,
      title: '出生人口數',
      sheetID: '',
      speechTarget: {
        id: 495,
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
          max: 400000,
          ticks: [0, 200000, 400000],
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
          label: '死亡人口數',
          valLabel: true
        }
      ],
      text: {
        title: '出生人口數',
        before: '自己畫畫看，你覺得最近每年有多少新生兒出生呢？',
        after: '近十年僅有四年有超過20萬新生兒，2017年則**僅有193844人出生**，**為十年來第三低**。\n\n自2008年首次自然出生人數低於20萬人後，近十年僅有四年出生人口超過20萬。2017年，蔡英文政府執政的第二年，自然死亡人口數已緩步提升至17萬人，而出生人口仍僅有193844人，台灣人口已逐漸邁向死亡數大於出生數的死亡交叉。'
      }
    },
    {
      id: 'annual-visitors',
      index: 6,
      title: '來台旅客人數',
      sheetID: '',
      speechTarget: {
        id: 496,
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
          label: '中國每年來台旅客人數',
          valLabel: true
        }
      ],
      text: {
        title: '來台旅客人數',
        before: '自己畫畫看，你覺得近年來台旅客是增加還是減少呢？',
        after: '蔡政府執政第二年，雖中國遊客減少，但總來台旅客仍**持續增加**中。\n\n自2008年馬政府開放中國遊客來台後，來台旅客總人數持續攀高，至2015年首次突破千萬人次，中國遊客也達到418萬人的高峰。2016年民進黨蔡政府執政後，中國來台遊客數持續探底，2017年更降為273萬人，但來台旅客總人數仍逐年上升至1074萬人。'
      }
    },
    {
      id: 'air-pollution-nanzi',
      index: 9,
      title: '高雄楠梓空氣PM2.5數值',
      sheetID: '',
      speechTarget: {
        id: 497,
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
          label: 'μg/m^3',
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
        title: '高雄楠梓空氣PM2.5數值',
        before: '自己畫畫看，你覺得近年高雄的空氣品質有沒有改善呢？',
        after: '空氣細懸浮微粒（PM2.5）濃度於2015年中降至低點後，又逐漸些微提升。\n\n空氣細懸浮微粒（PM2.5）為主要的空氣污染指標之一，從環保署公開之高雄楠梓監測數值可發現，PM2.5濃度已從2014年的40.58（μg/m^3）降至2017年的29.42，但仍較2015年的22.92來得高。'
      }
    },
    {
      id: 'renewable-energy',
      index: 10,
      title: '再生能源發電量',
      sheetID: '',
      speechTarget: {
        id: 498,
        speechType: 'musou_line_chart_response'
      },
      axes: {
        x: {
          divider: 1,
          unit: 'year',
          label: '年'
        },
        y: {
          divider: 10,
          unit: '十億度',
          label: '十億度',
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
          label: '核能',
          valLabel: true
        }
      ],
      text: {
        title: '再生能源發電量',
        before: '自己畫畫看，你覺得再生能源發電量有沒有提升呢？',
        after: '從2016年起，再生能源年總發電量即**超過100億度**，**近十年共成長2.3倍**。\n\n再生能源總發電量過去長時間維持在50億度以下的年總發電量，直至從2010年開始逐步成長，並於2016年首次突破100億度關卡。2017年，相較於核能發電僅剩2008年的55%，再生能源發電度數則從48.9億度成長至112.5億度，成長2.3倍。'
      }
    }
  ],
  beforeConclusion: '畫完了，然後呢？',
  conclusion: {
    title: '結論：人民的感受才是成績單',
    description: '蔡英文政府執政的表現跟你想像有落差嗎？各項公開數據的結果跟你所感受的差距很大嗎？\n\n蔡英文本屆任期已經過半，不管施政數據是否漂亮，人民的感受才是她的期中考成績單。今年你的《畫畫看》得了幾分呢？這個分數才是代表大家對真實生活體驗的感受，沃草將蒐集統整這些感受，作為後續作品的原始資料，讓讀者也能看到「政府數據」和「人民感受」的差異有多少。\n\n沃草將持續以各種不同形式降低理解複雜議題的門檻，如果你喜歡沃草的內容，請別忘了[支持我們](https://watchout.tw/?support)！'
  },
  references: [
    '[內政部統計查詢網](http://statis.moi.gov.tw/micst/stmain.jsp?sys=100)',
    '[中華民國統計資訊網](https://www.stat.gov.tw/mp.asp?mp=4)',
    '[中華民國交通部觀光局](http://admin.taiwan.net.tw/public/public.aspx?no=315)',
    '[台灣證券交易所](http://www.tse.com.tw/zh/statistics/statisticsList?type=07&subType=240)',
    '[行政院環境保護署環境資源資料庫](https://erdb.epa.gov.tw/)',
    '[台電系統歷年發電量](https://www.taipower.com.tw/tc/chart/a01_電力供需資訊_電源開發規劃_歷年發電量及結構.html)'
  ]
}

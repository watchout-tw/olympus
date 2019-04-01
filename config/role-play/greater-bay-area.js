export default {
  id: 'greater-bay-area',
  module: 'role-play',
  theme: 'dark',
  sequence: {
    navigation: 'random',
    hasCorrectAnswer: false,
    canChangeAnswer: false,
    afterClickActions: [
      {
        name: 'scroll'
      }
    ],
    scenes: [
      {
        id: 1,
        title: '與「香港眾志」一起穿越時空⋯',
        options: [
          {
            title: '到《逃犯條例》通過後的未來香港！',
            goto: 2
          }
        ]
      },
      {
        id: 2,
        title: '我是哪一種學生？',
        image: {
          reference: 'https://i.waa.tw/oDkeiFT.png'
        },
        options: [
          {
            title: '出貓學生',
            goto: 201
          },
          {
            title: '話劇社學生',
            goto: 202
          },
          {
            title: '台灣留學生',
            goto: 203
          },
          {
            title: '借貸窮學生',
            goto: 204
          },
          {
            title: '文學系學生',
            goto: 3
          }
        ]
      },
      {
        id: 3,
        beforeTitle: '還是當個文學系學生安全。最近，老師教了我們寫小說。',
        title: '要寫什麼小說才好？',
        image: {
          reference: 'https://i.waa.tw/st4xB5c.png'
        },
        options: [
          {
            title: '腐女超愛的BL小說',
            goto: 301
          },
          {
            title: '用其他小說人物來二次創作的同人小說',
            goto: 302
          },
          {
            title: '取採自社會事件的寫實小說',
            goto: 303
          },
          {
            title: '青春糾結的愛情小說',
            goto: 4
          }
        ]
      },
      {
        id: 4,
        beforeTitle: '青春無敵。在街上尋找寫作靈感，看見有一對男女在鬧分手，警察也正在調停，很多人圍著湊熱鬧。',
        title: '要不要去看一下？',
        image: {
          reference: 'https://i.waa.tw/LnIkLYl.png'
        },
        options: [
          {
            title: '當然要去，拍下來放上網',
            goto: 401
          },
          {
            title: '當然要去，拍下來發在剛開的群組',
            goto: 402
          },
          {
            title: '閒事莫理',
            goto: 5
          }
        ]
      },
      {
        id: 5,
        beforeTitle: '別管別人的閒事，為自己的生活努力。為幫補學費和生活費，幾個同學打算一起開網店賺一點錢。',
        title: '開怎樣的店好？',
        image: {
          reference: 'https://i.waa.tw/S3N4e6D.png'
        },
        options: [
          {
            title: '售賣電子硬件',
            goto: 501
          },
          {
            title: '外國商品網上代購',
            goto: 502
          },
          {
            title: '偽冒日本雜貨',
            goto: 503
          }
        ]
      },
      {
        id: 201,
        title: '犯「組織考試作弊罪」被引渡到中國',
        subtitle: '你是章無涯',
        description: '適用《逃犯條例》罪類44：串謀犯欺詐罪。2016年，章無涯等6名被告，於以無線電設備傳輸考試答案的方式，在碩士研究生招生考試中組織作弊，被判監禁1年8個月至4年，並被罰款4萬元。',
        image: {
          reference: 'https://i.waa.tw/HkXbujT.png'
        },
        options: [
          {
            title: '我再也不出貓了，重新來過',
            goto: 2
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 202,
        title: '犯「非法持有槍支」被引渡到中國',
        subtitle: '你是高姓北京大學生',
        description: '適用《逃犯條例》罪類19：與火器有關的法律所訂的罪行。2018年，一名高姓北京大學生，因學校劇社排演話劇時道具所需，在網上購買了數支「玩具槍」，並存放於學校宿舍內，被判非法持有槍支罪罪成。',
        image: {
          reference: 'https://i.waa.tw/bWVK2DY.png'
        },
        options: [
          {
            title: '只是演演戲也不行？再試試看',
            goto: 2
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 203,
        title: '犯「間諜罪」被引渡到中國',
        subtitle: '你是許佳瀅',
        description: '適用《逃犯條例》罪類9：以欺騙手段取得財產。中國中央電視台報導，台灣女子許佳瀅引誘一名18歲大學生，用金錢收買、色情引誘等手段，從該學生身上套取中國科工領域的數百分研究資料。台灣國防部後發表回應，稱子虛烏有。',
        image: {
          reference: 'https://i.waa.tw/2jNoyxL.png'
        },
        options: [
          {
            title: '當台灣人錯了嗎？那我不當可以吧！',
            goto: 2
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 204,
        title: '犯「合同詐騙罪」被引渡到中國',
        subtitle: '你是郭春生',
        description: '適用《逃犯條例》罪類44：串謀犯欺詐罪。港商郭春生1996年以公司名義與招商銀行在香港簽訂了抵押貸款協議。郭的公司其後無力還款，招商銀則沒有循香港司法程序追討，反而在大陸起訴郭春生。2009年，郭春生被中國法院以「合同詐騙罪」刑事起訴，一審被判無期徒刑及沒收所有財產；2012年獲減刑至十八年。',
        image: {
          reference: 'https://i.waa.tw/ht3aXj7.png'
        },
        options: [
          {
            title: '窮到被沒收財產，我要重新再來',
            goto: 2
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 301,
        title: '犯「製作、販賣淫穢物品牟利罪」被引渡到中國',
        subtitle: '你是天一',
        description: '適用《逃犯條例》罪類39：與婦女及女童有關的罪行。2017年，作家天一的男男同性戀小說《攻佔》在網路上熱賣，經國家新聞出版廣電總局鑒定，定性《攻佔》為「淫穢出版物」，作者被判監禁十年零六個月。',
        image: {
          reference: 'https://i.waa.tw/iieGN71.png'
        },
        options: [
          {
            title: '原來愛不比黨大，寫點別的吧？',
            goto: 3
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 302,
        title: '犯「違反不正當競爭」被引渡到中國',
        subtitle: '你是楊治',
        description: '適用《逃犯條例》罪類14：與保護知識產權、版權有關的法律所訂的罪行。2018年，作家楊治利用金庸作品中的人物，二次創作同人小說，被金庸控告侵犯著作權不成立，但法院指仍違反不正當競爭，判賠償188萬元人民幣。',
        image: {
          reference: 'https://i.waa.tw/Qnn3ClO.png'
        },
        options: [
          {
            title: '空想也不行？全部重寫！',
            goto: 3
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 303,
        title: '犯「尋釁滋事罪」被引渡到中國',
        subtitle: '你是劉成昆',
        description: '適用《逃犯條例》罪類7：刑事恐嚇。2018年，北京的自媒體人劉成昆因在網上發表了兩篇小說，被認為影射了內蒙古伊利集團董事長潘剛涉腐外逃，被呼和浩特警方跨省抓捕，而尋釁滋事罪判處1年及8個月徒刑。',
        image: {
          reference: 'https://i.waa.tw/AG1BL72.png'
        },
        options: [
          {
            title: '現實比小說更離奇，再試一次',
            goto: 3
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 401,
        title: '犯「尋釁滋事罪」被引渡到中國',
        subtitle: '你是「快手」網民',
        description: '適用《逃犯條例》罪類7：刑事恐嚇。靈壽縣公安局網警發現，有網民在「快手」上發布了一段內容為警員巡邏的影片，一位網民在該影片評論區發表了侮辱民警執法的文字，被指犯尋釁滋事，且影響惡劣，處以行政拘留5日。',
        image: {
          reference: 'https://i.waa.tw/fW5GZxJ.png'
        },
        options: [
          {
            title: '警察大人好兇，看來上傳影片前要三思',
            goto: 4
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 402,
        title: '犯「傳播淫穢物品罪」被引渡到中國',
        subtitle: '你是羅姓男子',
        description: '適用《逃犯條例》罪類39：與婦女及女童有關的罪行。2017年，羅姓男子創建一個微信群，擔任該群管理員。有他人內在群組內發布色情影片，羅姓男子被指犯傳播淫穢物品罪，判處有期徒刑6個月。',
        image: {
          reference: 'https://i.waa.tw/VpN1HTn.png'
        },
        options: [
          {
            title: '我只是群組管理員，冤枉啊大人！',
            goto: 4
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 501,
        title: '犯「非法經營罪」被引渡到中國',
        subtitle: '你是吳向洋',
        description: '適用《逃犯條例》罪類11：與公司有關的法律所訂的罪行。男子吳向洋在未取得《增值電信業務經營許可證》下，利用淘寶網開設網店及開設網站「凡狗」，向用戶出租或銷售VPN軟件和VPN路由器硬件，被判有期徒刑五年六個月。',
        image: {
          reference: 'https://i.waa.tw/cL3N4aH.png'
        },
        options: [
          {
            title: '這個什麼我不賣了！',
            goto: 5
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 502,
        title: '犯「非法經營罪」被引渡到中國',
        subtitle: '你是游燕',
        description: '適用《逃犯條例》罪類：走私；與違禁品的進出口有關的法律。淘寶網店女店主游燕，經營代購進口服裝多年，因在香港以信用卡購買服飾再帶回內地，被法院以「走私逃稅」罪名判監10年，並處罰金550萬人民幣。',
        image: {
          reference: 'https://i.waa.tw/4R5yB61.png'
        },
        options: [
          {
            title: '我只是想賣衣服也不行嗎？',
            goto: 5
          }
        ],
        display: 'strong-headings'
      },
      {
        id: 503,
        title: '勝出官司，正牌都要賠償你',
        subtitle: '你是中國无印良品',
        description: '2018年中國大陸出現「无印良品Natural Mill」，從裝修到產品都與廣為之識的日本無印良品（MUJI）雷同，但正牌日本無印竟輸掉商標權官司，今後在中國的商品都要刪除「無印良品」字樣。',
        image: {
          reference: 'https://i.waa.tw/suBStef.png'
        },
        display: 'strong-headings'
      }
    ]
  }, // end of sequence object
  incompletePrompt: '未來香港，生活有多美好？',
  closing: '《逃犯條例》修訂之後，雖然你的生活處處驚心、步步為營，無法暢所欲言，也不能自由地創作。但你漸漸學懂埋沒良心，學會自我審查，靠著中國源源不絕的商機，假貨生意讓你過著優厚的生活。\n\n不過，香港再也不是你年輕時認識的城市了。街頭上再沒出現遊行抗議的場面；作者、出版業者和記者也變得只有一種聲音；經濟稍有能力的，都在計劃移民。香港沒有成為當年政府口中的「罪惡天堂」，但也就變成了無活力的灰色城市，這一切，真的值得嗎？',
  references: []
}

export default {
  id: 'terror-30',
  module: 'role-play',
  theme: 'dark',
  sequence: {
    navigation: 'random',
    hasCorrectAnswer: false,
    canChangeAnswer: false,
    beforeClickActions: [
      {
        name: 'accumulateDetails',
        keys: [
          'sentence.type',
          'sentence.amount'
        ]
      }
    ],
    afterClickActions: [
      {
        name: 'accumulateScore'
      },
      {
        name: 'scroll'
      }
    ],
    scenes: [
      {
        id: 0,
        title: '時光倒流⋯',
        image: {
          reference: 'https://i.waa.tw/cp0t0SN.jpg'
        },
        options: [
          {
            title: '重回戒嚴時代，看你是當時的誰！',
            goto: 1
          }
        ]
      },
      {
        id: 1,
        title: '回到戒嚴時代，你成為當時的學生，大家常說學生時期就是要玩社團。',
        description: '「嗯⋯要加入哪一個社團呢？」',
        options: [
          {
            title: '去耕耘社在校園空地種菜',
            goto: 101
          },
          {
            title: '加入學生自治會爭取福利',
            goto: 102
          },
          {
            title: '參加讀書會學習知識',
            goto: 103
          },
          {
            title: '加入足球隊鍛鍊體能',
            goto: 104
          },
          {
            title: '還是別參加社團，好好唸書',
            goto: 2,
            score: 1
          }
        ]
      },
      {
        id: 2,
        beforeTitle: '「聽說很多學生參加社團都出事，還是乖乖唸書好。」',
        title: '最近買了一本當紅的小說，要不要帶在身上，路上可以看呢？',
        options: [
          {
            title: '在去學校的路上翻一翻就好',
            goto: 201
          },
          {
            title: '放在書包裡沒事不要拿出來',
            goto: 202
          },
          {
            title: '書這種東西還是別帶出門吧',
            goto: 3,
            score: 1
          }
        ]
      },
      {
        id: 3,
        beforeTitle: '「真是好險，原來那本書不能看啊！看過的人都出事了，放在家裡是對的。」',
        title: '看來唸書也會出事，這樣下課要做些什麼好呢？',
        options: [
          {
            title: '跟好友騎腳踏車，去兜兜風',
            goto: 301
          },
          {
            title: '看看畫展，順道去拜訪朋友',
            goto: 302
          },
          {
            title: '出門問題多，乖乖回家好了',
            goto: 4,
            score: 1
          },
          {
            title: '同學們在聊天，去湊個熱鬧',
            goto: 303
          }
        ]
      },
      {
        id: 4,
        beforeTitle: '有個人在追求我的好朋友，可是那人怪怪的⋯',
        title: '該提醒好朋友嗎？',
        options: [
          {
            title: '對方看起來怪怪的，還是請他保持距離吧',
            goto: 401
          },
          {
            title: '好朋友要跟誰交往我也管不著',
            goto: 5,
            score: 1
          }
        ]
      },
      {
        id: 101,
        title: '入獄十年',
        subtitle: '你是姜民權',
        description: '台大物理系第一位女生姜民權參加耕耘社，1950年被以「參加叛亂組織」罪名被判有期徒刑十四年，因當時尚未滿二十歲獲減刑，而在獄中待了近十年。',
        image: {
          reference: 'https://i.waa.tw/WZz7USM.jpg',
          caption: '姜民權在審訊室隨手撕下的日曆'
        },
        details: {
          sentence: {
            type: '入獄',
            amount: 120
          }
        },
        options: [
          {
            title: '不小心被捕了嗎？再重回一次戒嚴時代吧',
            goto: 1
          }
        ]
      },
      {
        id: 102,
        title: '入獄十二年',
        subtitle: '你是張常美',
        description: '張常美初中時期參加學生自治會，之後會長被指稱為共匪而受牽連，於1950年十八歲時入獄，十二年後才出獄。',
        image: {
          reference: 'https://i.waa.tw/I4nMMCf.png',
          caption: '張常美（圖中）與獄友合照'
        },
        details: {
          sentence: {
            type: '入獄',
            amount: 144
          }
        },
        options: [
          {
            title: '不小心被捕了嗎？再重回一次戒嚴時代吧',
            goto: 1
          }
        ]
      },
      {
        id: 103,
        title: '槍決',
        subtitle: '你是傅如芝',
        description: '傅如芝就讀新竹女中時參與讀書會，被判刑十年。後與獄中的男友傳紙條聯絡，原判刑三年，在蔣介石批示「發還嚴為復審」後改判死刑，1956年槍決時僅二十三歲。',
        image: {
          reference: 'https://i.waa.tw/I4nMMCf.png',
          caption: '傅如芝（左一）與獄友合照'
        },
        details: {
          sentence: {
            type: '槍決'
          }
        },
        options: [
          {
            title: '不小心被捕了嗎？再重回一次戒嚴時代吧',
            goto: 1
          }
        ]
      },
      {
        id: 104,
        title: '入獄三年',
        subtitle: '你是林約幹',
        description: '1950年，林約幹就讀高中時參加足球隊「飛豹隊」，被指隊中有人曾和共產黨接觸，足球隊被當作共黨組織，十幾人遭槍決，林約幹因為未滿十八歲，判送綠島感化三年多。',
        image: {
          reference: 'https://i.waa.tw/HeLjJlE.jpg',
          caption: '讓林約幹遭受牽連的陳盛妙案公文，當時判決前還需送交蔣介石「裁示」'
        },
        details: {
          sentence: {
            type: '入獄',
            amount: 36
          }
        },
        options: [
          {
            title: '不小心被捕了嗎？再重回一次戒嚴時代吧',
            goto: 1
          }
        ]
      },
      {
        id: 201,
        title: '入獄十二年',
        subtitle: '你是呂沙棠',
        description: '1950年，呂沙棠就讀台北工業學校（今北科大）時，上學途中在火車上看《第二貧乏物語》，被朋友搶去看。後來朋友去跟特務自首並指控他提供反動書籍，被特務逮捕。1951年，被判刑十二年。',
        image: {
          reference: 'https://i.waa.tw/SPvtHw6.png',
          caption: '呂沙棠出獄時的照片'
        },
        details: {
          sentence: {
            type: '入獄',
            amount: 144
          }
        },
        options: [
          {
            title: '書這種東西好像不能亂讀，再選一次',
            goto: 2
          }
        ]
      },
      {
        id: 202,
        title: '入獄十年',
        subtitle: '你是楊國宇',
        description: '1950年，楊國宇就讀成功高中三年級時，被特務抓到他的書包中有《大地》、《戰爭與和平》等「左翼小說」。1951年，楊國宇被以「參加叛亂組織」判刑十年。',
        image: {
          reference: 'https://i.waa.tw/RltX83K.jpg',
          caption: '當時持有或閱讀禁書即可能有牢獄之災'
        },
        details: {
          sentence: {
            type: '入獄',
            amount: 120
          }
        },
        options: [
          {
            title: '看來書不能放在書包裡，再選一次',
            goto: 2
          }
        ]
      },
      {
        id: 301,
        title: '引爆「四六事件」',
        subtitle: '你是何景岳、李元勳',
        description: '1949年，臺大法學院何景岳和師範學院李元勳共乘一輛腳踏車，被警察以違反交通規則攔下，發生口角後遭到警察毒打、押回警局。臺大及師院學生包圍警局聲援被押學生，並要求台北警察總局道歉。後引發中國國民黨當局關注，認定是中國共產黨滲透校園，當時雖尚未宣布戒嚴，軍警仍進入臺大、師大展開大規模搜捕的「四六事件」，並有數名學生遭槍決。44天後，台灣開始長達38年又56天的戒嚴。',
        image: {
          reference: 'https://i.waa.tw/Fn5EP95.png',
          caption: '當時報紙報導台大及師院學生被捕情形（圖片來源：1949/4/12民聲日報）'
        },
        details: {
          sentence: {
            type: '引爆事件',
            amount: 1
          }
        },
        options: [
          {
            title: '把同學給害慘了，重選一次吧',
            goto: 3
          }
        ]
      },
      {
        id: 302,
        title: '入獄十個月',
        subtitle: '你是葉宏甲',
        description: '1950年，《諸葛四郎》作者漫畫家葉宏甲農曆春節期間，到中山堂看畫展，看展後順道去拜訪友人，因友人被特務單位認定為「匪諜」，雖然前去拜訪時友人不在，卻被埋伏在當地的特務認為是有所「關係」，進而「被失蹤」。在父母變賣家產、打通關係、四處陳情下，遭逮捕十個月後才被釋放。',
        image: {
          reference: 'https://i.waa.tw/kUfplUa.jpg',
          caption: '國民黨特務逮捕事件後，葉宏甲做出名作《諸葛四郎大戰魔鬼黨》'
        },
        details: {
          sentence: {
            type: '入獄',
            amount: 10
          }
        },
        options: [
          {
            title: '拜訪朋友風險太高，我再想一次好了',
            goto: 3
          }
        ]
      },
      {
        id: 303,
        title: '入獄六年半',
        subtitle: '你是吳大祿',
        description: '1950年吳大祿高中二年級時，聽同學們在聊過去幾年內學長姐被特務抓走的事情，結果幾個月以後因此被捕。後查無事證，軍法處認定「受人慫恿，跡近盲從，別無積極罪行，均予從輕科處」，但最後被判刑五年，且關押了六年半才被釋放。',
        image: {
          reference: 'https://i.waa.tw/8YBhQID.jpg',
          caption: '吳大祿被捕時的學生證'
        },
        details: {
          sentence: {
            type: '入獄',
            amount: 78
          }
        },
        options: [
          {
            title: '沒想到戒嚴時代那麼嚴格，重選一次吧',
            goto: 3
          }
        ]
      },
      {
        id: 401,
        title: '槍決',
        subtitle: '你是丁窈窕',
        description: '丁窈窕好友施水環遇到一名男子熱烈追求，丁窈窕認為此人有問題，建議施水環與他保持距離，此人因而心生憤恨將丁窈窕之禁書寄送至保安司令部以告發其為匪諜，但都遭到同在郵局工作的丁窈窕同事吳麗水攔截燒毀。1954年吳麗水因他案被捕時，特務刑求下提到曾燒毀信件的事，懷孕的丁窈窕也因此受牽連入獄，並在獄中生女、育女。1956年，特務在其女兒哭喊下，將丁窈窕拖出槍決。',
        image: {
          reference: 'https://i.waa.tw/zAd2ksh.jpg',
          caption: '丁窈窕28歲被槍決前的照片'
        },
        details: {
          sentence: {
            type: '槍決'
          }
        },
        options: [
          {
            title: '沒想到後果這麼嚴重，重新來過吧',
            goto: 4
          }
        ]
      }
    ]
  }, // end of sequence object
  incompletePrompt: '戒嚴時代仍在繼續，你必須努力生存下來。',
  closing: '經過了數十年戒嚴，你雖然沒有活躍的校園生活，無法讀自己想讀的書，跟朋友交往也都戰戰兢兢，連兒女做什麼都要嚴加控管，以免惹禍上身，但你活下來了。你成為這個時代的倖存者。\n\n其他人就沒有這麼幸運了。一個個現在看起來稀鬆平常的選擇，讓數以千計的人在那個時代因莫須有的罪名被槍決，成為戒嚴時期白色恐怖受難者。\n\n以下為部份戒嚴時期被槍決的受難者。沒有加害人。',
  references: [
    '《走過長夜：政治受難者的生命故事》（輯一･秋蟬的悲鳴、輯二･看到陽光的時候、輯三･換不回的青春，共三冊）。新北市：國家人權博物館籌備處，2015。',
    '《冤獄、求生與揚名——政治受難者歐陽劍華與張常美的生命故事特展專刊》。新北市：國家人權博物館籌備處，2015。',
    '國家人權博物館籌備處網站／影音書籍成果／電子書',
    '台灣民間真相與和解促進會網站／歷史真相／歷史之牆／白色恐怖･被槍決部分名單',
    '陳順孝，《新聞控制與反控制：「記實避禍」的報導策略》。台北：五南出版社，2003。',
    '國立公共資訊圖書館／數位典藏服務網'
  ]
}

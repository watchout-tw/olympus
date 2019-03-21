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
        id: 1,
        title: '時光倒流⋯',
        image: {
          reference: 'https://i.waa.tw/cp0t0SN.jpg'
        },
        options: [
          {
            title: '重回戒嚴時代，看你是當時的誰！',
            goto: 2
          }
        ]
      },
      {
        id: 2,
        title: '回到戒嚴時代，你成為當時的學生，大家常說學生時期就是要玩社團。',
        description: '「嗯⋯要加入哪一個社團呢？」',
        options: [
          {
            title: '去耕耘社在校園空地種菜',
            goto: 201
          },
          {
            title: '加入學生自治會爭取福利',
            goto: 202
          },
          {
            title: '參加讀書會學習知識',
            goto: 203
          },
          {
            title: '加入足球隊鍛鍊體能',
            goto: 204
          },
          {
            title: '還是別參加社團，好好唸書',
            goto: 3,
            score: 1
          }
        ]
      },
      {
        id: 3,
        beforeTitle: '「聽說很多學生參加社團都出事，還是乖乖唸書好。」',
        title: '最近買了一本當紅的小說，要不要帶在身上，路上可以看呢？',
        options: [
          {
            title: '在去學校的路上翻一翻就好',
            goto: 301
          },
          {
            title: '放在書包裡沒事不要拿出來',
            goto: 302
          },
          {
            title: '書這種東西還是別帶出門吧',
            goto: 4,
            score: 1
          }
        ]
      },
      {
        id: 4,
        beforeTitle: '「真是好險，原來那本書不能看啊！看過的人都出事了，放在家裡是對的。」',
        title: '看來唸書也會出事，這樣下課要做些什麼好呢？',
        options: [
          {
            title: '跟好友騎腳踏車，去兜兜風',
            goto: 401
          },
          {
            title: '看看畫展，順道去拜訪朋友',
            goto: 402
          },
          {
            title: '出門問題多，乖乖回家好了',
            goto: 5,
            score: 1
          },
          {
            title: '同學們在聊天，去湊個熱鬧',
            goto: 403
          }
        ]
      },
      {
        id: 5,
        beforeTitle: '有個人在追求我的好朋友，可是那人怪怪的⋯',
        title: '該提醒好朋友嗎？',
        options: [
          {
            title: '對方看起來怪怪的，還是請他保持距離吧',
            goto: 501
          },
          {
            title: '好朋友要跟誰交往我也管不著',
            goto: 6,
            score: 1
          }
        ]
      },
      {
        id: 6,
        beforeTitle: '「同學一個個消失，被奇怪的人帶走後就沒回來了，看來不參加社團、每天乖乖回家、不要愛管閒事是對的呀！」\n\n突然操場傳出騷動，好像是教官叫大家集合。\n\n原來是學校隔壁軍營的長官說我們以後都不用上課了，要加入他們部隊一起反攻大陸。',
        title: '怎麼辦？要答應嗎？',
        options: [
          {
            title: '報告！我要讀書！不要當兵！',
            goto: 601
          },
          {
            title: '國父說軍人和學生沒有自由，只好乖乖去當兵了',
            goto: 7,
            score: 1
          }
        ]
      },
      {
        id: 7,
        beforeTitle: '莫名其妙就被抓去當兵了。這幾天有香港的朋友寫信詢問近況，問說台灣最近如何？',
        title: '要怎麼回答他呢？',
        options: [
          {
            title: '據實以報，告知他台灣現在時局情勢不穩',
            goto: 701
          },
          {
            title: '自身難保，隨便敷衍他兩句就好',
            goto: 8,
            score: 1
          }
        ]
      },
      {
        id: 8,
        beforeTitle: '好不容易當完兵，就找到了一份報社編輯的工作，我得好好珍惜。',
        title: '「嗯⋯要吸引讀者好像沒那麼簡單，該怎麼做好呢？」',
        options: [
          {
            title: '那辦徵文比賽，增加和讀者的互動',
            goto: 801
          },
          {
            title: '能混就混能撈就撈，那麼積極幹嘛',
            goto: 9,
            score: 1
          }
        ]
      },
      {
        id: 9,
        beforeTitle: '來報社也一段時間了，雖然做起事來不很自由，但總也算份工作。',
        title: '「最近報社不少人都被找去約談，我該怎麼做呢？」',
        options: [
          {
            title: '待在報社太危險了，還是辭職吧',
            goto: 10,
            score: 1
          },
          {
            title: '聽長官建議留在報社繼續工作',
            goto: 901
          }
        ]
      },
      {
        id: 10,
        beforeTitle: '「唉⋯雖然現在自己日子還過得去，不過很多人還是無家可歸，需要幫助啊。」\n\n不過現在社會上的公益團體好像都很怪怪的，不是募款經費不透明，就是只在意賺錢，很多真正需要幫助的人都沒受到照顧。',
        title: '「我該做些什麼嗎？」',
        options: [
          {
            title: '自己來組織募款，幫助那些沒人幫的可憐人吧！',
            goto: 1001
          },
          {
            title: '偏鄉沒有醫療、弱勢沒人照顧關我屁事？',
            goto: 11,
            score: 1
          }
        ]
      },
      {
        id: 11,
        beforeTitle: '「雖然沒做什麼事，但好像有人檢舉我，就莫名其妙被關了。」\n\n還好在獄中有一個之前就認識的女生，生活還不算太悶。',
        title: '「咦？她最近看起來心情不好，該怎麼鼓勵她呢？」',
        options: [
          {
            title: '最近有首新歌還不錯，把歌詞分享給她吧！',
            goto: 1101
          },
          {
            title: '她心情不好我也沒辦法呀',
            goto: 12,
            score: 1
          }
        ]
      },
      {
        id: 12,
        beforeTitle: '好不容易出獄，結了婚生了小孩。兒子長大了，成了左翼青年，還說想回中國不要留在臺灣？',
        title: '我該怎麼辦？',
        options: [
          {
            title: '兒子有自己的主張，攔也攔不住，隨他去吧！',
            goto: 1201
          },
          {
            title: '跟他拼了，打斷他的腿！把他關在家裡！',
            goto: 13,
            score: 1
          }
        ]
      },
      {
        id: 13,
        beforeTitle: '好不容易打斷了兒子的腿，這回女兒的鋼琴老師又來找我。他說遇到困難，需要借一點錢。',
        title: '「錢我是有啦，要借他嗎？」',
        options: [
          {
            title: '借他吧，他以前這麼用心教我女兒',
            goto: 1301
          },
          {
            title: '雖然只是小錢，但就是不想借給他',
            goto: 14,
            score: 1
          }
        ]
      },
      {
        id: 14,
        beforeTitle: '家裡經濟狀況越來越寬裕，還算有點閒錢可以幫助社會。',
        title: '最近有家雜誌辦的還不錯，要不要來捐款支持他們呢？',
        options: [
          {
            title: '捐款支持！希望他們繼續做出不一樣的報導',
            goto: 1401
          },
          {
            title: '不用啦！看免費的就好',
            score: 1
          }
        ]
      },
      {
        id: 201,
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
            goto: 2
          }
        ]
      },
      {
        id: 202,
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
            goto: 2
          }
        ]
      },
      {
        id: 203,
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
            goto: 2
          }
        ]
      },
      {
        id: 204,
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
            goto: 2
          }
        ]
      },
      {
        id: 301,
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
            goto: 3
          }
        ]
      },
      {
        id: 302,
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
            goto: 3
          }
        ]
      },
      {
        id: 401,
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
            goto: 4
          }
        ]
      },
      {
        id: 402,
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
            goto: 4
          }
        ]
      },
      {
        id: 403,
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
            goto: 4
          }
        ]
      },
      {
        id: 501,
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
            goto: 5
          }
        ]
      },
      {
        id: 601,
        title: '槍決',
        subtitle: '你是劉永祥、譚茂基、明同樂、張世能、王光耀',
        description: '1949年中國內戰後期，八千多名的山東省流亡學生在煙台聯合中學校長張敏之帶領下到達澎湖復校開學，但隨後遇到澎湖防衛司令部直接拉學生為兵，引起學生反抗，多位學生被軍人以刺刀刺死丟入海中，總計三百多人失蹤，後稱「七一三事件」。校長張敏之和五名學生劉永祥、譚茂基、明同樂、張世能、王光耀以「匪諜」罪名被押到台北馬場町槍決。',
        image: {
          reference: 'https://i.waa.tw/HcjZFQk.jpg',
          caption: '七一三事件直至1990年代才獲平反（圖片來源：1999/12/11中國時報）'
        },
        details: {
          sentence: {
            type: '槍決'
          }
        },
        options: [
          {
            title: '再給你一次機會，這次要怎麼選？',
            goto: 6
          }
        ]
      },
      {
        id: 701,
        title: '判刑八年',
        subtitle: '你是田世藩',
        description: '1950年，田世藩任職陸軍官校期間，有香港有人來信探問可否來台，田世藩回覆台灣情勢不穩，還是不要來。後信件被查獲，被以「妨害軍機」判刑八年。',
        image: {
          reference: 'https://i.waa.tw/vbMzLXt.png',
          caption: '田世藩出獄後曾於1960年獲得美國頒贈的銀星勳章（圖片來源：1960/1/6民聲日報）'
        },
        details: {
          sentence: {
            type: '判刑',
            amount: 96
          }
        },
        options: [
          {
            title: '注意你的身份！你再好好想想⋯',
            goto: 7
          }
        ]
      },
      {
        id: 801,
        title: '槍決',
        subtitle: '你是童尚經',
        description: '出生於上海的新生報副總編輯童尚經，1962年舉辦「理想丈夫」「理想夫人」「兄弟姊妹」徵文比賽，讀者反應熱烈，還集結成書出版。但後來以此為由遭到軍法起訴「企圖用親情來沖淡民眾反攻大陸的士氣」，1972年時遭到槍決。',
        image: {
          reference: 'https://i.waa.tw/IJbI4jP.jpg',
          caption: '當年童尚經編製的刊物（圖片來源：露天拍賣）'
        },
        details: {
          sentence: {
            type: '槍決'
          }
        },
        options: [
          {
            title: '真不小心，果然是認真就輸了，再來一次',
            goto: 8
          }
        ]
      },
      {
        id: 901,
        title: '被刑求致死',
        subtitle: '你是沈嫄璋',
        description: '在《台灣新生報》工作的沈嫄璋因捲入調查局派系鬥爭被特務逮捕，並刑求要其供出時任調查局高層蔣海溶、李世傑為共產黨。沈嫄璋被特務脫光衣服，強迫用力坐在一根粗麻繩，讓其私處血流如注，最後死在留置室。',
        image: {
          reference: 'https://i.waa.tw/cY9b0mw.jpg',
          caption: '當年沈嫄璋被以「繩刑」刑求圖（歐陽劍華繪）'
        },
        details: {
          sentence: {
            type: '被刑求致死'
          }
        },
        options: [
          {
            title: '聽話也不行？那我再想想⋯',
            goto: 9
          }
        ]
      },
      {
        id: 1001,
        title: '被刑求到發瘋',
        subtitle: '你是許席圖',
        description: '許席圖在1969年有意籌組「統一事業基金會」，打算以會員募股方式，籌募活動經費，推展公益事業，引發獨攬學生事務的救國團與情治單位注意。1969年二月許席圖被以「意圖顛覆政府」的罪名逮捕，關押於景美看守所，在獄中被刑求而導致精神失常。',
        image: {
          reference: 'https://i.waa.tw/9m7Jfct.jpg',
          caption: '許席圖直至1990年才被發現花蓮玉里療養院，但早已精神失常（圖片來源：1991/7/14中國時報）'
        },
        details: {
          sentence: {
            type: '被刑求到發瘋'
          }
        },
        options: [
          {
            title: '好心被雷親！還是別多管閒事好了⋯',
            goto: 10
          }
        ]
      },
      {
        id: 1101,
        title: '槍決',
        subtitle: '你是蔡炳紅',
        description: '蔡炳紅被以「參加叛亂組織」被刑五年，在綠島時遇到以前認識的女生黃采微，寫字條抄錄歌曲「勝利歌聲」給她，被當局以「灌輸黃采微共產主義思想」為由加判三年，但判決書送到總統府時，蔣介石時批示「應嚴為複審」，1956年遭槍決。',
        image: {
          reference: 'https://i.waa.tw/2Gf1ouy.jpg',
          caption: '蔡炳紅原是被判交付感化三年，經蔣介石批註「應發還嚴為複審」後，改判死刑。'
        },
        details: {
          sentence: {
            type: '槍決'
          }
        },
        options: [
          {
            title: '這樣就被槍決了，不過就是傳個紙條，再選一次吧',
            goto: 11
          }
        ]
      },
      {
        id: 1201,
        title: '槍決',
        subtitle: '你是劉晉鈺',
        description: '1950年七月，台電總經理劉晉鈺（1898-1950）因「縱容左傾子女前往大陸」，後兒子又寫信回台進行「統戰」，因此被以「通匪」罪名被逮捕並遭到槍決。',
        image: {
          reference: 'https://i.waa.tw/yAHpyAp.png',
          caption: '劉晉鈺當年被槍決時的報導（圖片來源：1950/7/18臺灣民聲日報）'
        },
        details: {
          sentence: {
            type: '槍決'
          }
        },
        options: [
          {
            title: '有那麼嚴重？再選一次好了',
            goto: 12
          }
        ]
      },
      {
        id: 1301,
        title: '家產充公、入獄五年',
        subtitle: '你是辜顏碧霞',
        description: '現任中信金控、兄弟象經營者辜仲諒的外祖母辜顏碧霞，1950年時因曾經借錢給女兒的鋼琴老師呂赫若，遭到國民政府逮捕，名下所有財產被沒收，並被囚禁於其被沒收的家產「高砂鐵工廠」改建成的「保密局北所」五年。',
        image: {
          reference: 'https://i.waa.tw/IirhcwV.png',
          caption: '當年檢舉者可以分得密告獎金，為沒收財務價值的30%。'
        },
        details: {
          sentences: [
            {
              type: '家產充公'
            },
            {
              type: '入獄',
              amount: 60
            }
          ]
        },
        options: [
          {
            title: '有錢難買早知道，早知道我就選⋯',
            goto: 13
          }
        ]
      },
      {
        id: 1401,
        title: '陳屍校園',
        subtitle: '你是陳文成',
        description: '陳文成二十八歲拿到美國密西根大學數學博士，並開始任教於卡內基美隆大學的陳文成教授，1981年和太太帶著剛出生不久的兒子從美國返台探望六年不見的爸媽，因為曾捐款給《美麗島雜誌》而被警備總部約談，七月二日一早從家中被帶走，隔天被發現陳屍在今天的台大圖資系館旁。',
        image: {
          reference: 'https://i.waa.tw/9xr8EcO.jpg',
          caption: '陳文成全家福照。'
        },
        details: {
          sentences: [
            {
              type: '陳屍校園'
            }
          ]
        },
        options: [
          {
            title: '沒想到會那麼危險，再選一次好了',
            goto: 14
          }
        ]
      }
    ]
  }, // end of sequence object
  incompletePrompt: '戒嚴時代仍在繼續，你必須努力生存下來。',
  closing: '經過了數十年戒嚴，你雖然沒有活躍的校園生活，無法讀自己想讀的書，跟朋友交往也都戰戰兢兢，連兒女做什麼都要嚴加控管，以免惹禍上身，但你活下來了。你成為這個時代的倖存者。\n\n其他人就沒有這麼幸運了。一個個現在看起來稀鬆平常的選擇，讓數以千計的人在那個時代因莫須有的罪名被槍決，成為戒嚴時期白色恐怖受難者。\n\n以下為部份戒嚴時期被槍決的受難者。沒有加害人。',
  appendix: {
    type: 'json',
    reference: 'role-play/white-terror-executions-partial.json',
    displayType: 'list',
    displayItemType: 'person'
  },
  references: [
    '《走過長夜：政治受難者的生命故事》（輯一･秋蟬的悲鳴、輯二･看到陽光的時候、輯三･換不回的青春，共三冊）。新北市：國家人權博物館籌備處，2015。',
    '《冤獄、求生與揚名——政治受難者歐陽劍華與張常美的生命故事特展專刊》。新北市：國家人權博物館籌備處，2015。',
    '國家人權博物館籌備處網站／影音書籍成果／電子書',
    '台灣民間真相與和解促進會網站／歷史真相／歷史之牆／白色恐怖･被槍決部分名單',
    '陳順孝，《新聞控制與反控制：「記實避禍」的報導策略》。台北：五南出版社，2003。',
    '國立公共資訊圖書館／數位典藏服務網'
  ]
}

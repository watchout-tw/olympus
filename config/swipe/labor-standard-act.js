export default {
  id: 'labor-standard-act',
  module: 'swipe',
  title: '《勞基法》流言終結者',
  image: 'swipe.png',
  date: '2018-05-01 20:00:00',
  breaking: true,
  cards: [
    {
      type: 'text',
      id: 'cover',
      title: '勞基法流言終結者',
      content: '《沃草》幫你整理這次《勞基法》修法最常見的幾種似是而非的說法，我們已經努力把它變簡單了，快來看看吧！\n\n用手機左右滑滑看，或是用下面的兩個按鈕也可以。',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      }
    },
    {
      type: 'question',
      title: '練習題',
      question: '先練習一次吧。\n\n<span>在卡片上往左滑，或按紅色的按鈕</span><label class="swipe-action-inline NO"></label><span>，表示你不同意這則敘述。往右滑，或按綠色的按鈕</span><label class="swipe-action-inline YES"></label><span>，表示你同意。</span>',
      answer: 'YES',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      },
      recap: '幹得好！',
      but: '選完你的答案之後，我們會告訴你我們的答案。如果想聽更多，請按「繼續說下去」，不然就按「下一題謝謝」，繼續看下一題。',
      more: [
        {
          type: 'markdown',
          content: '很好，就是這樣。準備開始囉！'
        }
      ]
    },
    {
      type: 'question',
      title: '加班換補休',
      question: '法律規定加班可以換補休，以後加班費都領不到了啦 QQ',
      answer: 'NO',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      },
      recap: '法律規定加班可以換補休，以後都領不到加班費了？',
      but: '「加班可換補休」並**不一定**會讓勞工領不到加班費，不過⋯',
      more: [
        {
          type: 'markdown',
          content: '#### 先講結論\n\n依新《勞基法》第32-1條規定，「加班換補休」的發動權在勞工身上，在勞工選擇補休且雇主同意的情況下，勞雇雙方還需協商補休完成的期限，如果期限內或離職前都沒休完，雇主還是要補給加班費。\n\n#### 法條演進\n\n其實「加班換補休」制度，早於1990年行政院勞工委員會（今勞動部）就以函釋說明「為法所不禁」，表示「用補休代替勞工延長工作時間的加班費」並沒有違背法律。也就是說，就算沒有本次修法，業界常見的「加班換補休」就已經是實務上勞動主管機關可以接受的做法。\n\n在1月10日《勞基法》三讀後，勞動部也於1月26日預告施行細則加入「補休期間」的限制，需參考特休假可以週年、曆年或於當年底結清，避免補休期限遙遙無期的問題。\n\n#### 修法影響\n\n從正面的角度來看，這次修法將這行之有年的制度明文化，並且訂定違法所對應的罰則。不過《勞基法》本法中並無寫明「補休期限」的限制，僅在施行細則中補充。如果勞雇雙方協商出「十年內完成補休」這種違反細則、不違反母法的行為，在細則不能逾越母法的法律原則下，主管機關是否能逕行裁罰，仍有相當爭議。而部分學者和勞工團體所倡議的「補休比照加班費加成計算」，雖有中國國民黨立委蔣萬安提案，但也未能通過審查。'
        }
      ]
    },
    {
      type: 'question',
      title: '休息日加班費',
      question: '休息日加班費費率變低，加班費要減少了啦 QQ',
      answer: 'NO',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      },
      recap: '休息日加班費費率變低，加班費會減少？',
      but: '加班費**不會**因為費率變低而減少，但是⋯',
      more: [
        {
          type: 'markdown',
          content: '#### 先講結論\n\n新《勞基法》第24條並未調整休息日加班費費率，但工時計算方式的改變，可能會造成加班費減少。\n\n#### 法條演進\n\n休息日本來即是勞動主管機關函釋及勞動法學就有的概念與用詞，2016年底民進黨政府將其明文入法。民進黨政府為推動「週休二日」，用「以價制量」減少加班機會，讓每週上班的第六天（休息日）有較高的加班費。同時，也加入「擬制工時」制度，休息日加班「四小時內都算四小時」、「超過五小時至八小時都算八小時」。\n\n而2018年初通過的新《勞基法》將原先休息日加班「擬制工時」制度取消，都改回核實計算，也就是「做多久算多久」的加班費計算方式，但加班費率本身並未調整。\n\n#### 正反意見\n\n支持者認為，原本的「擬制工時」制度設計，勞工只要去工作一小時就算四小時加班，讓雇主寧願休息日不開工，修法取消「擬制工時」才能讓雇主願意請員工加班，勞工也才拿得到休息日加班費；但反對者認為這會讓勞工休息日的加班費減少，也失去當初制定休息日用「以價制量」來推動週休二日的本意。\n\n以月薪36,000元勞工在修法前後的每小時休息日加班費差異為例。休息日加班了5小時， 修法前可以拿到1,900元，修法後改拿1,150元，減少750元。'
        },
        {
          type: 'figure',
          platform: 'infogram',
          id: '34df8c36-f538-411d-8afb-1328f31c1cd1',
          height: 250
        }
      ]
    },
    {
      type: 'question',
      title: '加班上限',
      question: '加班工時上限提高了，以後每個月都要多加班八小時了啦 QQ',
      answer: 'NO',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      },
      recap: '加班工時上限提高，每個月要多加班八小時？',
      but: '不會**每個月**都多加班八小時，不過⋯',
      more: [
        {
          type: 'markdown',
          content: '#### 先講結論\n\n新《勞基法》第32條將原先單月加班上限46小時的提高為54小時，但雇主必須經過工會或勞資會議的同意，並且每三個月最高加班時數仍維持138小時，不會每個月都多加班8小時。\n\n#### 法條演進\n\n其實立法院不是第一次討論調整加班工時上限。在2015年修《勞基法》時，馬政府行政院版草案除了將正常工時從「雙週84小時」改為「單週40小時」，也有提案將每月加班時數上限從46小時提高到54小時。以每月30日為例，原先一個月的總工時上限為184（正常工時）加上46（加班工時）共230小時，2015年行政院版是將減少8小時正常工時，增加8小時加班時數，但當時立法院審議通過的版本僅減少8小時正常工時，並未調整加班時數。\n\n2018年新《勞基法》通過後，每月最高總工時將回到230小時（176正常工時加上54加班工時），但每三個月最高加班時數仍維持138小時。\n\n#### 正反意見\n\n針對本條修法，支持的意見認為，這可以解決產業淡旺季的問題，能在滿足短期內大量的加班需求，也可以讓勞工有更多加班機會、領到更多加班費；不過在每三個月加班時數上限固定的情況下，加班費總數上限其實也不會變，其實總加班費上限也不會更多。\n\n另外，雖然每三個月的加班時數上限與修法前一樣為138小時，但法律並未規定「任連續三個月加班時數不得超過138小時」，因此可能出現六個月中頭尾加班30小時、中間連續四個月加班54小時的極端狀況。而在各國都在逐步降低每月工時上限時，台灣卻獨步全球提高，原已名列前茅的總工時排名恐將再「進步」。'
        },
        {
          type: 'figure',
          platform: 'infogram',
          id: '06b798eb-b85b-4742-8e0d-2f2ea900fc4d',
          height: 300
        }
      ]
    },
    {
      type: 'question',
      title: '早就七休一',
      question: '「七休一」條文從《勞基法》訂定時就存在，已經實施超過三十年！',
      answer: 'YES',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      },
      recap: '「七休一」已經實施超過三十年？',
      but: '「七休一」是可以說已經實施超過三十年，但是⋯',
      more: [
        {
          type: 'markdown',
          content: '#### 先講結論\n\n「七休一」確實於《勞基法》訂定時就已存在，但早在1986年內政部勞工司就以函釋放寬，直至2016年9月蔡英文政府廢除舊函釋、另訂新函釋前，「七休一」一直都沒真正落實。\n\n#### 法條演進\n\n1984年《勞基法》草創時，第36條就明定「勞工每七日中至少應有一日之休息，作為例假。」但1986年內政部長吳伯雄就發出函釋說明「例假日原則上應間隔六個工作日」（七休一），如有必要可在工會或勞工同意後，「於各該週期內酌情更動」（十四休二）。可以說「七休一」制度在1986年後就名存實亡了。\n\n直至2016年6月民進黨立委鍾孔炤於立法院質詢時，要求勞動部廢止該函釋並獲委員會通過，勞動部才於6月29日廢止舊函釋。其後，勞動部於9月10日發布新函釋，明定必須在特定條件下雇主才能要求勞工連續工作十二天。\n\n#### 正反意見\n\n這次新《勞基法》將放寬「七休一」的過程明文化，需要是勞動部指定之行業，再經工會或勞資會議同意後，才能讓勞工連續上班十二天（十四休二）。**不過**法律條文並未明定勞動部需要經由什麼程序指定可放寬七休一的行業，雖然目前僅有部分勞工會放寬「七休一」，但在現行台灣工會比例和勞權意識仍有待加強的情況下，反對修法者質疑這恐怕會讓「七休一」徹底失守，這次修法恐怕會讓勞動現場全面回歸「十四休二」。'
        }
      ]
    },
    {
      type: 'question',
      title: '休息八小時',
      question: '要累死了，以後每個人下班後八小時就可以繼續上班 QQ',
      answer: 'NO',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      },
      recap: '以後下班後八小時就可以繼續上班？',
      but: '其實不是**每個人**都會這樣⋯',
      more: [
        {
          type: 'markdown',
          content: '#### 先講結論\n\n新《勞基法》第34條僅適用於「輪班制」勞工，原則上輪班間隔需達11小時，目前僅有勞動部公告的行業中，雇主可以在工會或勞資會議同意的情況下，將輪班間隔調整至8小時，不是每一位勞工都會碰上下班八小時後就繼續上班的問題。\n\n#### 法條演進\n\n其實《勞基法》原先僅有規定輪班間隔需要有「適當休息時間」，並未明定「適當」是多久。在2015年行政院提出的《勞基法》草案，就有針對第34條提案修正，將輪班間隔的休息時間明定為11小時，但當時立法院並未就此版本進行討論。2016年底《勞基法》再修，雖當時行政院版草案並未加入「定義適當休息時間」條文，是由時代力量立委以修正動議加入輪班間隔休息時間11小時條文，但民進黨團隨後又補上「施行日期由行政院定之」，並以此版本三讀通過。在行政院始終未公布施行日期的情況下，11小時輪班間隔其實從未實施過。\n\n#### 正反意見\n\n針對輪班間隔時間修法，支持者認為原本適用全體行業的「11小時輪班間隔」根本無法落實，讓行政院遲遲無法公布施行日期，修法放寬部分特例後實施，才能真正讓絕大多數輪班制勞工享受「11小時輪班間隔」；反對修法者則認為，8小時輪班間隔會讓勞工過勞，甚至能讓適用放寬輪班間隔的台鐵員工極端班表「不合理但合法」，置勞工和乘客安全於不顧。'
        }
      ]
    },
    {
      type: 'question',
      title: '工會和勞資會議',
      question: '公司沒工會，也沒開過勞資會議，放寬七休一、加班時數上限調整跟我沒關係！',
      answer: 'YES',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      },
      recap: '沒有工會，也沒開過勞資會議，七休一、加班時數上限就不會被放寬？',
      but: '**理論上是**可以這樣說沒錯，不過⋯',
      more: [
        {
          type: 'markdown',
          content: '#### 先講結論\n\n如果公司沒工會又真的沒有開過勞資會議，那放寬七休一和加班時數上限調整就不會發生。不過，你的公司很可能會在你不知情的狀況下召開勞資會議同意這些例外放寬。\n\n#### 法條演進\n\n其實勞資會議早有其法律依據，1985年就依據《勞基法》第83條訂定「勞資會議實施辦法」。最早規定「勞資會議每月舉行一次為原則」，2001年又調整至「每三個月至少舉行一次」，但在始終沒有罰則的情況下，不辦理勞資會議也不會有事，實際上很少有公司會舉辦勞資會議。以台北市為例，依據台北市勞動局公開資訊，2016和2017年有設立勞資會議代表的事業單位僅有4027家，相對於在178,711家在臺北市登記的公司中，僅佔2.25%。\n\n#### 修法影響\n\n除了很少公司會真的召開勞資會議，已召開的勞資會議從參加會議代表到會議決議效力也有許問題。很多不肖公司會「製造」勞資會議，當員工發現有不利的勞動條件問題想反對時，才發現公司早就開過勞資會議，做出傾向資方的決議。原來勞資會議中的勞方代表根本是資方安排的人，沒有經過公司全體勞工推派，不具有能代表公司多數勞工的正當性，面對這樣的狀況，勞動部過去卻長久忽視，沒有提出具體改善的措施，勞工往往無從著力，也難以蒐證檢舉。亦有實際案例顯示，即使已組成有代表性的工會，也無法推翻之前由資方主導的勞資會議所通過的決議。不過也有人對這次修法表持正面意見，認為勞工可以透過勞資會議拒絕不想要的「彈性」，也可以此為手段，爭取更高的加班待遇。'
        }
      ]
    },
    {
      type: 'question',
      title: '勞檢',
      question: '檢舉沒用啦！公司違反勞基法，政府都不來勞檢！',
      answer: 'NO',
      options: {
        left: {
          type: 'NO',
          label: 'NO'
        },
        right: {
          type: 'YES',
          label: 'YES'
        }
      },
      recap: '檢舉沒用，政府都不來勞檢？',
      but: '檢舉不一定有用，但**不檢舉更沒用**',
      more: [
        {
          type: 'markdown',
          content: '勞動部的勞檢員數量長期不足，連勞工檢舉的案件都不一定能進行檢查，在第一次檢查後也只能先要求雇主改善，可以開罰的第二次檢查都常因為人力不足無法落實，要求政府全面主動進行勞檢相當困難。雖然政府正在逐年增加勞檢員數量，但無論如何都不太可能全面檢查所有企業，若遇自己公司有不法行為，期待政府主動出擊檢查到自己的公司進而改善，其實是不太實際的期待。\n\n勞工若遇到雇主違法，一定要即時跟雇主反應若無法改善應該立刻進行檢舉爭取自己的權益，若不敢負擔直接向雇主反應以及撥打1955的代價，只希望政府來出動勞檢拯救自己，不管在理論或實際上其實都是不切實際的。勞工一定必須勇於檢舉或是透過媒體和網路社群揭露不法的雇主。若認為個人對抗資方風險高力量小，也可進一步透過籌組工會來增強力量，要求雇主守法外，甚至進一步增加勞動條件。'
        }
      ]
    }
  ],
  share: {
    message: '你的雇主違法了嗎？公司沒遵守勞基法嗎？除了撥打1955，還可以去勞動部網站線上填表申訴，別讓姑息成了勞動權益的幫凶喔！'
  },
  authorship: [
    {
      job: '編輯設計',
      people: ['洪國鈞']
    },
    {
      job: '設計開發',
      people: ['游知澔']
    }
  ],
  references: [
    '[廢止放寬七休一函釋](https://www.mol.gov.tw/media/3809646/1050629-%E5%BB%A2%E6%AD%A2%E5%85%A7%E6%94%BF%E9%83%A875%E5%B9%B45%E6%9C%8817%E6%97%A5398001%E8%99%9F%E5%87%BD%E4%BB%A4.pdf)',
    '[適用放寬七休一行業](https://www.mol.gov.tw/media/5758708/%E6%8C%87%E5%AE%9A%E5%8B%9E%E5%8B%95%E5%9F%BA%E6%BA%96%E6%B3%95%E7%AC%AC36%E6%A2%9D%E7%AC%AC4%E9%A0%85%E8%A1%8C%E6%A5%AD.pdf)',
    '[適用縮短輪班間隔行業](https://www.mol.gov.tw/media/5758558/%E6%96%B0%E8%81%9E%E7%A8%BF%E9%99%84%E4%BB%B61.pdf)',
    '[勞動部線上申訴網站](https://docweb.mol.gov.tw/email_query_osha/)'
  ],
  container: {
    styles: {
      backgroundColor: 'rgba(255, 83, 104, 0.25)'
    }
  }
}

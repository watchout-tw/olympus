import projYulamchia from '~/config/role-play/yulamchia'
import projTsaiFirstYear from '~/config/draw/tsai-first-year'
import proj748 from '~/config/map/748'
import projTerror30 from '~/config/role-play/terror-30'
import projRepublicOfChina from '~/config/qz/republic-of-china'
import proj3Principles from '~/config/qz/3-principles'
import projCongressMidtermMockExam from '~/config/qz/congress-midterm-mock-exam'
import projLaborStandardAct from '~/config/swipe/labor-standard-act'
import projAnotherFuture from '~/config/journey/another-future'

export const projects = [
  projYulamchia,
  projTsaiFirstYear,
  proj748,
  projTerror30,
  projRepublicOfChina,
  proj3Principles,
  projCongressMidtermMockExam,
  projLaborStandardAct,
  projAnotherFuture
]
export const modules = [
  {
    id: 'journey',
    image: 'journey.png',
    title: '小旅行',
    description: '跟阿草一起來一場小旅行嗎？',
    component: 'journey'
  },
  {
    id: 'swipe',
    image: 'swipe.png',
    title: '滑滑看',
    description: '滑滑看？',
    component: 'swipe'
  },
  {
    id: 'qz',
    image: 'qz.png',
    title: '小測驗',
    description: '中華民國的教育系統最喜歡考試了。沃草也有小測驗，現在就試試看，看你是不是個好學生。',
    component: 'longform'
  },
  {
    id: 'role-play',
    image: 'role-play.png',
    title: '模擬人生',
    description: '如果能夠身歷其境，或許我們都能更了解彼此？',
    component: 'longform'
  },
  {
    id: 'map',
    image: 'map.jpg',
    title: '啊不是很有國際觀',
    description: '世界各地的人，說著不同的語言，讀著不同的報導，過著不同的生活。我們對他們了解多少？他們又是如何認識、看待台灣的？',
    component: 'map'
  },
  {
    id: 'draw',
    image: 'draw.png',
    title: '不然你來畫畫看啊',
    description: '不靠感覺，靠資料、靠數據的新聞，有時候並不符合期待。你也來試試？',
    component: 'draw'
  }
]

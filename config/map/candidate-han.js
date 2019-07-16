export default {
  id: 'candidate-han',
  module: 'categorized-browser',
  dataSource: '2019-han',
  description: '7 月 15 日，高雄市長韓國瑜打敗鴻海創辦人郭台銘，贏得中國國民黨總統初選，將與現任總統蔡英文競逐 2020 年總統大位。不過，各大國際媒體對韓國瑜都有些不同的標籤，從「親中」、「民粹主義」，到「像川普」和「主張台灣是中國一部分」。你心中的韓國瑜又長怎樣呢？',
  question: {
    before: '',
    after: '的韓國瑜贏得中國國民黨總統初選。'
  },
  countDescription: '則國際媒體報導說韓國瑜',
  categories: [
    {
      id: 'mention_populist',
      i18n: {
        tw: '民粹主義',
        en: 'populist'
      }
    },
    {
      id: 'mention_trump_like',
      i18n: {
        tw: '像川普',
        en: 'Trump-like'
      }
    },
    {
      id: 'mention_pro_china',
      i18n: {
        tw: '親中',
        en: 'pro-China'
      }
    },
    {
      id: 'mention_tw_is_part_of_china',
      i18n: {
        tw: '主張台灣是中國一部分',
        en: 'Taiwan is part of China'
      }
    }
  ]
}

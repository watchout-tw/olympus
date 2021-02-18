export const config = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'zh',
      iso: 'zh-TW',
      name: '繁體中文'
    }
  ],
  defaultLocale: 'zh',
  strategy: 'prefix_except_default',
  vueI18n: {
    fallbackLocale: 'zh',
    messages: {
      en: {
        message: {
          map228: {
            stop1: {
              title: 'Flipping through a newspaper from more than 70 years ago...'
            }
          }
        }
      },
      zh: {
        message: {
          map228: {
            stop1: {
              title: '翻開七十幾年前的報紙⋯'
            }
          }
        }
      }
    }
  }
}

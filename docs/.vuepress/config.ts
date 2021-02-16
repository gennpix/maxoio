import type { UserConfig, DefaultThemeOptions } from 'vuepress'

const config: UserConfig<DefaultThemeOptions> = {
  lang: 'zh-CN',
  title: 'maxoio的博客',
  description: '拼搏的目的是生活~',

  themeConfig: {
    // logo: '/images/logo.png',
  },
}

export = config
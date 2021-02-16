import type { UserConfig, DefaultThemeOptions } from 'vuepress'

const config: UserConfig<DefaultThemeOptions> = {
  lang: 'zh-CN',
  title: 'maxoio',
  description: '这是我的VuePress 站点',

  themeConfig: {
    // logo: '/images/logo.png',
  },
}

export = config
import type { UserConfig, DefaultThemeOptions } from 'vuepress'

const config: UserConfig<DefaultThemeOptions> = {
  lang: 'zh-CN',
  title: 'maxoio',
  description: 'Technological change is everywhere and affects every aspect of life.',

  themeConfig: {
    // 左上角的logo
    // logo: '/images/hero.png',

    smoothScroll: true,

    repo: 'gennpix/maxoio',

    // page meta
    editLinkText: '求指正',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',

    // 404 page（下面的内容可以增减，也可以换成你喜欢的诗句）
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',

    // other
    openInNewWindow: '在新窗口打开',

    docsDir: 'docs',
    // 网站顶部导航
    // 一些用法说明：
    //   1. 有children，样式会渲染为标题 ，否则普通样式。
    //   2. children可以只包含部分重要的文档。
    navbar: [
      // {
      //   text: 'Cloud Native',
      //   children: [
      //     {
      //       text: 'Kubernetes',
      //       link: '/kubernetes/',
      //       children: [],
      //     },
      //     {
      //       text: 'PaaS',
      //       children: [
      //         '/paas/README.md',
      //         '/paas/kubesphere/',
      //         '/paas/rancher/',
      //       ],
      //     },
      //     {
      //       text: 'Container',
      //       children: [
      //         '/container/README.md',
      //         '/container/docker.md',
      //         '/container/containerd.md',
      //         '/container/registry.md',
      //       ],
      //     },
      //     {
      //       text: 'Continuous Integration & Delivery',
      //       children: [
      //         '/cicd/README.md',
      //         '/cicd/jenkins.md',
      //       ],
      //     },
      //     {
      //       text: '运维',
      //       children: [
      //         '/ops/README.md',
      //         '/ops/monitoring.md',
      //         '/ops/logging.md',
      //         '/ops/security.md',
      //       ],
      //     },
      //     {
      //       text: '存储',
      //       children: [
      //         '/storage/README.md',
      //       ],
      //     },
      //   ],
      // },
      // {
      //   text: 'Coding',
      //   children: [
      //     {
      //       text: 'coding',
      //       link: '/coding/README.md',
      //       children: [],
      //     },
      //     {
      //       text: 'Shell',
      //       link: '/coding/shell.md',
      //     },
      //     {
      //       text: 'Python',
      //       link: '/coding/python.md',
      //     },
      //     {
      //       text: 'golang',
      //       link: '/coding/golang.md',
      //     },
      //     {
      //       text: 'architecture',
      //       link: '/coding/architecture.md',
      //     },
      //   ],
      // },
      // {
      //   text: 'Enterprise',
      //   children: [
      //     {
      //       text: '满足企业所需',
      //       children: [
      //         '/enterprise/README.md',
      //         '/enterprise/pm.md',
      //         '/enterprise/dev.md',
      //       ],
      //     },
      //   ],
      // },
      // {
      //   text: 'In Action',
      //   children: [
      //     {
      //       text: '学以致用',
      //       children: [
      //         '/practice/README.md',
      //         '/practice/nas.md',
      //       ],
      //     },
      //   ],
      // },
      // {
      //   text: 'About',
      //   children: [
      //     {
      //       text: '关于',
      //       children: [
      //         '/about/README.md',
      //         '/about/me.md',
      //         '/about/reading.md',
      //       ],
      //     },
      //   ],
      // },
    ],
    // 内容页sidebar
    sidebar: {
      '/kubernetes/': [
        {
          isGroup: true,
          text: 'Kubernetes',
          children: [
            '/kubernetes/README.md',
          ],
        },
      ],
      '/container/': [
        {
          isGroup: true,
          text: '容器技术',
          children: [
            '/container/README.md',
          ],
        },
        {
          isGroup: true,
          text: 'Docker',
          children: [
            '/container/docker.md',
          ],
        },
        {
          isGroup: true,
          text: 'Containerd',
          children: [
            '/container/containerd.md',
          ],
        },
        {
          isGroup: true,
          text: 'Container Registry',
          children: [
            '/container/registry.md',
            '/container/harbor.md',
          ],
        },
      ],
    },
  },

  // plugins: [
  //   ['@vuepress/plugin-pwa'],
  //   [
  //     '@vuepress/plugin-pwa-popup',
  //     {
  //       locales: {
  //         '/': {
  //           message: '发现新内容可用',
  //           buttonText: '刷新',
  //         },
  //       },
  //     },
  //   ],
  // ],
}

export = config
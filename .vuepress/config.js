module.exports = {
  title: 'Vdrias World! 游玩指南',
  description: 'Vdrias World! Manual',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank' },
  },
  themeConfig: {
    docsRepo: 'vdriasworld/manual',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们完善这个页面',
    sidebar: [
      ['/', '欢迎'],
      ['/get-started','新手上路'],
      ['/rules', '规则'],
      [`/command`, `指令`],
      ['/faq', '常见问题'],
    ],
    smoothScroll: true,
    lastUpdated: '上次更新于',
  },
  evergreen: true,
};
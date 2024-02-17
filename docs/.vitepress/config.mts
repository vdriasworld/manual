import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vdrias World 游玩指南",
  description: "Vdrias World 玩家指南",
  cleanUrls: true,

  lastUpdated: true,
  sitemap: {
    hostname: 'https://manual.vdrias.cn'
  },

  lang: 'zh',
  appearance: true,


  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '捐助我们', link: '/donate' },

    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true,
    lastUpdated: {
      text: '上次更新于'
    },
    outline: {
      'label': '在此页面上'
    },
    editLink: {
      pattern: 'https://github.com/vdriasworld/manual/edit/main/docs/:path',
      text: '帮助我们完善这个页面'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '开始', items:[
            {
              text: '欢迎',
              link: '/index'
            },
            {
              text: '新手上路',
              link: '/get-started'
            },
            {
              text: '指令及插件',
              link: '/command'
            }
          ] 
        },
          { text: '游玩准则', link: '/rules' },
          { text: '常见问题', link: '/faq' },
          { text: '捐助', link: '/donate' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vdriasworld/manual' }
    ]
  }
})

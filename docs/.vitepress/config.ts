import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'Markdown 教程',
  description: 'LXJ tEam Markdown 教程',

  themeConfig: {
    base: '/', // 如果部署在子目录，改为 '/your-subdirectory/'
    nav: [
      { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],
    vite: {
      resolve: {
        alias: [
          {
            find: /^.*\/assetsfile\/(.*)$/,
            replacement: '/src/docs/assetsfile/$1'
          }
        ]
      }
    }
  },
});


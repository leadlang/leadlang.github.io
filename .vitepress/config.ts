import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lead",
  description: "An Experimental Programming Language",
  appearance: "dark",
  lang: "en-US",
  head: [
    ["link", { rel: "icon", href: "/icon.svg" }],
    [
      'script',
      {},
      `
      window.onkeydown = function(e) {
        if (e.key == "E") {
          document.body.style = "transform: rotate(180deg)";
        }
      }
      `
    ]
  ],
  vite: {
    assetsInclude: [
      /install.sh/,
      /install.ps1/,
      /\*.svg/g
    ]
  },
  themeConfig: {
    search: {
      provider: "local"
    },
    logo: "/icon.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Learn', link: '/learn/' }
    ],

    sidebar: [
      {
        text: 'Download',
        items: [
          { text: "Get Lead Lang", link: "/download" }
        ]
      },
      {
        text: 'Learn',
        items: [
          { text: "Basics", link: "/learn/" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leadlang' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023-${new Date().getFullYear()} Lead Programming Language`
    }
  },
  markdown: {
    languages: [
      {
        name: "lead",
        aliases: ["pb"],
        displayName: "Lead",
        scopeName: "source.leadlang",
        repository: {

        },
        patterns: [
          {
            match: "@s",
            name: "support.function"
          },
          {
            match: "# [a-zA-Z_][a-zA-Z0-9_]*",
            name: "comment.line"
          },
          {
            match: "\\$[a-zA-Z_][a-zA-Z0-9_]*:",
            name: "variable.parameter"
          },
          {
            match: "\\$",
            name: "storage.modifier"
          },
          {
            match: "->&\\$",
            name: "storage.modifier"
          },
          {
            match: "->\\$",
            name: "storage.modifier"
          },
          {
            match: "\\$[a-zA-Z_][a-zA-Z0-9_]*",
            name: "variable.other"
          },
          {
            match: "\"(.*?)\"",
            name: "string.quoted.double"
          },
          {
            match: "\\b(print|drop)\\b",
            name: "entity.name.function"
          }
        ]
      }
    ],
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
});
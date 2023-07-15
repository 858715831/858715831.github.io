const moment =require('moment');
moment.locale("zh-cn")

module.exports = {
  title:"Cabbage’s Blog",
  description:"Cabbage’s Blog",
  head:[
    ['link',{rel:'icon',href:'/favicon.png'}],
    ['meta',{rel:'author',content:'cabbage'}],
    ['meta',{rel:'keywords',content:'vuepress,cabbage的博客'}],
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: '数据库',
        items: [
          { text: 'Group1', items: [          { text: 'Chinese', link: '/fuckxx' },
          { text: 'Japanese', link: '/fuck' }
] },
          { text: 'Group2', items: [{ text: 'Chinese', link: '/fuckxx' },] }
        ]
      }
    ],
    sidebar: 'auto',
    displayAllHeaders: true, // 显示所有标题
    activeHeaderLinks: false, // 滑动标题更改
    lastUpdated: '最近更新', // 最后一次更新时间
     
  },
  plugins: [ 
    '@vuepress/last-updated',//最后一次更新时间
    {
      transformer: (timestamp) => {
        return moment(timestamp).format("LLLL")
      }
    },
    
    "vuepress-plugin-auto-sidebar" ]
}
const genSidebarConfig = (title) => {
  return [
    {
      title,
      collapsable: false,
      children: [
        'util',
      ]
    }
  ]
}
  
module.exports = {
    title: '文档',
    description: 'Just playing around',
    themeConfig: {
      locales: {
        '/': {
          label: '简体中文',
          languageDropdown: false,
          nav: [
            { text: 'Home', link: '/' },
            { text: 'Style', link: '/style/' },
          ],
          sidebar: {
            '/style/': genSidebarConfig('样式')
          }
        }
      },
    },
}

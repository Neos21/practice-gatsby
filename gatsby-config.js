module.exports = {
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    // ファイル群を GraphQL で扱えるようにするための定義
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
    // Markdown 中で画像を扱えるようにする・gatsby-remark-images とセットで必要
    {
      resolve: 'gatsby-plugin-sharp'
    },
    // https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/
    // Markdown パーサ
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,  // CommonMark Mode (Default : true)
        footnotes : true,  // Footnotes Mode (Default : true)
        pedantic  : true,  // Pedantic Mode (Default : true)
        gfm       : true,  // GitHub Flavored Markdown Mode (Default : true)
        plugins: [
          // https://www.gatsbyjs.com/plugins/gatsby-remark-images/
          // Markdown 中で画像を扱えるようにする・gatsby-plugin-sharp が必要
          {
            resolve: 'gatsby-remark-images',
            options: {}
          }
        ]
      }
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-catch-links/
    // Markdown 中の相対リンクを捉えて SPA として遷移させる
    {
      resolve: 'gatsby-plugin-catch-links'
    }
  ]
};

module.exports = {
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    // ファイル群を GraphQL で扱えるようにするための定義らしい
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
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
        plugins: []
      }
    }
  ]
};

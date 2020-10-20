import React from 'react';

export default class BlogPostTemplate extends React.Component {
  render = () => {
    const post = this.props.data.markdownRemark;
    return (
      <div>
        <h1>{post.frontmatter.title || 'タイトルなし'}</h1>
        <p>{post.frontmatter.date || '時刻なし'}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

// slug : 基本的に、ルート相対パスのこと。URL のドメイン以下のパス部分
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;

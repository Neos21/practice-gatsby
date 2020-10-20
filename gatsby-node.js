const path = require('path');
const gatsbySourceFilesystem = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => new Promise((resolve, reject) => {
  const blogPost = path.resolve('./src/templates/blog-post.js');
  resolve(
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
      .then((result) => {
        if(result.errors) {
          console.log(result.errors);
          return reject(result.errors);
        }
        
        // Create Blog Posts Pages
        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach((post) => {
          actions.createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug
            }
          });
        });
      })
  )
});

exports.onCreateNode = ({ node, actions, getNode }) => {
  if(node.internal.type === `MarkdownRemark`) {
    const value = gatsbySourceFilesystem.createFilePath({ node, getNode });
    actions.createNodeField({
      name: 'slug',
      node,
      value
    });
  }
};

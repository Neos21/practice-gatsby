import React from 'react';
import { Link } from 'gatsby';  // https://www.gatsbyjs.com/docs/gatsby-link/

export default class Home extends React.Component {
  render = () => (
    <div>
      <h1>Hello world!</h1>
      <p><Link to="/blog/2020/10/20-01">Test</Link></p>
    </div>
  )
}

import React from 'react';
import { Link } from 'gatsby';  // https://www.gatsbyjs.com/docs/gatsby-link/

import Layout from '../components/layout';
import style from './index.module.css';

export default class Index extends React.Component {
  render = () => (
    <Layout>
      <h1 className={style.myIndex}>Hello world!</h1>
      <p>どうですか</p>
      <p><Link to="/blog/2020/10/20-01">Test</Link></p>
    </Layout>
  )
}

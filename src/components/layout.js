import React from 'react';

import './layout.css';

// https://www.gatsbyjs.com/docs/recipes/styling-css/
export default class Layout extends React.Component {
  render = () => {
    const { children } = this.props;
    return (
      <div className="layout-container">{children}</div>
    );
  }
}
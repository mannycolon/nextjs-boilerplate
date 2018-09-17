import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Index extends Component {
  static async getInitialProps() {
    return { title: 'Nextjs Boilerplate' }
  }

  render() {
    const { title } = this.props;

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>{title}</h1>
      </div>
    )
  }
}

Index.propTypes = {
  title: PropTypes.string
};

export default Index;

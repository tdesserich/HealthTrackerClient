import React, { Component } from 'react';
import { Row } from 'reactstrap';

  class Footer extends Component {
  render() {
    return (
      <footer className="footerStyle">
        <Row>
          <p style={{width: "100%", textAlign: "center"}}>&copy; tdesserich 2018</p>
        </Row>
      </footer>
    )
  }
}

export default Footer;
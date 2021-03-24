import React, { Component } from 'react';
import '../stylesheets/Nav.css';
import logo from '../starter-code/assets/logo.svg';
import moon from '../starter-code/assets/icon-moon.svg';

import avatar from '../starter-code/assets/image-avatar.jpg';

export default class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <div id="left-section">
          <div id="logo-background">
            <img src={logo} alt="" />
          </div>
          <div id="moon-background">
            <img src={moon} alt="" />
          </div>
        </div>
        <div id="avatar-container">
          <img src={avatar} alt="" />
        </div>
      </div>
    );
  }
}

import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawwer/DrawerToggeleButton';

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton />
      </div>
      <div className="toolbar__logo">
        <a href="/">DASHBARD BRI</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Produts</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;

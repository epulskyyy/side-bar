import React from 'react';
import './SideDrawer.css';
import ActionContext from '../../Context/ActionContext';
const sideDrawer = (props) => (
  <ActionContext.Consumer>
    {(ev) => {
      let sideClasses = 'side-drawer';
      if (ev.show) {
        sideClasses = 'side-drawer open';
      }
      return (
        <nav className={sideClasses}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Produts</a>
            </li>
          </ul>
        </nav>
      );
    }}
  </ActionContext.Consumer>
);
export default sideDrawer;

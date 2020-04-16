import React from 'react';
import './DrawerToggeleButton.css';
import ActionContext from '../../Context/ActionContext';
const DrawerToggleButton = (props) => (
  <ActionContext.Consumer>
    {(ev) => {
      return (
        <button className="toggle-button" onClick={ev.clickToggle}>
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
        </button>
      );
    }}
  </ActionContext.Consumer>
);
export default DrawerToggleButton;

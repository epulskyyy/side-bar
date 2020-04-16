import React from 'react';
import './BackDrop.css';
import ActionContext from '../../Context/ActionContext';
const backDrop = (props) => (
  <ActionContext.Consumer>
    {(ev) => {
      return <div className="backdrop" onClick={ev.clickBackDrop} />;
    }}
  </ActionContext.Consumer>
);

export default backDrop;

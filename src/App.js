import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawwer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import ActionContext from './Context/ActionContext';
class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawwerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop />;
    }
    return (
      <ActionContext.Provider
        value={{
          clickToggle: this.drawwerToggleClickHandler,
          clickBackDrop: this.backDropClickHandler,
          show: this.state.sideDrawerOpen,
        }}
      >
        <div style={{ height: '100%' }}>
          <Toolbar />
          <SideDrawer />
          {backDrop}
          <main style={{ marginTop: '65px' }}>
            <p>This is page</p>
          </main>
        </div>
      </ActionContext.Provider>
    );
  }
}

export default App;

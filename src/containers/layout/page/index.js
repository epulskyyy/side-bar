import React from 'react';
import Sidemenu from './SideMenu';
import { withRouter, Redirect } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux'; // eslint-disable-line no-unused-vars

const Page = (props) => {
  const auth = useSelector((state) => state.auth); // eslint-disable-line no-unused-vars
  // const dispatch = useDispatch();

  if (!auth.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Sidemenu {...props} />
      <div className="col content">{props.children}</div>
    </>
  );
};

export default withRouter(Page);

import React from 'react';
import Page from '../../containers/layout/page';
import CardInvoice from './CardInvoice';
import CardUptime from './CardUptime';
import CardStatusRate from './CardStatusRate';

const Home = () => {
  return (
    <Page>
      <div data-test="dashboardHome" className="content_main">
        <div className="content_main_header">
          <h5 data-test="dashboardHome">Overview dashboard</h5>
        </div>
        <div className="row ">
          <div data-test="dashboardHome" className="col-lg-12">
            <CardInvoice />
          </div>
        </div>
        <div className="row">
          <div data-test="dashboardHome" className="col-lg-8">
            <CardUptime />
          </div>
          <div data-test="dashboardHome" className="col-lg-4">
            <CardStatusRate />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;

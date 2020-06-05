import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import Page from '../../containers/layout/page';
import InfoSaldoInvoice from '../infoSaldo/invoice/InfoSaldoInvoice';
import { useDispatch } from 'react-redux';
import { fetchDataUsage } from '../../store/modules/usage/actions';
import { fetchData } from '../../store/modules/invoice/actions';
export default function InfoMutasi(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDataUsage());
  }, [dispatch]);
  return (
    <Page>
      <div className="content_main">
        <div className="content_main_header">
          <h5>Info Mutasi</h5>
        </div>

        <div className="content_body">
          <div className="slider">
            <div className="body-content">
              <InfoSaldoInvoice />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

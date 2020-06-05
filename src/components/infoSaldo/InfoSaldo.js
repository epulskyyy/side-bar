import React, { useState, useEffect } from 'react';
import Page from '../../containers/layout/page';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDataUsage } from '../../store/modules/usage/actions';
import { fetchData } from '../../store/modules/invoice/actions';
import InfoSaldoInvoice from './invoice/InfoSaldoInvoice';
import InfoUsage from './usage/InfoUsage';
export default function InfoSaldo(props) {
  const [link, setLink] = useState('invoice'); // eslint-disable-line no-unused-vars
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDataUsage());
  });

  const {
    location: { pathname },
  } = props;
  const page = pathname.split('/');
  let pageName = '';
  page[2] === '' ? (pageName = 'invoice') : (pageName = page[2]);
  let transform = `translateX(${pageName === 'usage' ? '-100%' : '0%'})`;
  return (
    <Page>
      <div className="content_main">
        <div className="content_main_header">
          <h5>Info Saldo</h5>
        </div>
        <ul>
          <li
            className={
              pageName === 'invoice'
                ? 'item-link active'
                : pageName === 'usage'
                ? 'item-link'
                : 'item-link active'
            }
          >
            <Link to="/infosaldo/invoice" onClick={() => setLink('invoice')}>
              Laporan Invoice
            </Link>
          </li>
          <li
            className={pageName === 'usage' ? 'item-link active' : 'item-link'}
          >
            <Link to="/infosaldo/usage" onClick={() => setLink('usage')}>
              Laporan Usage/Uptime
            </Link>
          </li>
        </ul>
        <div className="content_body">
          <div
            className="slider"
            style={{
              transform: transform,
              MozTransformStyle: transform,
            }}
          >
            <div className="body-content">
              <InfoSaldoInvoice />
            </div>
            <div className="body-content">
              <InfoUsage />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

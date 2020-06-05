import React from 'react';
import CardChartInvoice from './CardChartInvoice';
import CardLaporanInvoice from './CardLaporanInvoice';

export default function InfoSaldoInvoice() {
  return (
    <>
      <div data-test="infosaldo" className="row">
        <div className="col-lg-12">
          <CardChartInvoice />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <CardLaporanInvoice />
        </div>
      </div>
    </>
  );
}

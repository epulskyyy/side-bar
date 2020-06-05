import React from 'react';
import Card from '../../card/Card';
import Table from '../../table/Table';

export default function CardLaporanInvoice() {
  return (
    <Card className="box-none">
      <div className="element line">
        <p data-test="laporanInvoice" className="title">
          Laporan Invoice
        </p>

        <select data-test="laporanInvoice" className="select">
          <option className="option" value="last24">
            This month
          </option>
        </select>
      </div>

      <Table />
    </Card>
  );
}

import React, { useState } from 'react';
import Status from './Status';
import {
  IcoDownload,
  IconFirstPage,
  IconNextPage,
  IconPreviousPage,
  IconLastPage,
} from '../assets/icon';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { searchHandler, fetchData } from '../../store/modules/invoice/actions';
import { CSVLink } from 'react-csv';
import { convertDate } from '../../store/modules/function/function';
import NumberFormat from 'react-number-format';
export default function Table() {
  const dataInvoice = useSelector((state) => state.invoice);
  const dispatch = useDispatch();
  const [paging, setPaging] = useState(1);
  const onSearchHandler = (e) => {
    console.log(e.target.value);
    dispatch(searchHandler(e.target.value));
  };

  const nextPagingHandler = async (page) => {
    await dispatch(fetchData(page + 1));
    await next(page);
  };

  const firstPageHanlder = async () => {
    await dispatch(fetchData(1));
    await firstPage();
  };
  const firstPage = () =>
    new Promise(() => {
      setPaging(1);
    });
  const lastPageHanlder = async (page) => {
    await dispatch(fetchData(page));
    await lastPage(page);
  };
  const lastPage = (page) =>
    new Promise(() => {
      setPaging(page);
    });
  const next = (page) =>
    new Promise(() => {
      setPaging(page + 1);
    });
  const prev = (page) =>
    new Promise(() => {
      setPaging(page - 1);
    });
  let btnPrevFirstDisable = true;
  let btnPrevFirstClass = 'disable btn ';
  let btnPrevFirstIcon = '#cacfd9';
  if (paging > 1) {
    btnPrevFirstDisable = false;
    btnPrevFirstClass = 'btn';
    btnPrevFirstIcon = 'black';
  }

  const prevPagingHandler = async (page) => {
    await dispatch(fetchData(page - 1));
    await prev(page);
  };

  const numberFormat = (num) => {
    return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  const dat = dataInvoice.dataShow.map((item) => [
    convertDate(item.tanggal).full,
    item.no_invoice,
    numberFormat(item.nominal),
    item.due_date,
    item.status,
  ]);
  let csvData = [
    ['TANGGAL', 'ID INVOICE', 'NOMINAL', 'DUE DATE', 'STATUS'],
    ...dat,
  ];

  return dataInvoice.isFetching ? (
    <div className="row">
      <div className="col-6">
        <Skeleton height={30} />
      </div>
      <div className="col-6">
        <Skeleton height={30} />
      </div>
      <div className="col-12">
        <Skeleton height={30} count={5} />
      </div>
    </div>
  ) : (
    <>
      <div className="table-header">
        <div className="table-search">
          <input
            type="text"
            className="base"
            placeholder="Cari..."
            onChange={onSearchHandler}
          ></input>
        </div>
        <CSVLink
          filename={`Report_Invoice_BRIAPI_` + new Date().toLocaleDateString()}
          data={csvData}
          className="csv-button"
        >
          <IcoDownload /> Download csv
        </CSVLink>
      </div>
      <div className="table-responsive">
        <div className="table-body">
          <table
            className={
              dataInvoice.isTable === false ? 'table table-hover' : 'table'
            }
            style={{ tableLayout: 'fixed', wordWrap: 'break-word' }}
          >
            <thead>
              <tr>
                <th className="col-2">TANGGAL</th>
                <th className="col-3">ID INVOICE</th>
                <th className="col-3">NOMINAL</th>
                <th className="col-2">DUE DATE</th>
                <th className="col-2">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {dataInvoice.isTable === true ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    <Skeleton height={30} />
                  </td>
                </tr>
              ) : dataInvoice.dataShow.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    <h4 className="data-notfound">Data Tidak Ditemukan</h4>
                  </td>
                </tr>
              ) : (
                dataInvoice.dataShow.map((item, index) => (
                  <tr key={index}>
                    <td>{convertDate(item.tanggal).full}</td>
                    <td>{item.no_invoice}</td>
                    <NumberFormat
                      value={item.nominal}
                      displayType={'text'}
                      thousandSeparator={`.`}
                      decimalSeparator={`,`}
                      renderText={(value) => <td>{value}</td>}
                    />
                    <td>{item.due_date}</td>
                    <td>
                      <Status
                        status={item.status === 'Paid' ? 'success' : 'warning'}
                      >
                        {item.status}
                      </Status>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="page">
        <div className="page_content">
          <label>Rows per page:</label>
          <select className="page_select">
            <option>5</option>
          </select>
          <div className="page_range">
            <label>
              {dataInvoice.pagingData.page +
                '-' +
                dataInvoice.pagingData.totalPage +
                ' of ' +
                dataInvoice.pagingData.totalData}
            </label>
          </div>
          <div className="page-ico">
            <button
              disabled={btnPrevFirstDisable}
              onClick={() => firstPageHanlder()}
              className={btnPrevFirstClass}
            >
              <IconFirstPage variant={btnPrevFirstIcon} />
            </button>
            <button
              disabled={btnPrevFirstDisable}
              onClick={() => prevPagingHandler(paging)}
              className={btnPrevFirstClass}
            >
              <IconPreviousPage variant={btnPrevFirstIcon} />
            </button>

            <button
              disabled={
                paging === dataInvoice.pagingData.totalPage ? true : false
              }
              onClick={() => nextPagingHandler(paging)}
              className={
                paging === dataInvoice.pagingData.totalPage
                  ? 'disable btn '
                  : 'btn'
              }
            >
              <IconNextPage
                variant={
                  paging === dataInvoice.pagingData.totalPage
                    ? '#cacfd9'
                    : 'black'
                }
              />
            </button>
            <button
              disabled={
                paging === dataInvoice.pagingData.totalPage ? true : false
              }
              onClick={() => lastPageHanlder(dataInvoice.pagingData.totalPage)}
              className={
                paging === dataInvoice.pagingData.totalPage
                  ? 'disable btn '
                  : 'btn'
              }
            >
              <IconLastPage
                variant={
                  paging === dataInvoice.pagingData.totalPage
                    ? '#cacfd9'
                    : 'black'
                }
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

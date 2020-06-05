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
import {
  searchHandlerUsage,
  fetchDataUsage,
} from '../../store/modules/usage/actions';
import { CSVLink } from 'react-csv';
import { convertDate } from '../../store/modules/function/function';
export default function TableUsage() {
  const dataUsage = useSelector((state) => state.usage);
  const dispatch = useDispatch();
  const [paging, setPaging] = useState(1);
  const onSearchHandler = (e) => {
    console.log(e.target.value);
    dispatch(searchHandlerUsage(e.target.value));
  };

  const nextPagingHandler = async (page) => {
    await dispatch(fetchDataUsage(page + 1));
    await next(page);
  };
  const firstPageHanlder = async () => {
    await dispatch(fetchDataUsage(1));
    await firstPage();
  };
  const firstPage = () =>
    new Promise(() => {
      setPaging(1);
    });
  const lastPageHanlder = async (page) => {
    await dispatch(fetchDataUsage(page));
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

  const prevPagingHandler = async (page) => {
    await dispatch(fetchDataUsage(page - 1));
    await prev(page);
  };
  const dat = dataUsage.dataShowUsage.map((item) => [
    `${convertDate(item.date).full} ,${convertDate(item.date).dTime}`,
    item.request,
    item.response_code,
    item.response_description,
    item.status_code,
  ]);
  let csvData = [
    [
      'TANGGAL',
      'request',
      'RESPONSE_CODE',
      'RESPONS_DESCRIPTION',
      'STATUS_CODE',
    ],
    ...dat,
  ];
  let btnPrevFirstDisable = true;
  let btnPrevFirstClass = 'disable btn ';
  let btnPrevFirstIcon = '#cacfd9';
  if (paging > 1) {
    btnPrevFirstDisable = false;
    btnPrevFirstClass = 'btn';
    btnPrevFirstIcon = 'black';
  }
  return dataUsage.isFetching ? (
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
          filename={`Report_Usage_BRIAPI_` + new Date().toLocaleString()}
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
              dataUsage.isTable === false ? 'table table-hover' : 'table'
            }
            style={{ tableLayout: 'fixed', wordWrap: 'break-word' }}
          >
            <thead>
              <tr>
                <th className="col-2">TANGGAL</th>
                <th className="col-2">REQUEST</th>
                <th className="col-2">RESPONSE CODE</th>
                <th className="col-2">RESPONSE DESCRIPTION</th>
                <th className="col-2">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {dataUsage.isTable === true ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    <Skeleton height={30} />
                  </td>
                </tr>
              ) : dataUsage.dataShowUsage.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    <h4 className="data-notfound">Data Tidak Ditemukan</h4>
                  </td>
                </tr>
              ) : (
                dataUsage.dataShowUsage.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {convertDate(item.date).full +
                        ',' +
                        convertDate(item.date).dTime}
                    </td>
                    <td>{item.request} </td>
                    <td>{item.response_code} </td>
                    <td>{item.response_description}</td>
                    <td>
                      <Status
                        status={
                          item.status_code === 'Success' ? 'success' : 'failed'
                        }
                      >
                        {item.status_code}
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
              {dataUsage.pagingData.page +
                '-' +
                dataUsage.pagingData.totalPage +
                ' of ' +
                dataUsage.pagingData.totalData}
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
                paging === dataUsage.pagingData.totalPage ? true : false
              }
              onClick={() => nextPagingHandler(paging)}
              className={
                paging === dataUsage.pagingData.totalPage
                  ? 'disable btn '
                  : 'btn'
              }
            >
              <IconNextPage
                variant={
                  paging === dataUsage.pagingData.totalPage
                    ? '#cacfd9'
                    : 'black'
                }
              />
            </button>
            <button
              disabled={
                paging === dataUsage.pagingData.totalPage ? true : false
              }
              onClick={() => lastPageHanlder(dataUsage.pagingData.totalPage)}
              className={
                paging === dataUsage.pagingData.totalPage
                  ? 'disable btn '
                  : 'btn'
              }
            >
              <IconLastPage
                variant={
                  paging === dataUsage.pagingData.totalPage
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

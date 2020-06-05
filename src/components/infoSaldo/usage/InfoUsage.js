import React, { useEffect } from 'react';
import Card from '../../card/Card';
import Table from '../../table/TableUsage';
import { fetchChartUsage } from '../../../store/modules/usage/actions';
import { useDispatch } from 'react-redux';
import CardChartUsage from './CardChartUsage';
import CardStatusRate from './CardStatusRate';

export default function InfoUsage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChartUsage());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <CardChartUsage />
        </div>
        <div className="col-lg-4" style={{ marginBottom: '25px' }}>
          <CardStatusRate />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Card className="box-none">
            <div className="element line">
              <p className="title">Laporan Invoice</p>

              <select className="select">
                <option className="option" value="last24">
                  Last 3 Day
                </option>
                <option className="option" value="last12">
                  Last day
                </option>
                <option className="option" value="last3">
                  Today
                </option>
              </select>
            </div>

            <Table />
          </Card>
        </div>
      </div>
    </>
  );
}

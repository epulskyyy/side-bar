import React, { useEffect } from 'react';
import Card from '../../card/Card';
import Skeleton from 'react-loading-skeleton';
import CountUp from 'react-countup';
import { Line } from 'react-chartjs-2';
import {
  convertMoney,
  convertDate,
} from '../../../store/modules/function/function';
import { useSelector, useDispatch } from 'react-redux';
import { chartInfoSaldo } from '../../../store/modules/invoice/actions';

export default function CardChartInvoice() {
  const data = useSelector((state) => state.invoice.dataInfoSaldo);
  const dataChart = useSelector((state) => state.invoice.dataChartInfoSaldo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chartInfoSaldo());
  }, [dispatch]);
  return (
    <Card className="box-none">
      <div className="element line">
        <p className="title">invoice overview</p>

        <select className="select">
          <option className="option" value="last24">
            This month
          </option>
        </select>
      </div>
      {data == null ? (
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12 info-saldo">
                <h5 className="text-blue-grey uppercase">
                  <Skeleton width={150} />
                </h5>

                <h1 className="text-money">
                  <Skeleton />
                </h1>
              </div>
              <div className="col-lg-12 col-md-6 info-saldo">
                <h5 className="text-blue-grey uppercase">
                  <Skeleton width={150} />
                </h5>
                <h1 className="text-money">
                  <Skeleton />
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div style={{ width: '100', height: '250px' }}>
              <Skeleton count={4} height={50} />
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12 info-saldo">
                <h5 className="text-blue-grey uppercase">
                  Invoice Bulan Berjalan
                </h5>

                <h1 className="text-money">
                  Rp{' '}
                  <CountUp
                    start={0}
                    end={data.ibb}
                    duration={2.5}
                    separator="."
                  />
                </h1>
              </div>
              <div className="col-lg-12 col-md-6 info-saldo">
                <h5 className="text-blue-grey uppercase">Invoice Bulan Lalu</h5>
                <h1 className="text-money">
                  Rp{' '}
                  <CountUp
                    start={0}
                    end={data.ibl}
                    duration={2.5}
                    separator="."
                  />
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div style={{ width: '100', height: '250px' }}>
              <Line
                options={{
                  legend: {
                    display: false,
                  },
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          fontColor: '#5f789b',
                          fontSize: '12',
                          fontFamily: "'Roboto'",
                          beginAtZero: true,
                          maxTicksLimit: 5,

                          callback: (value) => {
                            return convertMoney(value, '2');
                          },
                        },
                      },
                    ],
                    xAxes: [
                      {
                        ticks: {
                          fontColor: '#5f789b',
                          fontSize: '12',
                          fontFamily: "'Roboto'",
                          beginAtZero: true,
                          callback: (value) => {
                            let valueChange = value.split('-');
                            return valueChange[2];
                          },
                        },

                        gridLines: {
                          borderDash: [8, 4],
                        },
                      },
                    ],
                  },
                  tooltips: {
                    titleFontFamily: "'Roboto'",
                    titleAlign: 'center',
                    bodyFontFamily: "'Roboto'",
                    bodyAlign: 'center',
                    xPadding: 50,
                    yPadding: 20,
                    bodyFontSize: 20,
                    titleFontSize: 12,
                    titleSpacing: 10,
                    caretSize: 10,
                    displayColors: false,
                    callbacks: {
                      title: (tooltipItems) => {
                        let item = { ...tooltipItems[0] };
                        return (
                          convertDate(item.label).month +
                          ' ' +
                          convertDate(item.label).year
                        );
                      },
                      label: (tooltipItems) => {
                        let value = tooltipItems.yLabel;
                        return convertMoney(value, '1');
                      },
                    },
                  },
                }}
                data={{
                  labels: dataChart.map(({ date }) => date),
                  datasets: [
                    {
                      data: dataChart.map(({ nominal }) => nominal),
                      borderColor: '#f19b2c',
                      pointBorderColor: '#ffffff',
                      backgroundColor: 'rgba(241,154,45,0.2)',
                      fill: true,
                      lineTension: false,
                      pointBorderWidth: 3,
                      pointBackgroundColor: '#f19b2c',
                      categoryPercentage: 10,
                      pointRadius: 7,
                      borderWidth: 5,
                      hoverBorderWidth: 2,
                      hoverRadius: 5,
                      radius: 50,
                      hitRadius: 10,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

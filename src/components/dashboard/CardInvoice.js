import React, { useEffect } from 'react';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  onChangeMonthInvoiceSuccess,
  fetchChartInvoice,
} from '../../store/modules/invoice/actions';
import Skeleton from 'react-loading-skeleton';
import CountUp from 'react-countup';
import CardDetails from '../card/CardDetails';
import {
  months,
  convertDate,
  convertMoney,
} from '../../store/modules/function/function';
import { Line } from 'react-chartjs-2';

export default function CardInvoice() {
  const dispatch = useDispatch();
  const totalInvoices = useSelector((state) => state.invoice.dataChartInvoice);
  useEffect(() => {
    dispatch(fetchChartInvoice());
  }, [dispatch]);
  const onChangeTotal = (event, status) => {
    dispatch(onChangeMonthInvoiceSuccess(event.target.value));
  };
  return (
    <Card>
      <div className="element">
        <p className="title">Total Invoice</p>

        <select
          className="select"
          onChange={(e) => onChangeTotal(e, 'totalInvoice')}
        >
          <option className="option" value="ThisMonth">
            This month
          </option>
          <option className="option" value="LastMonth">
            Last month
          </option>
          <option className="option" value="Last3Month">
            Last 3 month
          </option>
          <option className="option" value="Last6Month">
            Last 6 month
          </option>
        </select>
      </div>
      <div className="element-header">
        <p className="text-Bold_title">
          {totalInvoices == null ? (
            'Rp0'
          ) : (
            <>
              Rp
              <CountUp
                start={0}
                end={totalInvoices.total_invoice}
                duration={2.5}
                separator="."
              />
            </>
          )}
        </p>
      </div>
      <div className="element-body" style={{ marginBottom: '22px' }}>
        {totalInvoices == null ? (
          <div className="row">
            <div className="col-6">
              <Skeleton count={5} />
            </div>
            <div className="col-6">
              <Skeleton count={5} />
            </div>
          </div>
        ) : (
          <>
            <CardDetails title="Info Saldo" data={totalInvoices.total_saldo} />
            <CardDetails
              title="Info Mutasi"
              data={totalInvoices.total_mutasi}
            />
            <CardDetails
              title="Info Lokasi Kantor"
              data={totalInvoices.total_lokasi_kantor}
            />
            <CardDetails title="Info Valas" data={totalInvoices.total_valas} />
          </>
        )}
      </div>
      <div className="wrapper" style={{ marginTop: '56px' }}>
        <p>Invoice Over time</p>
        {totalInvoices == null ? (
          <Skeleton />
        ) : (
          <div className="chart">
            <Line
              height={124}
              data={{
                labels: totalInvoices.data.map(({ date }) => {
                  let arrDate = date.split('-');
                  const dates = new Date(
                    `${arrDate[1]}-${months.indexOf(arrDate[0]) + 1}`
                  );
                  return dates;
                }),
                datasets: [
                  {
                    data: totalInvoices.data.map(({ total }) => total),
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
              options={{
                maintainAspectRatio: false,
                legend: {
                  display: false,
                },

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
                        callback: (value, index) => {
                          const date = new Date(value);
                          return months[date.getMonth()];
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
                  custom: (tooltipModel) => {
                    return tooltipModel.caretY;
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </Card>
  );
}

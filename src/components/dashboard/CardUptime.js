import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { convertDate } from '../../store/modules/function/function';
import { Line } from 'react-chartjs-2';
import {
  onChangeMonthUsageSuccess,
  fetchChartUsage,
} from '../../store/modules/usage/actions';

export default function CardUptime() {
  const [unit, setUnit] = useState('jam');

  const usage = useSelector((state) => state.usage.dataChartUsage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChartUsage());
  }, [dispatch]);
  const changeDataUsage = (param) => {
    if (param === 'last24' || param === 'last12') {
      setUnit('jam');
    } else {
      setUnit('menit');
    }
    dispatch(onChangeMonthUsageSuccess(param));
  };
  return (
    <Card>
      <div className="element">
        <p className="title">Usage/Uptime</p>

        <select
          className="select"
          onChange={(e) => changeDataUsage(e.target.value)}
        >
          <option className="option" value="last24">
            Last 24 Hour
          </option>
          <option className="option" value="last12">
            Last 12 Hour
          </option>
          <option className="option" value="last3">
            Last 3 Hour
          </option>
          <option className="option" value="last1">
            Last 1 Hour
          </option>
          <option className="option" value="last15min">
            Last 15 minutes
          </option>
        </select>
      </div>
      {usage == null ? (
        <Skeleton height="100%" />
      ) : (
        <div className="chart">
          <Line
            height={80}
            data={{
              labels: usage.map(({ date }) => date),
              datasets: [
                {
                  data: usage.map(({ total_hit }) => total_hit),
                  borderColor: '#3384f3',
                  backgroundColor: 'rgba(52,132,243,0.2)',
                  fill: true,
                  lineTension: false,
                  pointBorderWidth: 3,
                  pointBorderColor: '#ffffff',
                  pointBackgroundColor: '#3384f3',
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
                      maxTicksLimit: 4,
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
                      maxTicksLimit: 6,
                      callback: (value) => {
                        if (unit === 'jam') {
                          return convertDate(value).time;
                        } else {
                          return convertDate(value).dTime;
                        }
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

                    if (unit === 'jam') {
                      return `${convertDate(item.xLabel).full} , ${
                        convertDate(item.xLabel).time
                      }`;
                    } else {
                      return `${convertDate(item.xLabel).full}, ${
                        convertDate(item.xLabel).dTime
                      }`;
                    }
                  },
                  label: (tooltipItems, data) => {
                    return tooltipItems.yLabel + ' Total Hit';
                  },
                },
              },
            }}
          />
        </div>
      )}
    </Card>
  );
}

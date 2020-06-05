import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import Skeleton from 'react-loading-skeleton';
import Card from '../card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChartUsage } from '../../store/modules/usage/actions';

export default function CardStatusRate() {
  const statusRate = useSelector((state) => state.usage.successRate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChartUsage());
  }, [dispatch]);
  return (
    <Card className="card-dark-mint card-status">
      <div className="card-status-body ">
        <h5 className="uppercase">SUCCESS RATE</h5>
        {statusRate != null ? (
          <h3>
            <CountUp
              start={0}
              decimals={2}
              decimal=","
              end={statusRate}
              duration={2.5}
            />
            %
          </h3>
        ) : (
          <Skeleton />
        )}
      </div>
    </Card>
  );
}

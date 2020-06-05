import React from 'react';
import Card from '../../card/Card';
import CountUp from 'react-countup';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';

export default function CardInfoSaldoStatusRate() {
  const statusRate = useSelector((state) => state.usage.successRate);

  return (
    <Card className="card-dark-mint card-status box-none">
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

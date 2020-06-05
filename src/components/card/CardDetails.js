import React from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const CardDetails = ({ active, title, data, arrow, percent }) => {
  return (
    <div data-test="cardDetails" className={'details ' + active}>
      <div className="detail-desc">
        <p data-test="cardDetails" className="detail-font">
          {title}
        </p>
      </div>
      <div className="detail-money">
        <p data-test="cardDetails" className="detail-font">
          Rp
          <CountUp start={0} end={Number(data)} duration={2.5} separator="." />
        </p>
      </div>
      <div className="detail-percent">
        <p data-test="cardDetails" className={'detail-font percent_' + arrow}>
          <CountUp
            start={0}
            end={Number(percent)}
            duration={2.5}
            separator="."
          />
        </p>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  active: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.number.isRequired,
  arrow: PropTypes.string,
  percent: PropTypes.string,
};

CardDetails.defaultProps = {
  data: 0,
};

export default CardDetails;

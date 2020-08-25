import React from 'react';
import moment from 'moment';

const Hand = ({ className, angle }) => (
  <div className={className} style={{ transform: `rotate(${angle}deg)` }}></div>
);

export default (props) => {
  const time = moment(props.time).format('hh:mm:ss');
  const [hour, min, sec] = time.split(':');
  const secAngle = sec * 6;
  const minAngle = min * 6 + sec / 10;
  const hourAngle = hour * 30 + min / 2 + sec / 120;

  return (
    <div className="hands">
      <Hand className="sec" angle={secAngle} />
      <Hand className="min" angle={minAngle} />
      <Hand className="hour" angle={hourAngle} />
    </div>
  );
};

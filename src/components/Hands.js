import React from 'react';
import moment from 'moment';

const findAngle = (currentValue, rateOfRotation) => {
  return currentValue * rateOfRotation;
};

export default (props) => {
  const time = moment(props.time).format('hh:mm:ss');
  const [hour, min, sec] = time.split(':');
  const sAngle = sec * 6;
  const mAngle = min * 6 + sec / 10;
  const hAngle = hour * 30 + min / 2 + sec / 120;

  return (
    <div className="hands">
      <div className="sec" style={{ transform: `rotate(${sAngle}deg)` }}></div>
      <div className="min" style={{ transform: `rotate(${mAngle}deg)` }}></div>
      <div className="hour" style={{ transform: `rotate(${hAngle}deg)` }}></div>
    </div>
  );
};

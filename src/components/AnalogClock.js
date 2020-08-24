import React from 'react';

export default () => {
  const ticks = new Array(60).fill('').map((item, index) => (
    <div
      key={index}
      className="tick"
      style={{ transform: `rotate(${(index + 1) * 6}deg)` }}
    >
      {item}
    </div>
  ));
  return <div className="circle">{ticks}</div>;
};

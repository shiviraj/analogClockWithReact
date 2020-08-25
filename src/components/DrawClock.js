import React from 'react';

const Tick = (props) => {
  const style = { transform: `rotate(${props.index * 6}deg)` };
  return <div className="tick" style={style}></div>;
};

export default () => {
  const ticks = [];

  for (let index = 1; index <= 60; index++) {
    ticks.push(<Tick key={index} index={index} />);
  }

  return <div className="circle">{ticks}</div>;
};

import React from 'react';

const ColorBox = ({ color }) => (
  <div 
    style={{
      backgroundColor: color,
      width: '100px',
      height: '100px',
      display: 'inline-block',
      margin: '10px'
    }}
  />
);

export default ColorBox;
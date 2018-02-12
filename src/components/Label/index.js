import React from 'react';

type Props = {
  value: string,
  onClick: Function
}

export const style = () => ({
  position: 'relative',
  width: 'max-content',
  float: 'left',
  left: '20px',
  bottom: '2px'
});


const Label = ({ value, onClick }: Props) => (
  <div
    style={style()}
    onClick={onClick}
  >
    {value}
  </div>
);

export default Label;

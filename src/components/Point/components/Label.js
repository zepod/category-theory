import React from 'react';

type Props = {
  value: string,
  onMouseEnter: Function,
  onClick: Function
}

const style = () => ({
  position: 'relative',
  width: 'max-content',
  float: 'left',
  left: '20px',
  bottom: '2px'
});


const Label = ({ value, onMouseEnter, onClick }: Props) => (
  <div
    style={style()}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
  >
    {value}
  </div>
);

export default Label;

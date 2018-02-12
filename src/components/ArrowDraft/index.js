import React from 'react';
import { drawArrow } from '../../utils/canvas';
import type { Position } from '../../types';
import { pointSize } from '../Point';

const style = () => ({
  position: 'absolute',
});

type Props = {
  point: Position,
  client: Position,
}

// const calculateStartAndSize = ({ pointX, pointY }, { clientX, clientY }) => ({
//   height: Math.abs(pointY - clientY),
//   width: Math.abs(pointX - clientX),
//   startX: Math.min(pointX, clientX),
//   startY: Math.min(pointY, clientY)
// });

class ArrowDraft extends React.Component<Props> {
  componentWillReceiveProps({
    point,
    client: [x, y],
  }) {
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.beginPath();
      ctx.lineWidth = 2;
      drawArrow(
        ctx,
        point.map(coord => coord + (pointSize / 2)),
        [x - (pointSize / 4), y - (pointSize / 2)]
      );
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }

  render() {
    return (
      <canvas
        style={style()}
        width={`${window.innerWidth}px`}
        height={`${window.innerHeight}px`}
        ref={(ref) => { this.canvas = ref; }}
      />
    );
  }
}

export default ArrowDraft;

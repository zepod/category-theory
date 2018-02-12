/* @flow */
import React from 'react';
import type { Position } from '../../types';
import LabelInput from '../LabelInput';
import Label from '../Label';
import { drawArrow } from '../../utils/canvas';
import { pointSize } from '../Point';

const addMargin = coord => coord + (pointSize / 2);

type Props = {
  arrowStart: Position,
  arrowEnd: Position,
  removeArrow: Function
}

type State = {
  label: string,
  edittingLabel: boolean
}

const style = () => ({
  // pointerEvents: 'none',
  position: 'absolute'
});

class Arrow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      label: '',
      edittingLabel: false,
    };
  }
  componentWillReceiveProps({
    arrowStart,
    arrowEnd
  }: Props) {
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.beginPath();
      ctx.lineWidth = 2;
      drawArrow(
        ctx,
        arrowStart.map(addMargin),
        arrowEnd.map(addMargin),
      );
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }

  canvas = null

  render() {
    const { label, edittingLabel } = this.state;
    const { removeArrow } = this.props;
    return (
      <div>
        <canvas
          style={style()}
          ref={(ref) => { this.canvas = ref; }}
          width={window.innerWidth}
          height={window.innerHeight}
        />
        {(edittingLabel || !label) ? (
          <LabelInput
            value={label}
            remove={removeArrow}
            stopEditing={() => this.setState({ edittingLabel: false })}
            startEditing={() => this.setState({ edittingLabel: true })}
            onChange={value => this.setState({ label: value })}
          />
        ) : (
          <Label
            value={label}
            onClick={() => this.setState({ edittingLabel: true })}
          />
        )}
      </div>
    );
  }
}

export default Arrow;

/* @flow */
import React from 'react';
import LabelInput from '../LabelInput';
import Label from '../Label';
import type { Position } from '../../types';
import Component from '../../utils/Component';

type Props = {
  position: Position,
  startDrawingArrow: Function,
  endDrawingArrow: Function,
  removePoint: Function
}

type State = {
  label: string,
  edittingLabel: boolean
}

export const pointSize = 15;

const styles = ({ position: [x, y] }) => ({
  top: y,
  left: x,
  position: 'absolute',
  backgroundColor: 'black',
  borderRadius: '50px',
  width: pointSize,
  height: pointSize,
});

class Point extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      label: '',
      edittingLabel: false
    };
  }

  render() {
    const { label, edittingLabel } = this.state;
    const {
      position,
      removePoint,
      startDrawingArrow,
      endDrawingArrow
    } = this.props;

    return (
      <div
        style={styles({ position })}
        onMouseDown={() => startDrawingArrow(position)}
        onMouseUp={() => endDrawingArrow(position)}
      >
        {(edittingLabel || !label) ? (
          <LabelInput
            value={label}
            remove={removePoint}
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

export default Point;

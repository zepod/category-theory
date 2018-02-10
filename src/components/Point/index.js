import React from 'react';
import Description from './components/Description';
import Label from './components/Label';
import type { Position } from '../../types';

type Props = {
  position: Position,
  remove: Function
}

const styles = ({ position: [x, y] }) => ({
  top: y,
  left: x,
  position: 'absolute',
  backgroundColor: 'black',
  borderRadius: '50px',
  width: '15px',
  height: '15px',
});

class Point extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      showDescription: true,
    };
  }

  render() {
    const { label, showDescription } = this.state;
    const { position, remove } = this.props;
    return (
      <div
        style={styles({ position })}
      >
        {(!showDescription) && (
          <Label
            value={label}
            onMouseEnter={() => this.setState({ showDescription: true })}
          />
        )}
        {showDescription && (
          <Description
            label={label}
            remove={remove}
            hide={() => this.setState({ showDescription: false })}
            onChange={changes => this.setState({ ...changes })}
          />
        )}
      </div>
    );
  }
}

export default Point;

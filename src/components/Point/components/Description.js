import React from 'react';
import LabelInput from './LabelInput';
import Label from './Label';

type Props = {
  label: string,
  remove: Function,
  hide: Function,
  onChange: Props
}

export const width = '150px';

const style = () => ({
  Description: {
    left: '25px',
    bottom: '4px',
    position: 'relative',
    padding: '10px',
    width,
    backgroundColor: '#EBECE4'
  },
});

class Description extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      edittingLabel: false
    };
  }

  debounce = callback => (...args) => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => callback(...args), 2000);
  }

  render() {
    const {
      label,
      remove,
      hide,
      onChange
    } = this.props;
    const { edittingLabel } = this.state;

    const styles = style();

    return (
      <div
        onMouseLeave={label ? this.debounce(hide) : remove}
        style={styles.Description}
      >
        {(edittingLabel || !label) ? (
          <LabelInput
            value={label}
            stopEditing={() => this.setState({ edittingLabel: false })}
            startEditing={() => this.setState({ edittingLabel: true })}
            onChange={onChange}
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

export default Description;

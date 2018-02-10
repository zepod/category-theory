/* @flow */
import React from 'react';
import { isEnter } from '../../../utils/keyboard';
import { width } from './Description';

type Props = {
  value: string,
   startEditing: Function,
   stopEditing: Function,
   onChange: Function
}

const style = () => ({
  width
});

class LabelInput extends React.Component<Props> {
  componentDidMount() {
    this.props.startEditing();
  }
  render() {
    const {
      value,
      stopEditing,
      onChange,
    } = this.props;

    return (
      <input
        value={value}
        onKeyDown={isEnter(stopEditing)}
        ref={ref => ref && ref.focus()}
        style={style()}
        onChange={({ target: { value: label } }) => onChange({ label })}
      />
    );
  }
}

export default LabelInput;

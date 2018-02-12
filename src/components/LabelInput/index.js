/* @flow */
import React from 'react';
import { isEnter } from '../../utils/keyboard';
import { style as labelStyle } from '../Label';

const style = () => ({
  ...labelStyle(),
});

type Props = {
  value: string,
   startEditing: Function,
   stopEditing: Function,
   onChange: Function,
   remove: Function
}


class LabelInput extends React.Component<Props> {
  componentDidMount =
    this.props.startEditing

  stopEditing = () => {
    const { value, stopEditing, remove } = this.props;
    return value
      ? stopEditing()
      : remove();
  }

  render() {
    const {
      value,
      onChange,
    } = this.props;

    return (
      <input
        value={value}
        onKeyDown={isEnter(this.stopEditing)}
        ref={ref => ref && ref.focus()}
        onBlur={this.stopEditing}
        style={style()}
        onChange={({ target: { value: label } }) => onChange(label)}
      />
    );
  }
}

export default LabelInput;

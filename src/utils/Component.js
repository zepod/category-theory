import React from 'react';

export default class Component extends React.Component {
  debounce = callback => (...args) => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => callback(...args), 2000);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const isEnter = callback => ({ which, keyCode }) =>
  (which === 13 || keyCode === 13) &&
    callback();

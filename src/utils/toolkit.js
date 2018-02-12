export const invoke = fn => fn();

export const seq = (...fns) => () => fns.map(invoke);

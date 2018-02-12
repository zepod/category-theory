// eslint-disable-next-line import/prefer-default-export
export const drawArrow = (context, [fromx, fromy], [tox, toy]) => {
  const headlen = 10; // length of head in pixels
  const angle = Math.atan2(toy - fromy, tox - fromx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(
    tox - (headlen * Math.cos(angle - (Math.PI / 6))),
    toy - (headlen * Math.sin(angle - (Math.PI / 6)))
  );
  context.moveTo(tox, toy);
  context.lineTo(
    tox - (headlen * Math.cos(angle + (Math.PI / 6))),
    toy - (headlen * Math.sin(angle + (Math.PI / 6)))
  );
};

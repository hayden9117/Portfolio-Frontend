export const getPosition = (el, target) => {
  // Get the top, left coordinates of two elements
  const eleRect = el.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  // Calculate the top and left positions
  const top = eleRect.top - targetRect.top;
  const left = eleRect.left - targetRect.left;

  //   var _x = 0;
  //   var _y = 0;
  //   while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
  //     _x += el.offsetLeft - el.scrollLeft;
  //     _y += el.offsetTop - el.scrollTop;
  //     el = el.offsetParent;
  //   }
  return { top: top, left: left };
};

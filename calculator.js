'use strict';

/**
 * To calc string like '(1 + 3) * 2' returns 8
 * strip anything other than digits, (), -+/* and .
 * @param {string} inputExpression
 * @return {number}
 */
const calculator = (inputExpression) => {
  let expression = inputExpression.replace(/[^-()\d/*+.]/g, '');
  if (expression === '') expression = 0;
  return new Function('return ' + expression)();
};

module.exports = { calculator };

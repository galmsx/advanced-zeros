module.exports = function getZerosCount(number, base) {
  var res = [];
  let factor;
  let count;
  for (let i = 2; i <= base || base > 1; i++)
    if (base % i == 0) {
      base /= i;
      pow = 1;
      while (base % i == 0) {
        base /= i;
        pow++;
      }
      count = 0;
      factor = number;
      while (factor > 0) {
        factor = Math.floor(factor / i);
        count += factor;
      }
      res.push(Math.floor(count / pow));
    }
  return Math.min(...res);
};

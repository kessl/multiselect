export default function minBy (arr, fn) {
  return arr.reduce(function (best, next) {
    const pair = [fn(next), next]
    if (!best) {
       return pair
    } else if (Math.min(best[0], pair[0]) == best[0]) {
       return best
    } else {
       return pair
    }
  }, null)[1]
}

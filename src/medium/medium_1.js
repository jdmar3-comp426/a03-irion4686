import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let sortable = [...array];
    sortable.sort(function(a, b) {
        return a - b;
      });
    if (sortable.length % 2 === 0) {
        let sum = sortable[(sortable.length / 2) - 1] + sortable[sortable.length / 2];
        return sum / 2;
    }
    return sortable[Math.floor(sortable.length / 2)];
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    const min = Math.min(...array);
    const median = getMedian(array);
    const max = Math.max(...array);
    const sum = getSum(array);
    const mean = sum / array.length;
    const variances = variance(array, mean);
    const length = array.length;
    const standard_deviation = Math.sqrt(variances);
    return { length, sum, mean, median , min, max, 'variance':variances, standard_deviation };
}


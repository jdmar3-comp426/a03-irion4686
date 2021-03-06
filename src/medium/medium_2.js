import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
 const returnAvgMPG = () => {
    let city = mpg_data.map(car => car.city_mpg);
    let highway = mpg_data.map(car => car.highway_mpg);
    return { city: getStatistics(city).mean, highway: getStatistics(highway).mean }
}
export const allCarStats = {
    avgMpg: returnAvgMPG(),
    allYearStats: getStatistics(mpg_data.map(car => car.year)),
    ratioHybrids: getStatistics(mpg_data.filter(car => car.hybrid === true)).length / getStatistics(mpg_data).length,
};



/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
const getHybridsByMake = () => {
    let byMake = mpg_data.reduce((newArray, obj) => {
        let key = obj['make'];
        if (!newArray[key]) {
            newArray[key] = [];
        }
        newArray[key].push(obj);
        return newArray;
    }, {});
    let filteredArray = [];
    Object.entries(byMake).forEach(([make, cars]) => {
        cars = cars.filter(car => car.hybrid === true);
        cars = cars.map(car => car.id)
        if (cars.length !== 0) {
            filteredArray.push({make, cars});
        }
    })
    filteredArray.sort((a, b) => {
        return b.cars.length - a.cars.length;
    })
    return filteredArray;
}

const getMPGbyYear = () => {
    let byMake = mpg_data.reduce((newArray, obj) => {
        let key = obj['year'];
        if (!newArray[key]) {
            newArray[key] = [];
        }
        newArray[key].push(obj);
        return newArray;
    }, {});
    let filteredArray = [];
    Object.entries(byMake).forEach(([make, cars]) => {
        let hybrids = [];
        let nonHybrids = [];
        cars.forEach(car => {
            if (car.hybrid === true) hybrids.push(car);
            else nonHybrids.push(car);
        });
        let city = hybrids.map(car => car.city_mpg);
        let highway = hybrids.map(car => car.highway_mpg);
        let hybrid = { city: getStatistics(city).mean, highway: getStatistics(highway).mean }
        city = nonHybrids.map(car => car.city_mpg);
        highway = nonHybrids.map(car => car.highway_mpg);
        let notHybrid = { city: getStatistics(city).mean, highway: getStatistics(highway).mean }
        byMake[make] = { hybrid, notHybrid }
    })

    // filteredArray.sort((a, b) => {
    //     return b.cars.length - a.cars.length;
    // })
    return byMake;
}
export const moreStats = {
    makerHybrids: getHybridsByMake(),
    avgMpgByYearAndHybrid: getMPGbyYear(),
};

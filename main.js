import { sumToString, getIncreasingArray, maxAndMin, countArray } from "./src/mild/mild_1.js";
import { identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys} from "./src/mild/mild_2.js";
import { getMedian, getStatistics, getSum } from "./src/medium/medium_1.js";
import { allCarStats, moreStats } from "./src/medium/medium_2.js";
import { searchHighPower } from "./src/medium/medium_3.js";
import mpg_data from "./src/medium/data/mpg_data.js";

const testSumToString = () => {
    console.debug("2 + 2: " + sumToString(2,2))
    console.debug("2 + 3: " + sumToString(2,3))
    console.debug("3 + 4: " + sumToString(3,4))
}

const testGetIncreasingArray = () => {
    console.debug("3 to 7: " + getIncreasingArray(3,7))
    console.debug("0 to 4: " + getIncreasingArray(0,4));
    console.debug("-1 to 3: " + getIncreasingArray(-1,3));
}


const testMaxAndMin = () => {
    console.debug("[1,2,3,4,5]: = " + JSON.stringify(maxAndMin([1,2,3,4,5])))
    console.debug("[-11,2,33,4,5]: = " + JSON.stringify(maxAndMin([-11,2,33,4,5])))
    console.debug("[3,2,2,4,5]: = " + JSON.stringify(maxAndMin([3,2,2,4,5])))
}

const testCountArray = () => {
    console.debug(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]))
}

const testIdentifyVariable = () => {
    console.log(identifyVariable(true))
    console.log(identifyVariable(3))
    console.log(identifyVariable("true"))
}

const testIdentifyArray = () => {
    console.log(identifyArray(['some', 3, [3, 4], false]));
}

const testRemoveKey = () => {
    let obj = {
        name: 'Mr. Boss',
        title: 'boss',
        age: 33,
        password: 'pass123'
    };
    
    console.log(removeKey(obj, 'password'));
}

const testNonDestructiveRemoveKey = () => {
    let obj = {
        name: 'Mr. Boss',
        title: 'boss',
        age: 33,
        password: 'pass123'
    };
    console.log(removeKeyNonDestructive(obj, 'password'));
    console.log(obj);
}

const testRemoveKeys = () => {
    let obj = {
        name: 'Mr. Boss',
        title: 'boss',
        age: 33,
        password: 'pass123'
     };
    console.log(removeKeys(obj, ['password', 'age']));
}

const testGetSum = () => {
    console.log(getSum([1,2,3]));
}

const testGetMedian = () => {
    console.log(getMedian([3,2,5,6,2,7,4,2,7,5]));
}

const testGetStats = () => {
    console.log(getStatistics([3,2,4,5,5,5,2,6,7]));
}

const testCarStats = () => {
    console.log(allCarStats.avgMpg);
    console.log(allCarStats.allYearStats);
    console.log(allCarStats.ratioHybrids);
}

const testMoreStats = () => {
    console.log(moreStats.makerHybrids);
    console.log(moreStats.avgMpgByYearAndHybrid);
}

const testSearchHorsePower = () => {
    console.log(searchHighPower(mpg_data, 300, 300));
}

//testSumToString()
//testGetIncreasingArray()
//testMaxAndMin()
//testCountArray()
//testIdentifyVariable()
//testIdentifyArray();
//testRemoveKey();
//testNonDestructiveRemoveKey();
//testRemoveKeys()
//testGetSum();
//testGetMedian();
//testGetStats();
//testCarStats();
//testMoreStats();
testSearchHorsePower();
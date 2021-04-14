'use strict'

// const sum = (a, b) => a + b;
// const getRandomNumber = () => {
//     Math.floor(Math.random() * 10)
// }

// const logerDecorator = function (func, userName, funcName) {
//     let counter = 0;
//     return function () {
//         counter++
//         let result = func.call(null, ...arguments)
//         let userData = `${userName} called ${funcName} ${counter} times whith ${result}`
//         globalLog.push(userData)
//         return result
//     }
// };

// const sumForNick = logerDecorator(sum, 'Nick', 'sum')
// const sumForMike = logerDecorator(sum, 'Mike', 'sum')
// const getRandomForNick = logerDecorator(getRandomNumber, 'Nick', 'random')
// const getRandomForMike = logerDecorator(getRandomNumber, 'Mike', 'random')

// let globalLog = [];


// sumForMike(1, 2)
// sumForMike(10, 30)
// sumForMike(10, 30)

// getRandomForNick()

// getRandomForMike()
// sumForNick(2, 7)
// sumForNick(9, 34)
// sumForNick(9, 34)
// sumForNick(9, 34)
// console.log(getRandomForNick())

// console.log(getRandomForMike())


// console.log(globalLog)

//почему undefined??????????????????????



//==================================================================



const hardFunction = function (value) {

    return value * 2;
};


const cacheDecorator = (func) => {
    let cache = [];
    return function (x) {
        const valueInCache = cache.find(item => item.arg === x)
        if (valueInCache) {
            console.log('from cache')
            return valueInCache.result
        } else {
            console.log('new value')
            const result = func.call(null, x)
            const res = {
                arg: x,
                result
            }
            cache.push(res)
            console.log(cache)

            return func.call(null, x)
        }

    }
};


const hardFunctionWhithCache = cacheDecorator(hardFunction)
const newHardFunctionWhithCache = cacheDecorator(hardFunction)


console.log(hardFunctionWhithCache(100))
console.log(hardFunctionWhithCache(100))
// console.log(hardFunctionWhithCache(33))
// console.log(hardFunctionWhithCache(22))
// console.log(newHardFunctionWhithCache(12))
// console.log(newHardFunctionWhithCache(11))
// console.log(newHardFunctionWhithCache(10))
// console.log(newHardFunctionWhithCache(1))
// console.log(hardFunctionWhithCache(12))


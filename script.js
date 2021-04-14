'use strict'

const sum = (a, b) => a + b;
const getRandomNumber = () => {
    Math.floor(Math.random() * 10)
}

const logerDecorator = function (func, userName, funcName) {
    let counter = 0;
    return function () {
        counter++
        let result = func.call(null, ...arguments)
        let userData = `${userName} called ${funcName} ${counter} times whith ${result}`
        globalLog.push(userData)
        return result
    }
};

const sumForNick = logerDecorator(sum, 'Nick', 'sum')
const sumForMike = logerDecorator(sum, 'Mike', 'sum')
const getRandomForNick = logerDecorator(getRandomNumber, 'Nick', 'random')
const getRandomForMike = logerDecorator(getRandomNumber, 'Mike', 'random')

let globalLog = [];


sumForMike(1, 2)
sumForMike(10, 30)
sumForMike(10, 30)

getRandomForNick()

getRandomForMike()
sumForNick(2, 7)
sumForNick(9, 34)
sumForNick(9, 34)
sumForNick(9, 34)
console.log(getRandomForNick())

console.log(getRandomForMike())


console.log(globalLog)

//почему undefined??????????????????????



//==================================================================



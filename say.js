function say(x) {
    if (x%15 === 0) {
        return 'Fizz Buzz'
    } else if (x%5 === 0) {
        return 'Buzz'
    } else if (x%3 === 0) {
        return 'Fizz'
    } else {
        return x
    }
  }
  module.exports = say;
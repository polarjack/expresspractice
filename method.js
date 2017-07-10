var methods = module.exports = {}



methods.updateServer = function() {
  console.log('important function')
}

methods.eatCookie = function() {
  console.log('chocolate cookie')
}

methods.node = function() {
  console.log('node js')
}

methods.sumNumbers = (a, b) => {
  return a+b;
}

var output = 12345

// exports.output = output
module.exports.data = methods

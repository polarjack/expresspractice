var fs = require('fs')

console.log('before file reading')

var data = fs.writeFileSync('./files/file2', 'fucking god',  'utf8');
console.log(data)

console.log('after file reading')

var fs = require('fs');
fileName = process.argv[2];
var line = fs.readFileSync(fileName, 'utf8');
console.log(line.toString().split('\n').length - 1);

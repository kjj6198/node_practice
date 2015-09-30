var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, function(error, data){
  if(!error) {
  	console.log(data.toString().split('\n').length - 1);
  }else {
  	console.log(error.message);
  }
})
var fs = require('fs');
var path = require('path');

function visitDir(dir) {
  fs.readdir(dir, function(err, list){
  	
  	  list.forEach(function(filename){
  	  	console.log(filename);
  	  })
  	
  });
}

visitDir(process.argv[2]);
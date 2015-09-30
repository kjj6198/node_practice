var fs = require('fs');
var path = require('path');

function readDir(filePath,fileName){
  
  var filtered = [];
  
  fileName = '.' + fileName;
  fs.readdir(filePath, function(error, list){
    if(error) {
      console.log(error.message);
    }
    filtered = list.filter(function(item){
      return path.extname(item) === fileName;
    });
    filtered.forEach(function(item){
      console.log(item);
    })
  });
}

readDir(process.argv[2],process.argv[3]);

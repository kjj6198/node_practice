var fs = require('fs');
var path = require('path');

module.exports = function(filePath, fileName, callback) {
  var fileList = [];
  fs.readdir(filePath, function(error, list){
    if(error) {
      console.log("you're wrong");
      return callback(error);
    }
    
    fileList = list;
    console.log(fileList);
  });
  console.log(fileList);
  callback(null, fileList, filePath);  
}
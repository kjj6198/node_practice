//before

function addProcess(argv) {
  var length = argv.length - 2;
  var sum = 0;
  process.argv.reduce(function(prevNumber, nextNumber, index) {
  	prevNumber = parseInt(prevNumber);
  	nextNumber = parseInt(nextNumber);
  	if(index >= 2){
		return prevNumber + nextNumber;  		
  	}else {
  		return 0;
  	}

  }, 0);
 
}

var sum = addProcess(process.argv);
console.log(sum);

//after

var sum = process.arg.reduce(function(prevNumber, nextNumber, index)){
  prevNumber = parseInt(prevNumber);
  nextNumber = parseInt(nextNumber);

  if( index >= 2 ){
  	return prevNumber + nextNumber;
  }else {
  	return 0;
  }
}

console.log(sum);
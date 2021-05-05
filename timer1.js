const arrArgs = process.argv.slice(2);
console.log('arrArgs', arrArgs);

const timer = function(array) {
  for (let i = 0; i < array.length; i++) {
    //check if the item is a number through isNan and check that it's not a negative number
    if ( (!isNaN(array[i])) && array[i] > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, array[i] * 1000);

    }

  }
};

timer(arrArgs);
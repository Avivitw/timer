const arrArgs = process.argv.slice(2);
console.log('arrArgs', arrArgs);

const timer = function(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, array[i] * 1000);
  }
};

timer(arrArgs);
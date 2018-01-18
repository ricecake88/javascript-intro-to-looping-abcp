function forLoop(myArray) {
  myArray = [];
  for (var i = 0 + myArray.length; i < 25; i++)
  {
    myArray.push(`I am ${i+1} strange loop${i === 0+myArray.length ? '':'s'}.`);
  }
  return myArray;
}

function whileLoop(number) {
  while(number > 0) {
    console.log(number--);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(myArray) {
  do {
    myArray.pop();
  } while (maybeTrue() && (myArray.length > 0));
  
  return myArray;
}


function forLoop(myArray) {
  for (var i = 0; i < 25; i++)
  {
    myArray[i] = `"I am ${i+1} strange loop${i === 0 ? '':'s'}."`;
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
  console.log(maybeTrue());
  do {
    myArray.pop();
  } while (maybeTrue() && (myArray.length > 0));
  
  console.log("In doWhileLoop " + myArray);
  return myArray;
}


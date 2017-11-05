function forLoop(arr)
{
  for (var i = 0; i < arr.length; i++) {
    arr[i] = "I am ${i} strange loop${i === 0 ? '' : 's'}."
  }
  return arr;
}

function whileLoop(n)
{
  while (n != 0) {
    console.log(n--);
  }
  return "done";
}

function doWhileLoop(arr)
{
  do{
    arr.length--;
  }while (maybeTrue() || arr.length == 0);
}

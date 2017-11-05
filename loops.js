function forLoop(arr)
{
  for (var i = arr.length; i < 25 ; i++) {
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
    arr.length -= 1;
  }while (true || arr.length == 0);
  return arr;
}

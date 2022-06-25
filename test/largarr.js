function largestOfFour(arr) {
    let flag=0,temp=0;
    for(let i in arr)
      for(let j in arr[i])
        if(temp<arr[i][j])
        {
          flag=i;
          temp=arr[i][j];
        }
  
    return arr[flag];
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
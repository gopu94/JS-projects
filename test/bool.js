function bouncer(arr) {
    for (let i in arr)
    if(Boolean(!arr[i]))
     arr.splice(i,1);
     console.log(arr);
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);
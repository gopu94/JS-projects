function sumAll(arr) {
    if(arr[0]<arr[1])
     for (let i=arr[0]+1;i<arr[1];i++)
       arr.push(i);
      else  
        for (let i=arr[1]+1;i>arr[1];i++)
         arr.push(i);
  console.log(arr);
    return arr.reduce((sum,a)=>(a+sum));
  }
  
  sumAll([1, 4]);
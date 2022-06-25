const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
for(let i=0;i<s.length;i++)
 {
    let x=s[i];
    s[i]=s[s.length-i-1];
   s[s.length-i-1]=x; 
 }
}
editInPlace();
console.log(s);
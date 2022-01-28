const input=prompt("Enter Your Name: ");
console.log("Hello"+" "+input);
function printTable(num)
{
    for(let i=0;i<=10;i++)
{
  console.log(num+"*"+i+"="+num*i);
}
}
const num=prompt("Please Enter a Number: ");
printTable(num);
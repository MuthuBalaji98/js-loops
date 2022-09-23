// for loop

for(let i = 0; i <5;i++){
    i=i+2;
    console.log(i);
}

// while loop
var x=5;
while(x<10){
    console.log("x is greater than 10");
    break;
}

// do while
var y=2;
do{
    y=y+3;
    console.log(y);
}while(y<10);

// armstrong number
var num=prompt("enter the armstrong number:");
var l=num.length;
let temp=0,a=0,b=num;
while(num>0){
    temp=num%10;
    a=a+temp**l;
    num=Math.floor(num/10);    
}
if(a==b){
    console.log("The number is armstrong number");
}
else{
    console.log("The number is not armstrong number");
}


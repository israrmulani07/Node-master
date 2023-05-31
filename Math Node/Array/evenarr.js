const arr=[7,5,2,8,4,3,1,6,5];
const even=[];

arr.forEach((item) =>item % 2 ==0 && even.push(item));
console.log(even);
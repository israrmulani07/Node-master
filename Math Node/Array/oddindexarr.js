const arr=[1,2,3,4,5,6,7,8,9,10];
const oddIndex=[];

arr.forEach((item, index)=>index%2===1 && oddIndex.push(item));
console.log(oddIndex);
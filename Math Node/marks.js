// const getMemo=(subs,max)=> (subs.reduce((acc,curr)=> acc+curr)/(max*subs.length))*100;
// const result= getMemo([70,85,55,65,70],100);
// console.log(result);


// const getMemo=(subs,max)=> (subs.reduce((acc,curr)=> acc+curr)/(max*subs.length))*100;
// const result= getMemo([55,45,75,35],100);
// console.log(result);

const getMemo=(subs,max)=> (subs.reduce((acc,curr)=> acc+curr)/(max*subs.length))*100;
const result= getMemo([15,17,20,19],20);
console.log(result);
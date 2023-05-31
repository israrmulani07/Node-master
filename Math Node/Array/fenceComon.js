const fenceLength=(nums)=> nums.reduce((acc,curr)=>acc+curr);

// console.log(fenceLength([30,50,40,60,10]));

const Len= fenceLength([100,80,70,50,80,250,50,100,100]);

const numlayer =3;

const rate=2.5;

const totalcost=Len*numlayer*rate;
console.log(totalcost);
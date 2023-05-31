const str = "I am Proud to be an Indian"

const newstr= str.split(" ").map(item=>item.split("").reverse().join("")).join(" ");

console.log(newstr);


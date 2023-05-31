//add number with array
const nums=[11,5,7,17,]
//output should be [14,8,10,20]

const newnums=nums.map(item=>item+3);
 console.log(newnums)




 //Add colon and length

 const str="My Name is Amjad"
 //op-["My:2","Name:4","is:2","Amjad:5"]

 const newstr=str.split(" ").map(item=>item+":"+item.length)
  
 console.log(newstr);


 
 //Name with Program 

 const friends="Israr sohel abrar kapil"
//op-["Mr.Israr,"Mr.Sohel","Mr.abrar","Mr.Kapil"]

const newfrnd=friends.split(" ").map(item=>"Mr."+item)
console.log(newfrnd);



//find name which length is 5
const name=["israr","sohelljd","abrar","kapujiii"]
//op-israr,abrar
const newname=name.filter(item=>item.length===5)
console.log(newname)



//find name which have 'hel' in name
const name1=["israr","sohel","abrar","kapujiii"]
//op-'sohel'
const newname1=name1.filter(item=>item.includes("hel"))
console.log(newname1)

// //slice and splice methods in array
// const anivesh = new Array(0,1,2,3,4,5,6)
// const myn1 = anivesh.slice(0,2)
// console.log(myn1);
// console.log(anivesh);
// const myn2 = anivesh.splice(0,2)
// console.log(anivesh);

// console.log(myn2);
// console.log(anivesh);


//some diffrent ways to add two arrays
//1.)
// const colours = [1,2,3,4]
// const hello = ["hello","teri maa ke chut"]
// colours.push(hello)
// console.log(colours[4][1]);
//2.)
// const members = ["anivesh","arya","sangeeta"]
// const head = ["rajesh"]
// const family = members.concat(head)
// console.log(family);
//3.) 
const members = ["anivesh","arya","sangeeta"]
const head = ["rajesh"]
const family = [...members,...head]
console.log(family[3]);







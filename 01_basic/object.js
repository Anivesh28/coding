// // // //In this file we will lear how to use objects 
// // // // Creation of objects
// // // const Aniuser = {
// // //     name : "anivesh",
// // //     age : 21,
// // //     "full name" : "Anivesh soni",
// // //     gender : "male"
// // // }




// // // // then a question arrise how to declare a symbo data type in object and print it
// const mysym = Symbol("mykey")
// const myo = {
//     name : "Anivesh",
//     age : 21 , 
//     gender : "male",
//     [mysym] : "mykey1"
// }
// console.log(myo[mysym]);
// //and now if you think about the problem statement 
// console.log(myo);
//it will show the mysym as [Symbol(mykey)]: 'mykey1'






// this is the correct syntax of this problem 


// //This is the way to edit the deatils under the object 
// const Aniuser = {
//     name : "anivesh",
//     age : 21,
//     "full name" : "Anivesh soni",
//     gender : "male"
// }
// Aniuser.gender ="female"
// console.log(Aniuser["gender"]);

// //and if you want to make the object unchangable you can freeze it like this
// Object.freeze(Aniuser)
// //Now of you change anything in the object it will not affect the object details




//now the last thing is creation of a function and accecsin that function in java script

const Ani ={
    name:"Anivesh",
    surname:"Soni",
    age: 21
}
Ani.hello = function(){
    console.log("Hello madarchod"); // creation of function
    
}
console.log(Ani.hello()); //Accesing the function 

//NOw this process can be done using string interpolation
Ani.hello2 = function(){
    console.log(`Hello madarchod, ${this.name}`); // ` this is used for string interpolation with the help of ${} in which this means to acces the object that is used....
}
console.log(Ani.hello2());
// Highrt Order Function.

// callBack
// When a function call function

 let isEven = (num) =>{
    return  num % 2==0;
 }

 let value =[2,4,6,10].every(isEven)
 console.log(value);


// // mini program

const square = (n)=>{
     return n**2;
 }

 const cube = (square, n)=>{     // here square is passed as argument
   return square(n) * n;
 }
 console.log(cube(square,3));


// // Set timeout.

function hof(){
    console.log("welcome to hof");
}

setTimeout(hof , 3000)


// set Interval

// setInterval(()=>{
//     console.log("helo");
// },2000)


// // For each
// let arr =["namaster","ok" ,"jj","kk"]
let arr=[1,2,3,4,5,6]
let fe=arr.forEach((val)=>console.log(val +val))
console.log(fe);

// // map 
let arr2=[1,2,3,4,7]
let fe2=arr2.forEach((value)=>{
    return value * value
})
console.log(fe2);


// // filter 

let country =["Nepal" , "japan","korea","england","NeitheerLand","swizerland","island"]

let store = country.filter((coun)=> coun.includes("land"))


    
console.log(store);



// map 
let arr1=[1,2,3,4,7]
let m=arr1.map((valu)=>{
    return valu * valu
})
console.log(m);



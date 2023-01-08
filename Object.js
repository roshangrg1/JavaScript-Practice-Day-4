// 
let userDetails = {
    firstName: "Roshan",
    lastName: "Guragain",
    role: "admin",
    loginCount: "10"
}
console.log( userDetails.loginCount );
userDetails.loginCount= "200"
console.table( userDetails);


// mini program

let user= {
    firstName: "Roshan",
    lastName: "Guragain",
    role: "admin",
    loginCount: "10",
    productList:[],
    buyProduct:function(coursename){
        this.productList.push(coursename)
    },
    productCount: function(){
        return `${this.productList.length}`
    }
}



user.buyProduct("javascript")
user.buyProduct("java")
console.log(user.productCount());
console.log(user);

// key
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty('firstName'));

// using for in loop in object
for (let x in user){
    // console.log(x);
    console.log(user[x]);
}


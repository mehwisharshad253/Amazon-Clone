// let a=()=>{
//     return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve(456);
//     },4000)
// })};

// (async ()=>{
// let b=await a();
// console.log(b);
// let c=await a();
// console.log(c);
// let d=await a();
// console.log(d);
// })()

// let ans=(function(){
//     let privateval=12;
    
//     return {
//         getter: function(){
//             console.log(privateval)
//         },
//         setter: function(val){
//          privateval=val;
//         }
//     }
// })()


// let arr=[1,2,3,4,5,6,7];
// let [a,b,c,...abs]=arr;
// console.log(a,b,c,abs)

// let {name,age}={name:"mehwish",age:23};
// console.log(name,age)

let arr=[1,2,3];
let obj={...arr};
console.log(obj)


// function sum(val1,val2,val3){
//     return val1 + val2 +val3;
// }

// console.log(sum(...arr))

// let obj1={
//    name:"mehwish",
//    age:23,
//    department:"BSCS"
// }

// console.log({...obj1,name:"sehar"})


// console.log(this)

// function abcd(){
//     console.log(this)
// }

// abcd();


// let obj1={
//     name:"mehwish",
//     func: function(){
//         console.log(this)
//     }
// }
// console.log(obj1.func())


function abcd(val,val2,val3){
    console.log(this, val,val2,val3);
}

let obj1={age:23};

abcd.apply(obj,[1,2,3])



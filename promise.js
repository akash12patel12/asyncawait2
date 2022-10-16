console.log("person1 : shows ticket");
console.log("person 2 : show tickets");

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("tickit");
  }, 3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log('W: I have tickets ');
    console.log('H:go in');
    console.log('W:hungry');
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve(`${t} popcorn`)
       },2000)
    })
});


console.log("person4 : shows ticket");
console.log("person5 : show tickets");
const getButter = getPopcorn.then((t)=>{
    console.log('H: I have popcorn Lets go now');
    console.log('W : Need butter');
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
})
const getColdDrink = getButter.then((t)=>{
  console.log('H: I have colddrink Lets go now');
    console.log('W : lets go');
    return new Promise((resolve,reject)=>{
      resolve(`${t} coldrink`);
    })
})

getButter.then((t)=>console.log(t))
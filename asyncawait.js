console.log("person1 : shows ticket");
console.log("person 2 : show tickets");

const preMovie = async () =>{
    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('ticket'),3000});
    });

    let ticket = await promiseWifeBringingTicks;
    console.log('W: I have tickets ');
    console.log('H:go in');
    console.log('W:hungry');
    let popcorn = await getPopcorn;
    console.log('H: I have popcorn Lets go now');
    console.log('W : Need butter');
    let butter = getButter;

    return ticket;
};
const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));
preMovie().then((m)=> console.log(m+ " person 3 ins"));
const getButter = new Promise((resolve,reject)=> resolve('Butter'));

console.log("person4 : shows ticket");
console.log("person5 : show tickets");
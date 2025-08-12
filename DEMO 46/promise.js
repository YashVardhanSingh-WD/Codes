console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was suppporting you")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done")
            resolve("Yash")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was suppporting you2")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done2")
            resolve("Yash2")
        }, 1000);
    }
})

let p3 = Promise.any([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
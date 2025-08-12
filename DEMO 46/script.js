console.log("Yash Is A Hacker")
console.log("Ash Is A Hecker")

setTimeout(() => {
    console.log("I am inside settimeout1")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout2")
}, 0);

console.log("The End")

const fn = (params) => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()

}


const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Yash", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

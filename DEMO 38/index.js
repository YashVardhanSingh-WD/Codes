function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is good to!");

}
nice("Yash");

nice("Rohit");

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c;
}

result1 = sum(10, 2);
result2 = sum(11, 21);
result3 = sum(12, 22);
result4 = sum(13, 20);
result5 = sum(14, 24, 1);

console.log("The sum of these numbers is:", result1)
console.log("The sum of these numbers is:", result2)
console.log("The sum of these numbers is:", result3)
console.log("The sum of these numbers is:", result4)
console.log("The sum of these numbers is:", result5)


const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(34)
func1(66)
func1(84)
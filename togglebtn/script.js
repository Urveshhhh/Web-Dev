/*let name = prompt("enter name");
let length = name.length
let finalName = ` Final name is: @${name}${length} `;
console.log(finalName);*/
/*let string = "Urvesh";
for(val of string){
    console.log("value is", val);
} */

/*function add(num1, num2){
    let ans = num1 + num2;
    return ans; 
}

console.log(` function called and addition is ${add(36, 4)}`); */

/*const add = (a, b) => {
    return a + b;  
}

console.log(`${add(678,7848)}`); */

/*let word = prompt("enter word here");
//let count = 0; 
function countVowels(word){
    for (let vov of word){
        let count = 0;
        if(vov == "a" || vov == "o" || vov== "u" || vov =="e" || vov == "i"){
        count++;
        }
        console.log(count);
   }
} */

/*let marks = [82, 94, 96, 88, 90, 23, 88, 99, 100];
const finalMarks = marks.filter((mark) =>{
    return mark >= 90;
})
console.log(`students marks are  >= 90 are ${finalMarks}`); */

let modebtn = document.querySelector("#mode");
let currMode = "light";

modebtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";

    }else {
        document.querySelector("body").style.backgroundColor = "white";
        currMode = "light";
    }
    console.log(currMode);
})




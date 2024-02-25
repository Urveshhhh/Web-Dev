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




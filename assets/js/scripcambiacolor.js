const cdr = document.getElementById("key");

const addDiv = function(color){
    let newDiv = document.createElement("div");
    newDiv.style.width = "200px"
    newDiv.style.height = "200px"
    newDiv.style.backgroundColor = color
    newDiv.style.border = "5px solid red"
    document.body.appendChild(newDiv);  
}
   
document.addEventListener("keydown", function (event) { 
    if (event.key === "a") {
    key.style.backgroundColor = "#FC00FC"
} else if (event.key === "s") { 
    key.style.backgroundColor = "#FC5C00"
} else if (event.key === "d") { 
    key.style.backgroundColor = "#00A4FC"
} else if (event.key === "q") { 
    addDiv("#08FC00")
} else if (event.key === "w") { 
    addDiv("#A4FC00")
} else if (event.key === "e") { 
    addDiv("#4D1E1E")
}})

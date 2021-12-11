const body = document.querySelector("body");
const newBox = document.createElement("div");
body.appendChild(newBox);
newBox.className("newBox");

for(let i = 0; i < 10; i++){
    const newBox1 = document.createElement("div");
    div.className = "newBox1"
    newBox.appendChild.add(newBox1);
}

const divs = document.querySelectorAll(".newBox1");
const colors = ["blue", "red", "green", "orange", "pink", "yellow"];

newBox1.forEach(div=> {
    const randomNum = Math.floor(Math.random() * 6)
    div.style.backgroundColor = colors[randomNum]
    div.innerText = colors[randomNum]
})

const newBox = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(newBox);
newBox.classList

for(let i = 0; i < 10; i++){
    const newBox1 = document.createElement('div');
    box.className = "newBox1"
    body.appendChild(box)
}

const divs = document.querySelectorAll(".newBox1");
const colors = ["blue", "red", "green", "orange", "pink", "yellow"];

divs.forEach(div=> {
    const randomColor = Math.floor(Math.random() * 8)
    div.style.backgroundColor = colors[randomNum]
    div.innerText = colors[randomNum]
})

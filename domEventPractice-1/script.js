
console.log("hello World!!");

const selectButton = document.querySelector('.newRow');
const inputBox = document.querySelector('.inputBox');
// const newMent = document.createElement('div');
// newMent.innerText = inputBox.value;
// inputBox.appendChild(newRow1);

selectButton.addEventListener('click', (e) => {
    const newMent = document.createElement('div');
    newMent.innerText = inputBox.value;
    document.body.appendChild(newMent);
    // if(e.target.innerText === 'click'){
    // }
    console.log(inputBox.value)
})

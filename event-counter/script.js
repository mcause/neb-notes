const body = document.querySelector("body");
body.setAttribute('style', 'background-color: burlywood');

const newMent = document.createElement('h1');
body.appendChild(newMent);
newMent.innerText = 'Hello I am the child of body';
newMent.setAttribute('style', 'background-color : cyan')
newMent.setAttribute.border = '4px double black';
newMent.innerText = '0'

const buttonMore = document.createElement('button');
body.appendChild(buttonMore);
buttonMore.innerText = 'Increment';
buttonMore.setAttribute('class', 'boxButton');

const buttonLess = document.createElement('button');
body.appendChild(buttonLess);
buttonLess.innerText = 'Decrement';
buttonLess.setAttribute('class', 'boxButton')

buttonMore.addEventListener('click', () => {
    newMent.innerText ++;
    // newMent.innerText = parseInt(newMent.innerText) +1;
})

buttonLess.addEventListener('click', () => {
    newMent.innerText --;
    // newMent.innerText = parseInt(newMent.innerText) -1;
})

const deleteBut = document.createElement('button');
body.appendChild(deleteBut);
deleteBut.innerText = 'delete';
deleteBut.setAttribute('class', 'boxButton')

deleteBut.addEventListener('click', () => {
    newMent.innerText = '0' 
})

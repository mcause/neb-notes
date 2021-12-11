const body = document.querySelector("body");

const newMent = document.createElement('h1');
body.appendChild(newMent);
newMent.innerText = 'Hello I am the child of body';

const buttonMore = document.createElement('button');
buttonMore.addEventListener('click', () => {
    buttonMore = document.querySelector('.newMent').value;
    buttonMore.innerText = 'Increment';
    body.append(buttonMore);
})

const buttonLess = document.createElement('button');
buttonMore.addEventListener('click', () => {
    buttonLess = document.querySelector('.newMent').value;
    buttonLess.innerText = 'Decrement';
    body.append(buttonLess);
})
const createId = document.querySelector('.createId');
createId.addEventListener('click', () => {
    const first = document.querySelector('.firstName').value;
    const last = document.querySelector('.lastName').value;
    const city = document.querySelector('.city').value;
    const state = document.querySelector('.state').value;
    const profession = document.querySelector('.profession').value;


    const idBox = document.createElement('div');

    const firstNameLine = document.createElement('p');
    const lastNameLine = document.createElement('p');
    const cityLine = document.createElement('p');
    const stateLine = document.createElement('p');
    const proLine = document.createElement('p');

    idBox.className = 'idCard';

    firstNameLine.innerText = first;
    lastNameLine.innerText = last;
    cityLine.innerText =city;
    stateLine.innerText =state;
    proLine.innerText =profession;

    idBox.appendChild(firstNameLine);
    idBox.appendChild(lastNameLine);
    idBox.appendChild(cityLine);
    idBox.appendChild(stateLine);
    idBox.appendChild(proLine);

    document.body.appendChild(idBox);

})












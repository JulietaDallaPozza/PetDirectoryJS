// const main = document.querySelector('main');


// for loop to accsess each pet informatio thru html 

let html = '';

for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
    
    `;

}
// para agregar o llamar al main del html en js
document.querySelector('main').insertAdjacentHTML('beforeend', html);


// Get the elements to display the date
const year = document.querySelector('#current-year');

// Get the current date
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;


const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', (event) => {
    event.preventDefault();
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
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


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: "1984, October, 19-24",
        area: 44207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-67233.jpg"
    },
    {
        templeName: "Perth Australia",
        location: "Yokine, Western Australia",
        dedicated: "2001, May, 20",
        area: 20630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/perth-australia-temple/perth-australia-temple-34994.jpg"
    },
    {
        templeName: "Edmonton Alberta",
        location: "Edmonton, Alberta",
        dedicated: "1999, December, 11-12",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/edmonton-alberta-temple/edmonton-alberta-temple-51155-main.jpg"
    },
    {
        templeName: "Meridian Idaho",
        location: "Meridian, Idaho",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-65841-main.jpg"
    },
    {
        templeName: "Freiberg Germany",
        location: "Freiberg, Germany",
        dedicated: "1985, June, 29-30",
        area: 21500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-16459-main.jpg"
    },
];



function displayTemples(templesList) {
    const grid = document.querySelector(".temple-grid");
    grid.innerHTML = "";

    templesList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span>Location: </span>${temple.location}</p>
            <p><span>Dedicated: </span>${temple.dedicated}</p>
            <p><span>Area: </span>${temple.area} sq ft </p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} loading="lazy">
        `;

        grid.appendChild(card);
    });
}


displayTemples(temples);


document.querySelector("#home").addEventListener("click", (e) => {
    displayTemples(temples);
});

// old temples
document.querySelector("#old").addEventListener("click", (e) => {
    const oldTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900);

    displayTemples(oldTemples);

});

// new temples
document.querySelector("#new").addEventListener("click", (e) => {
    const newTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0]) > 2000);

    displayTemples(newTemples);

});

// large temples
document.querySelector("#large").addEventListener("click", (e) => {
    const largeTemples = temples.filter(temple => temple.area > 90000);

    displayTemples(largeTemples);
});

// smaill temples
document.querySelector("#small").addEventListener("click", (e) => {
    const smallTemples = temples.filter(temple => temple.area < 10000);

    displayTemples(smallTemples);
});


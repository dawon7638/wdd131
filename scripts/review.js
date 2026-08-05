// Get the elements to display the date
const year = document.querySelector('#current-year');

// Get the current date
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;



// Get current review count
let reviews = Number(localStorage.getItem("reviewCount")) || 0;

// Add one
reviews++;

// Save it
localStorage.setItem("reviewCount", reviews);

// Display it
document.querySelector("#reviewCount").textContent = reviews;
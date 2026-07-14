console.log("JS IS WORKING");



const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => { 

    const matcha = document.getElementById("matchaType").value;

    document.getElementById("locatorMessage").textContent =
    `Opening Google Maps to find ${matcha} near you...`;

    searchBtn.textContent = "Opening...";

    const url = `https://www.google.com/maps/search/${encodeURIComponent(matcha + " near me")}`;

    window.open(url, "_blank");

    setTimeout(() => { 
        searchBtn.textContent = "Find Nearby";
    }, 1500);
        
});

// quiz 
const quizBtn = document.getElementById("quizBtn");

if (quizBtn) { quizBtn.addEventListener("click", () => {

    const mood = document.querySelector('input[name="mood"]:checked');
    const flavor = document.querySelector('input[name="flavor"]:checked');
    const temperature = document.querySelector('input[name="temperature"]:checked');
    const caffeine = document.querySelector('input[name="caffeine"]:checked');
    const activity = document.querySelector('input[name="activity"]:checked');

    if (!mood || !flavor || !temperature || !caffeine || !activity) {
        alert("Please answer every question!");
        return;
    }

    let tea = 0;
    let latte = 0;
    let cake = 0;
    let iceCream = 0;

    switch (mood.value) {
        case "energy":
            tea += 2;
            break;
        case "relax":
            iceCream += 2;
            break;
        case "dessert":
            cake += 2;
            break;
        case "refreshing":
            latte += 2;
            break;
    }

    switch (flavor.value) {
        case "sweet":
            cake++;
            latte++;
            break;
        case "earthy":
            tea += 2;
            break;
        case "creamy":
            latte++;
            iceCream++;
            break;
        case "fresh":
            tea++;
            latte++;
            break;
    }

    switch (temperature.value) {
        case "hot":
            tea++;
            latte++;
            break;
        case "iced":
            latte++;
            iceCream++;
            break;
    }

    switch (caffeine.value) {
        case "high":
            tea += 2;
            break;
        case "medium":
            latte += 2;
            break;
        case "low":
            cake++;
            iceCream++;
            break;
    }

    switch (activity.value) {
        case "study":
            tea++;
            latte += 2;
            break;
        case "reading":
            tea++;
            break;
        case "friends":
            latte++;
            iceCream++;
            break;
        case "dessert":
            cake += 2;
            break;
    }

    let recommendation = "";
    let description = "";

    const highest = Math.max(tea, latte, cake, iceCream);

    if (highest === tea) {
        recommendation = "Matcha Green Tea";
        description = "You enjoy classic, earthy flavors with an energizing boost.";
    } else if (highest === latte) {
        recommendation = "Matcha Latte";
        description = "You love smooth, creamy drinks that are perfect for any time of day.";
    } else if (highest === cake) {
        recommendation = "Matcha Cake";
        description = "You have a sweet tooth and enjoy rich matcha desserts.";
    } else {
        recommendation = "Matcha Ice Cream";
        description = "You prefer refreshing treats that are cool and creamy.";
    }

    document.getElementById("quizResult").innerHTML = `
        <h3>Your Perfect Match</h3>
        <h2>${recommendation}</h2>
        <p>${description}</p>
    `;
});

// new section for menu 

const track = document.querySelector(".carousel-track");
const card = document.querySelectorAll(".carousel-track .card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const dots = document.querySelectorAll(".dot");

let index = 0;
const cardWidth = 380;

function updateCarousel() { 
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => { 
    index++;

    if (index >= card.length) { 
        index= 0;
    }

    updateCarousel();

});

prevBtn.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = card.length -1;
    }

    updateCarousel();

})

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
 }


const menuItems = document.querySelectorAll(".card");

menuItems.forEach(item => {
    item.addEventListener("click", function() {
        alert(`You selected: ${this.querySelector("h3").textContent}`);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});
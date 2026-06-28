console.log("JS IS WORKING");

const quizBtn = document.getElementById("quizBtn");

quizBtn.addEventListener("click", () => {

    const mood = document.querySelector('input[name="mood"]:checked');

    if (!mood) {
        alert("Please choose an option!");
        return;
    }

    let recommendation = "";

    switch (mood.value) {

        case "energy":
            recommendation = "Matcha Green Tea";
            break;

        case "relax":
            recommendation = "Matcha Ice Cream";
            break;

        case "dessert":
            recommendation = "Matcha Cake";
            break;

        case "refreshing":
            recommendation = "Matcha Latte";
            break;
    }

    document.getElementById("quizResult").innerHTML = `
        <h3>Your Matcha Match:</h3>
        <p>${recommendation}</p>
    `;

});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


const menuItems = document.querySelectorAll('.card');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        alert(`You selected: ${this.querySelector('h3').textContent}`);
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
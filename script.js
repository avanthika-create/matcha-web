console.log("JS IS WORKING");

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById('shopBtn').addEventListener('click', function() {
    alert("Shop for matcha now!");
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
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
       const target = document.querySelector(this.getAttribute('href'));
       target.scrollIntoView({ behavior: "smooth"}); 
    }); 
});

document.getElementById('shopBtn').addEventListener('click', function() {
    alert("Shop Now!");
});

const menuItems = document.querySelectorAll('.card');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        alert(`You selected: ${this.querySelector('h3').textContent}`);
    });});
document.addEventListener('DOMContentLoaded', () => {
    // Visitor Counter Logic
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount = parseInt(visitorCount) + 1;
    localStorage.setItem('visitorCount', visitorCount);
    const counterElement = document.getElementById('visitor-count');
    counterElement.textContent = visitorCount;
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 500);

    // Animation au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Charger le thème sauvegardé au démarrage
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
});

// Curseur personnalisé
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Effet hover sur les liens
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Animation fluide au scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
});

// Menu hamburger mobile
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Ajouter un gestionnaire tactile
document.querySelector('.hamburger').addEventListener('touchend', (e) => {
    e.preventDefault();
    toggleMenu();
});

// Fonction pour basculer entre les thèmes clair et sombre
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}
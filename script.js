// Animation au défilement
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
      behavior: 'smooth'
    });
  });
});

// Menu hamburger mobile
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);

// Affichage du menu hamburger au survol du côté gauche de l'écran
document.addEventListener('mousemove', (e) => {
  const hamburger = document.querySelector('.hamburger-menu');
  hamburger.style.opacity = e.clientX < 50 ? "1" : "0";
});


// Fonction pour basculer entre les thèmes clair et sombre
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  
  // Basculer le thème
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);

  // Sauvegarder le choix de l'utilisateur
  localStorage.setItem("theme", newTheme);
}

// Charger le thème sauvegardé au démarrage
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
});

// Menu hamburger mobile
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}
// script.js
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier le thème stocké dans localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}




// loading

window.addEventListener('load', () => {
  setTimeout(() => {
      document.querySelector('.loading-screen').remove();
      document.body.style.overflow = 'visible';
  }, 5000);
});



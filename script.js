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

/// Modifiez la partie du menu hamburger mobile
document.addEventListener('mousemove', (e) => {
  // Désactiver sur mobile
  if (window.innerWidth > 768) { 
    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.style.opacity = e.clientX < 50 ? "1" : "0";
  }
});

// Ajouter un gestionnaire tactile
document.querySelector('.hamburger-menu').addEventListener('touchend', (e) => {
  e.preventDefault();
  toggleMenu();
});


// Remplacer le scrollIntoView par
document.querySelector(this.getAttribute('href')).scrollIntoView({
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest'
});









    document.getElementById("downloadCV").addEventListener("click", function(event) {
        event.preventDefault();  // Empêche l'action par défaut du lien <a>

        // Demander à l'utilisateur de saisir son email
        let userEmail = prompt("Entrez votre email pour télécharger le CV :");

        if (userEmail) {
            // Récupérer la localisation de l'utilisateur
            fetch("https://ipapi.co/json/")
                .then(response => response.json())
                .then(data => {
                    // Préparer les données à envoyer par email, y compris l'email de l'utilisateur
                    let templateParams = {
                        ip: data.ip,
                        city: data.city,
                        country: data.country_name,
                        m: userEmail  // Ajouter l'email de l'utilisateur
                    };

                    // Initialiser EmailJS avec ton User ID
                    emailjs.init("_hD0TAbEqT7m52nAt");

                    // Envoyer l'email
                    emailjs.send("service_bm92a3c", "template_kubyz0b", templateParams)
                        .then(response => {
                            console.log("Email envoyé avec succès !", response.status, response.text);

                            // Après l'envoi de l'email, lancer le téléchargement du CV
                            window.location.href = "medzain_CV.pdf";  // Déclencher le téléchargement du CV
                        }, error => {
                            console.error("Erreur lors de l'envoi de l'email :", error);
                        });
                })
                .catch(error => console.error("Erreur lors de la récupération de la localisation :", error));
        } else {
            alert("L'email est requis pour télécharger le CV.");
        }
    });
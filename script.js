// Funkcja do animacji przewijania do sekcji
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Usuwamy "#" z id
        const targetElement = document.getElementById(targetId);

        // Przewijanie do sekcji
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Mniejszy offset by pasował pod nagłówkiem
            behavior: 'smooth'
        });
    });
});

// Animacja tła w sekcji home
const homeSection = document.getElementById('home');
let homeBackgroundPosition = 0;

function animateBackground() {
    homeBackgroundPosition += 0.2;
    homeSection.style.backgroundPosition = `center ${homeBackgroundPosition}%`;
    requestAnimationFrame(animateBackground); // Kontynuuj animację
}

// Uruchamiamy animację tła
animateBackground();

// Animacja hover dla projektów w portfolio
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});

// Dodanie animacji wejścia do sekcji przy przewijaniu (z klasą .in-view)
const sections = document.querySelectorAll('.section');

const checkSectionInView = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('in-view');
        }
    });
};

// Dodanie klasy .in-view do sekcji w momencie, gdy wejdą do widoku
window.addEventListener('scroll', checkSectionInView);

// Początkowe wywołanie, aby sprawdzić widoczność przy ładowaniu strony
checkSectionInView();

// Skrypt do podświetlania aktywnej zakładki w menu
const links = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
    }
});


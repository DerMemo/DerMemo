document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about-me');

    // Abrufen der aktuellen Stilinformationen des aboutSection-Elements
    const style = getComputedStyle(aboutSection);

    aboutSection.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#345';
    });

    aboutSection.addEventListener('mouseleave', function() {
        // Zugriff auf die CSS-Variable über getComputedStyle
        this.style.backgroundColor = style.getPropertyValue('--secondary-color');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const programmingLanguagesSection = document.getElementById('programming-languages');
    let isAnimated = false; // Kontrolliert, ob die Animation schon ausgeführt wurde

    programmingLanguagesSection.addEventListener('mouseenter', () => {
        if (!isAnimated) {
            const languageCards = programmingLanguagesSection.querySelectorAll('.language-card');
            languageCards.forEach((card, index) => {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
                card.style.animation = `fadeInUp 2s ease-in-out ${index * 100}ms forwards`;
            });
            isAnimated = true; // Setzt, dass die Animation ausgeführt wurde
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Verhindert das Standard-Verhalten des Browsers
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_pqpla5h","template_5l55q0u","#contact-form","q9Smf-G0-jmGFPcRn")
    .then(() => {
        contactMessage.textContent = 'Message sent successfully!'

        setTimeout(() =>{
            contactMessage.textContent = ""
        }, 5000)

        contactForm.reset()
    })
    .catch(error => {
        contactMessage.textContent = 'Failed to send message';
        console.error('EmailJS error:', error);
        setTimeout(() => {
            contactMessage.textContent = "";
        }, 5000);
    });
}

contactForm.addEventListener('submit' , sendEmail)
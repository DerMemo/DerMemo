document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.style.display =
      menu.style.display === "none" || menu.style.display === ""
        ? "flex"
        : "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about-me");

  // Abrufen der aktuellen Stilinformationen des aboutSection-Elements
  const style = getComputedStyle(aboutSection);

  aboutSection.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#345";
  });

  aboutSection.addEventListener("mouseleave", function () {
    // Zugriff auf die CSS-Variable über getComputedStyle
    this.style.backgroundColor = style.getPropertyValue("--secondary-color");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const programmingLanguagesSection = document.getElementById(
    "programming-languages"
  );
  let isAnimated = false; // Kontrolliert, ob die Animation schon ausgeführt wurde

  programmingLanguagesSection.addEventListener("mouseenter", () => {
    if (!isAnimated) {
      const languageCards =
        programmingLanguagesSection.querySelectorAll(".language-card");
      languageCards.forEach((card, index) => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
        card.style.animation = `fadeInUp 2s ease-in-out ${
          index * 100
        }ms forwards`;
      });
      isAnimated = true; // Setzt, dass die Animation ausgeführt wurde
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Browsers
    let target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_pqpla5h",
      "template_5l55q0u",
      "#contact-form",
      "q9Smf-G0-jmGFPcRn"
    )
    .then(() => {
      contactMessage.textContent = "Message sent successfully!";

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      contactForm.reset();
    })
    .catch((error) => {
      contactMessage.textContent = "Failed to send message";
      console.error("EmailJS error:", error);
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    });
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded");

  // Mock data to simulate API response
  const mockData = [
    {
      name: "DerMemo",
      description: "Portfolio",
      html_url: "https://github.com/DerMemo",
      languages_url: "mock_url_DerMemo",
    },
    {
      name: "Snake",
      description: "Snake Game",
      html_url: "https://github.com/DerMemo/Snake",
      languages_url: "mock_url_Snake",
    },
    {
      name: "TabuGame",
      description: "Tabu Game",
      html_url: "https://github.com/DerMemo/TabuGame",
      languages_url: "mock_url_TabuGame",
    },
  ];

  const mockLanguages = {
    mock_url_DerMemo: { CSS: 10081, HTML: 8783, JavaScript: 4360 },
    mock_url_Snake: { CSS: 3275, HTML: 1422, JavaScript: 7837 },
    mock_url_TabuGame: { CSS: 1589, HTML: 2385, JavaScript: 7042 },
  };

  const projectsGrid = document.getElementById("projects-grid");
  mockData.forEach((repo) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || "Keine Beschreibung verfügbar"}</p>
      <a href="${repo.html_url}" target="_blank">Mehr sehen</a>
      <div class="tooltip">
        <span class="tooltiptext">
          <ul id="languages-${repo.name}"></ul>
        </span>
        &#x1F6C8; <!-- Info icon -->
      </div>
    `;
    projectsGrid.appendChild(projectCard);

    // Fetch languages from mock data
    const languages = mockLanguages[repo.languages_url];
    const languageList = document.getElementById(`languages-${repo.name}`);
    languageList.innerHTML = ""; // Clear previous content if any
    if (languages && Object.keys(languages).length > 0) {
      Object.keys(languages).forEach((lang) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${lang}: ${languages[lang]}`;
        languageList.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = "No languages available";
      languageList.appendChild(listItem);
    }
  });
});

contactForm.addEventListener("submit", sendEmail);

const siteConfig = {
  trialBookingUrl: "#",
  packages: [
    {
      title: "Basis",
      meta: "2x pro Woche · Live per Zoom",
      description: "Ein ruhiger Einstieg für Lesen, Aussprache, Wortschatz und regelmäßige Wiederholung.",
      paymentUrl: "#",
    },
    {
      title: "Aufbau",
      meta: "3x pro Woche · empfohlen",
      description: "Der ausgewogene Lernrhythmus für spürbaren Fortschritt in Sprache und Anwendung.",
      paymentUrl: "#",
      featured: true,
    },
    {
      title: "Intensiv",
      meta: "4x pro Woche · klare Monatsziele",
      description: "Für Lernende, die schneller vorankommen und mehr aktive Praxis im Unterricht wollen.",
      paymentUrl: "#",
    },
    {
      title: "Individuell",
      meta: "1:1, Kinder, Tajweed oder Fortbildung",
      description: "Ein persönliches Modell für spezielle Ziele, Familien, Kinder oder fortgeschrittene Themen.",
      paymentUrl: "#",
    },
  ],
};

const navToggle = document.querySelector(".nav-toggle");
const navEl = document.querySelector("nav");

if (navToggle && navEl) {
  navToggle.addEventListener("click", () => {
    const isOpen = navEl.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
  });

  navEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navEl.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Menü öffnen");
    });
  });
}

const packageGrid = document.querySelector("#package-grid");
const trialLink = document.querySelector("#trial-link");

if (trialLink) {
  trialLink.href = siteConfig.trialBookingUrl;
}

if (packageGrid) {
  packageGrid.innerHTML = siteConfig.packages
    .map(
      (item) => `
        <article class="package-card${item.featured ? " featured" : ""}">
          <div>
            <span class="package-meta">${item.meta}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <a class="button ${item.featured ? "secondary" : "primary"}" href="${item.paymentUrl}">
            Nach Probestunde besprechen
          </a>
        </article>
      `,
    )
    .join("");
}

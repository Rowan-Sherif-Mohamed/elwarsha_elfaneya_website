// Load data into sections
document.getElementById("about-text").textContent = factoryData.about;
document.getElementById("mission-text").textContent = factoryData.mission;
document.getElementById("vision-text").textContent = factoryData.vision;

// Render products in alternating layout
const productList = document.getElementById("product-list");
factoryData.products.forEach((p, i) => {
    const product = document.createElement("div");
    product.classList.add("product-item");

    const isEven = i % 2 === 0;
    product.innerHTML = isEven
        ? `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-text">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>
    `
        : `
      <div class="product-text">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>
      <img src="${p.image}" alt="${p.name}">
    `;

    productList.appendChild(product);
});

// Scroll helper
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Update active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
});

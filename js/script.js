document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector('.hero');
  const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
  ];

  let current = 0;
  function changeHero() {
    current = (current + 1) % heroImages.length;
    hero.style.backgroundImage =
      `linear-gradient(rgba(30,30,47,0.6), rgba(30,30,47,0.6)), url('${heroImages[current]}')`;
  }

  // Set initial hero image
  hero.style.backgroundImage =
    `linear-gradient(rgba(30,30,47,0.6), rgba(30,30,47,0.6)), url('${heroImages[0]}')`;

  // Change hero image every 5 seconds
  setInterval(changeHero, 5000);

  // Toggle Gallery
  document.getElementById("galleryLink").addEventListener("click", (e) => {
    e.preventDefault();
    const gallery = document.getElementById("gallerySection");
    gallery.style.display =
      gallery.style.display === "none" || gallery.style.display === ""
        ? "block"
        : "none";

    if (gallery.style.display === "block") {
      setTimeout(() => {
        gallery.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  });
});

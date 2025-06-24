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

  // Initial hero image
  hero.style.backgroundImage =
    `linear-gradient(rgba(30,30,47,0.6), rgba(30,30,47,0.6)), url('${heroImages[0]}')`;

  setInterval(changeHero, 5000);

  // Gallery toggle
  document.getElementById("galleryLink").addEventListener("click", (e) => {
    e.preventDefault();
    const gallery = document.getElementById("gallerySection");
    if (gallery.style.display === "none" || gallery.style.display === "") {
      gallery.style.display = "block";
      setTimeout(() => {
        gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      gallery.style.display = "none";
    }
  });
});

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
    // No dark overlay, just clear images
    hero.style.backgroundImage = `url('${heroImages[current]}')`;
  }

  // Set initial hero image without overlay
  hero.style.backgroundImage = `url('${heroImages[0]}')`;

  // Change hero image every 5 seconds
  setInterval(changeHero, 5000);

  // Gallery toggle with smooth scroll
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

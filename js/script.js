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

  hero.style.backgroundImage =
    `linear-gradient(rgba(30,30,47,0.6), rgba(30,30,47,0.6)), url('${heroImages[0]}')`;

  setInterval(changeHero, 5000);

  // Toggle Gallery Section with smooth scroll
  document.getElementById("galleryLink").addEventListener("click", (e) => {
    e.preventDefault();  // prevent default anchor jump

    const gallery = document.getElementById("gallerySection");

    if (gallery.style.display === "none" || gallery.style.display === "") {
      // Show gallery
      gallery.style.display = "block";

      // Wait a tick for layout update, then scroll smoothly
      setTimeout(() => {
        gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      // Hide gallery
      gallery.style.display = "none";

      // Optional: scroll to top or header after hiding
      // document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

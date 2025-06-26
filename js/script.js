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
    hero.style.backgroundImage = `url('${heroImages[current]}')`;
  }

  hero.style.backgroundImage = `url('${heroImages[0]}')`;
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

  const cards = document.querySelectorAll('.service-cards .card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const isAlreadyOpen = card.querySelector('.service-detail').classList.contains('show');

      // Close all cards
      cards.forEach(c => {
        c.querySelector('.service-detail').classList.remove('show');
        c.classList.remove('bounce', 'glow');
        c.querySelector('.service-detail').textContent = '';
      });

      // If not already open, then open it
      if (!isAlreadyOpen) {
        const detail = card.querySelector('.service-detail');
        detail.textContent = card.getAttribute('data-message');
        detail.classList.add('show');
        card.classList.add('bounce', 'glow');

        setTimeout(() => {
          card.classList.remove('bounce');
        }, 500);
      }
    });
  });

  // Modal for gallery images
  const galleryImages = document.querySelectorAll('.gallery-grid img');

  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img src="" alt="Expanded Image" />
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

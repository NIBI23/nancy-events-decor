document.addEventListener("DOMContentLoaded", () => {
  // Particle class for burst effect
  class Particle {
    constructor(x, y, ctx) {
      this.x = x;
      this.y = y;
      this.ctx = ctx;
      this.size = Math.random() * 4 + 2;
      this.speedX = (Math.random() - 0.5) * 6;
      this.speedY = (Math.random() - 0.5) * 6;
      this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
      this.alpha = 1;
      this.life = 30;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= 0.03;
      this.life--;
    }
    draw() {
      this.ctx.save();
      this.ctx.globalAlpha = this.alpha;
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }
  }

  // Setup all cards
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Create a canvas inside each card for particles
    const canvas = document.createElement('canvas');
    canvas.classList.add('particle-canvas');
    card.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Resize canvas to card size
    function resize() {
      canvas.width = card.clientWidth;
      canvas.height = card.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let particles = [];
    let animationFrameId;

    // Animate particles
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      });
      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // When done, hide canvas
        canvas.style.display = 'none';
      }
    }

    // On card click
    card.addEventListener('click', () => {
      // Icon animation
      const icon = card.querySelector('i');
      icon.classList.add('animate');
      setTimeout(() => {
        icon.classList.remove('animate');
      }, 300);

      // Toggle message below card (service-detail)
      let detail = card.querySelector('.service-detail');
      if (!detail) {
        // Create detail if not exist
        detail = document.createElement('div');
        detail.classList.add('service-detail');
        detail.textContent = card.dataset.message || "Service details go here.";
        card.appendChild(detail);
      }
      if (detail.classList.contains('show')) {
        detail.classList.remove('show');
      } else {
        // Hide other open details first
        document.querySelectorAll('.service-detail.show').forEach(d => d.classList.remove('show'));
        detail.classList.add('show');
      }

      // Particle burst effect
      canvas.style.display = 'block';
      particles = [];
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      for (let i = 0; i < 30; i++) {
        particles.push(new Particle(centerX, centerY, ctx));
      }

      // Start animation loop
      cancelAnimationFrame(animationFrameId);
      animate();
    });
  });
});

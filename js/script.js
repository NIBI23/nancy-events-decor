document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const detail = card.querySelector('.service-detail');
    const msg = card.getAttribute('data-message');

    if (detail.classList.contains('show')) {
      detail.classList.remove('show');
      detail.textContent = '';
    } else {
      // Close all others
      document.querySelectorAll('.service-detail.show').forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
      });
      detail.textContent = msg;
      detail.classList.add('show');
    }
  });
});

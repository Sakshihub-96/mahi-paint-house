// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Product catalog filtering (products.html only)
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const buttons = filterBar.querySelectorAll('button');
    const cards = document.querySelectorAll('.product-card');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        cards.forEach(card => {
          const show = f === 'all' || card.dataset.category === f;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Contact form (front-end only demo)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('.form-note');
      note.textContent = "Thanks — this is a demo form, so nothing was actually sent, but that's how it would confirm.";
      note.classList.add('visible');
      form.reset();
    });
  }

  // Reveal-on-scroll for cards/sections
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }
});

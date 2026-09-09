document.getElementById('year').textContent = new Date().getFullYear();

const reveal = document.querySelectorAll('.principles article, .story-card, .timeline > div, .future-grid article, .olympic-number');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

reveal.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  observer.observe(el);
});

document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.links').classList.remove('open'));
});
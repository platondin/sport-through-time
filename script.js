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

// Each LEARN MORE button opens the extra information directly inside its card.
document.querySelectorAll('.learn-more').forEach(button => {
  button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const card = button.closest('.expand-card');
    const info = card?.querySelector('.more-info');
    if (!card || !info) return;

    const open = card.classList.toggle('open');
    card.classList.toggle('expanded', open);
    button.setAttribute('aria-expanded', String(open));
    const textNode = Array.from(button.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.textContent = open ? 'SHOW LESS ' : 'LEARN MORE ';
  });
});

document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.links').classList.remove('open'));
});
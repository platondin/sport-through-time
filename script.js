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

// Expandable information cards
const expandable = document.querySelectorAll('.principles article, .story-card, .timeline > div, .future-grid article, .olympic-number');
const extraInfo = {
  'MOVE': 'Movement is the physical foundation of sport. Running, jumping, throwing, balancing and changing direction are all ways athletes use movement to solve a challenge.',
  'SKILL': 'Skill grows through repetition, coaching and experience. The better the technique, the more efficiently an athlete can perform under pressure.',
  'RULES': 'Rules define what is allowed, how points are scored and how a winner is decided. Shared rules turn a simple activity into a fair competition.',
  'CHALLENGE': 'Sport creates a measurable challenge: beat an opponent, improve a time, reach a distance, score more points or simply beat your own previous result.',
  'WRESTLING': 'Ancient wrestling was practiced in many cultures. In Greece it became a major athletic discipline, and wrestling appeared in the first recorded ancient Olympic Games in 776 BC.',
  'NO FINAL ANSWER': 'There cannot be one permanent youngest sport. New sports continue to appear as technology, culture and entertainment change. Examples include esports, drone racing and new hybrid formats.',
  'Ancient games': 'Early competitions included running, wrestling, boxing, chariot racing and other events. The ancient Olympic Games were held at Olympia as part of a religious festival honoring Zeus.',
  '1800s–1900s': 'During the 19th and 20th centuries, schools, clubs and governing bodies helped standardize rules. This made sports easier to organize, teach and compete in across different places.',
  '21st century': 'Today sport can combine physical performance with software, sensors, virtual environments and new forms of broadcasting. The definition of sport keeps evolving.',
  'AR ARENAS': 'Augmented reality could place digital goals, opponents, obstacles or changing boundaries into real spaces while athletes still move physically in the arena.',
  'DRONE RACING': 'Pilots already race small drones through complex courses. Future competitions could add team strategy, dynamic tracks and autonomous flying systems.',
  'ROBOT GAMES': 'Robots could become competitors, teammates or training partners. Competitions might test human strategy against machines or combine both sides in one team.',
  'VIRTUAL SPORTS': 'Motion tracking can translate real body movement into a virtual world. Future sports may let players physically move while competing in environments that exist entirely in software.',
  '776': '776 BC is the traditional first recorded date of the ancient Olympic Games at Olympia. Historical evidence suggests athletic festivals existed around Greece even earlier.',
  '1896': 'The first modern Olympic Games were held in Athens in 1896 after the Olympic movement was revived. They marked the beginning of the modern international Olympic tradition.'
};

expandable.forEach((card) => {
  card.classList.add('expandable');
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  const label = document.createElement('span');
  label.className = 'expand-hint';
  label.textContent = 'CLICK TO EXPLORE +';
  card.appendChild(label);

  const target = card.querySelector('h3')?.textContent.trim() || card.querySelector('strong')?.textContent.trim() || card.querySelector('b')?.textContent.trim() || card.querySelector('small')?.textContent.trim() || '';
  const details = document.createElement('div');
  details.className = 'extra-info';
  details.innerHTML = `<p>${extraInfo[target] || 'Tap to discover more context, history and ideas behind this part of the story.'}</p>`;
  card.appendChild(details);

  const toggle = () => {
    const open = card.classList.toggle('expanded');
    card.setAttribute('aria-expanded', open ? 'true' : 'false');
    label.textContent = open ? 'CLICK TO CLOSE −' : 'CLICK TO EXPLORE +';
  };
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
});

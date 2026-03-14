// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Nav hide on scroll down, show on scroll up
let lastY = 0;
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.opacity = y > lastY && y > 100 ? '0' : '1';
  nav.style.pointerEvents = y > lastY && y > 100 ? 'none' : 'auto';
  nav.style.transition = 'opacity 0.3s';
  lastY = y;
});
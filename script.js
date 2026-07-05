/* =====================================================
   AI 마케팅 스쿨 — script.js
   ===================================================== */

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---- Hamburger menu ---- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ---- Curriculum: 탭 제거 후 전체 펼침 방식으로 변경 ---- */

/* ---- FAQ Accordion ---- */
document.querySelectorAll('.faq-q').forEach((q, idx) => {
  q.addEventListener('click', () => {
    const isOpen = q.classList.contains('open');
    document.querySelectorAll('.faq-q').forEach(x => x.classList.remove('open'));
    document.querySelectorAll('.faq-a').forEach(x => x.classList.remove('open'));
    if (!isOpen) {
      q.classList.add('open');
      q.nextElementSibling.classList.add('open');
    }
  });
});

/* ---- Scroll reveal animation ---- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ---- Countdown Timer (2026-07-01 오전 12시 마감) ---- */
const deadline = new Date('2026-07-01T00:00:00+09:00').getTime();
function updateCountdown() {
  const now = Date.now();
  const diff = deadline - now;
  if (diff <= 0) {
    document.getElementById('cdDays').textContent = '00';
    document.getElementById('cdHours').textContent = '00';
    document.getElementById('cdMins').textContent = '00';
    document.getElementById('cdSecs').textContent = '00';
    return;
  }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById('cdDays').textContent = String(d).padStart(2, '0');
  document.getElementById('cdHours').textContent = String(h).padStart(2, '0');
  document.getElementById('cdMins').textContent = String(m).padStart(2, '0');
  document.getElementById('cdSecs').textContent = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ---- Smooth anchor scroll (offset for fixed nav) ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

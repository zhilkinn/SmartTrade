const TELEGRAM_USERNAME = 'babolat111';

const contactMessages = {
  course: 'Здравствуйте! Интересует индивидуальное наставничество по трейдингу. [site_course]',
  robot: 'Здравствуйте! Интересуют торговые роботы Smart Trade. [site_robot]',
  lesson: 'Здравствуйте! Хочу получить бесплатный урок и чек-лист. [site_lesson]',
  diagnostics: 'Здравствуйте! Хочу записаться на бесплатную диагностику. [site_diagnostics]',
  event: 'Здравствуйте! Хочу узнать о ближайшем мероприятии Smart Trade. [site_event]'
};

for (const link of document.querySelectorAll('[data-intent]')) {
  const message = contactMessages[link.dataset.intent];
  if (message) link.href = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
}

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = isOpen;
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Открыть меню' : 'Закрыть меню');
});

mobileNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});

document.getElementById('year').textContent = new Date().getFullYear();

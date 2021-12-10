document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__menu').classList.toggle('is-active');
  });

  document.querySelector('.header__burger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger-active');
  });
})

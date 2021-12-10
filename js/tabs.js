document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabs__btn').forEach((tabsBtn) => {
    tabsBtn.addEventListener('click', (event) => {

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tab-content').forEach((tabContent) => {
         tabContent.classList.remove('tab-content-active');
      });

       document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });

  const list = document.querySelectorAll('.tabs__item');

  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
      let j = 0;
      while (j < list.length) {
        list[j++].className = 'tabs__item';
      }
      list[i].className = 'tabs__item tabs__item_active';
    }
  }
});

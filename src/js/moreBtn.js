const refs = {
  openMoreBtn: document.querySelector('.list__transaction'),
  closeMoreBtn: document.querySelector('.button__more--close'),
  menu: document.querySelector('.wrapper__more'),
};

console.log(refs.openMoreBtn);
console.log(refs.closeMoreBtn);
refs.openMoreBtn.addEventListener('click', toggleMenu);
refs.closeMoreBtn.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  if (e.target.nodeName != 'BUTTON') {
    return;
  }
  console.dir(e.target.nodeName);

  document.body.classList.toggle('modal-open');
  refs.menu.classList.toggle('is-hidden');
  refs.menu.classList.toggle('wrapper__more--active');
}

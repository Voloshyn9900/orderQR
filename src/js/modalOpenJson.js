const refs = {
  buttoToolsJsonOpen: document.querySelector('.button__tools--json'),
  buttoToolsJsonClose: document.querySelector('.button__put--close'),
  modalJson: document.querySelector('.modal__put--overley'),
};

refs.buttoToolsJsonOpen.addEventListener('click', openModal);
refs.buttoToolsJsonClose.addEventListener('click', closeModal);

function openModal() {
  document.body.classList.toggle('modal-open');
  refs.modalJson.classList.toggle('is-hidden');
}

function closeModal() {
  location.reload();
}

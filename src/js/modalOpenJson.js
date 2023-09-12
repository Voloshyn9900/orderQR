const refs = {
  buttoToolsJsonOpen: document.querySelector('.button__tools--json'),
  buttoToolsJsonClose: document.querySelector('.button__put--close'),
  modalJson: document.querySelector('.modal__put--overley'),
};
console.log(refs.buttoToolsJsonOpen);

refs.buttoToolsJsonOpen.addEventListener('click', toggleModal);
refs.buttoToolsJsonClose.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.modalJson.classList.toggle('is-hidden');
}

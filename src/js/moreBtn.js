import { fetchMyOrdersBiId } from './requestOrders';

const refs = {
  openMoreBtn: document.querySelector('.list__transaction'),
  closeMoreBtn: document.querySelector('.button__more--close'),
  detailedList: document.querySelector('.detailed__list'),
  menu: document.querySelector('.wrapper__more'),
};

refs.openMoreBtn.addEventListener('click', openMenu);
refs.closeMoreBtn.addEventListener('click', closeMenu);

function createMarkupDetilesOrder(Id) {}

async function fetchAndCheckTransactionType(Id) {
  try {
    const orderReceipt = await fetchMyOrdersBiId(Id);
    console.log(orderReceipt);

    const { receipt } = orderReceipt;
    const { items } = receipt;
    console.log(items);

    const markup = items
      .map(item => {
        console.log(item);

        // if () {

        // } else {

        // }
        return `<li class="detailed__item">
              <h2 class="unit__name">${item.name}</h2>
              <p class="unit__quantity">Quantity ${item.quantity}</p>
              <p class="unit__price">
                Price <span data-itemType-K>${item.price} </span>€
              </p>
            </li>`;
      })
      .join('');
    console.log(markup);
    refs.detailedList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error(error);
  }
}

function openMenu(e) {
  if (
    e.target.nodeName === 'BUTTON' &&
    e.target.getAttribute('data-order-id') === null
  ) {
    return;
  }
  const orderId = e.target.getAttribute('data-order-id');
  console.log(orderId);
  fetchAndCheckTransactionType(orderId);

  document.body.classList.add('modal-open');
  refs.menu.classList.add('wrapper__more--active');
  refs.menu.classList.remove('is-hidden');
}

function closeMenu(e) {
  if (e.target.nodeName === 'BUTTON' && e.closeMoreBtn) {
    return;
  }

  document.body.classList.remove('modal-open');
  refs.menu.classList.add('is-hidden');
  refs.menu.classList.remove('wrapper__more--active');
}

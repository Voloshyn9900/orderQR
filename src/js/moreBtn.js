import { fetchMyOrdersBiId } from './requestOrders';

const refs = {
  openMoreBtn: document.querySelector('.list__transaction'),
  closeMoreBtn: document.querySelector('.button__more--close'),
  menu: document.querySelector('.wrapper__more'),
  detailedList: document.querySelector('.detailed__list'),
  detailedTitle: document.querySelector('.detailed__title'),
  totalPriceRed: document.querySelector('.unit__totalPrice--red'),
  totalDiscounGreen: document.querySelector('.unit__totalDiscount--green'),
  totalSumBlack: document.querySelector('.unit__totalSum--black'),
};

refs.openMoreBtn.addEventListener('click', openMenu);
refs.closeMoreBtn.addEventListener('click', closeMenu);

async function fetchAndCreateMarkupDetilesOrder(Id) {
  try {
    const orderReceipt = await fetchMyOrdersBiId(Id);
    console.log(orderReceipt);

    const { receipt } = orderReceipt;
    const { items } = receipt;
    console.log(items);

    let totalPrice = 0;
    let totalDiscount = 0;
    // let totalSum = 0;

    refs.detailedTitle.textContent = receipt.organization.name;

    const markupUnit = items
      .map(item => {
        console.log(item);

        if (item.itemType === 'K') {
          totalPrice = totalPrice + item.price;
          return `<li class="detailed__item">
                <h2 class="unit__name">${item.name}</h2>
                <p class="unit__quantity">Quantity ${item.quantity}</p>
                <p class="unit__price">
                  price <span data-itemType-K>${item.price} </span>€
                </p>
              </li>`;
        } else if (item.itemType === 'Z') {
          totalDiscount = totalDiscount + item.price;
          return `<li class="detailed__item">
                <h2 class="unit__name">${item.name}</h2>
                <p class="unit__quantity">Quantity ${item.quantity}</p>
                <p class="unit__price">
                  Discount <span data-itemType-Z>${item.price} </span>€
                </p>
              </li>`;
        }
      })
      .join('');

    // const markupPrice = `
    // <hr />
    // <p class="sum__text">Price <span class="unit__totalPrice--red">${totalPrice.toFixed(
    //   2
    // )}</span></p>
    // <p class="sum__text">Discount <span class="unit__totalDiscount--green">${totalDiscount.toFixed(
    //   2
    // )}</span></p>
    // <p class="sum__text">Sum <span class="unit__totalSum--black">${(
    //   totalPrice + totalDiscount
    // ).toFixed(2)}</span></p><hr />`;
    // console.log(markupPrice);
    console.log(totalPrice);
    refs.detailedList.insertAdjacentHTML('afterbegin', markupUnit);
    refs.totalPriceRed.textContent = totalPrice.toFixed(2);
    refs.totalDiscounGreen.textContent = totalDiscount.toFixed(2);
    refs.totalSumBlack.textContent = (totalPrice + totalDiscount).toFixed(2);
  } catch (error) {
    console.error(error);
  }
}

function openMenu(e) {
  if (
    e.target.nodeName !== 'BUTTON' &&
    e.target.getAttribute('data-order-id') === null
  ) {
    return;
  }
  const orderId = e.target.getAttribute('data-order-id');
  console.log(orderId);
  fetchAndCreateMarkupDetilesOrder(orderId);

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
  refs.detailedList.innerHTML = '';
}

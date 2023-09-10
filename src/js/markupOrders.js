import { fetchMyOrders } from './requestOrders';
import Notiflix from 'notiflix';

const refs = {
  transactionList: document.querySelector('.list__transaction'),
};

fetchOrdersAndCreateMarkup();

async function fetchOrdersAndCreateMarkup() {
  try {
    const orders = await fetchMyOrders();
    createMarkupOrdres(orders);
  } catch (error) {
    console.error('Произошла ошибка:', error);
    Notiflix.Report.warning(
      'Warning',
      'Sorry, server dbOrders is not available. Try logging in at a different time or contact your system administrator',
      'Okay',
      {
        warning: {
          backOverlayColor: '',
        },
      }
    );
  }
}

function createMarkupOrdres(orders) {
  const markUp = orders
    .map(({ receipt }) => {
      console.log(receipt.unit.country);
      return `<hr />
      <li class="item__transaction">
        <button class="button__transaction">
          <p class="button__transaction--text">More</p>
          </svg>
        </button>
        <div class="general__information">
          <p class="title__transaction">Translation for services</p>
          <p class="place__transaction">${receipt.unit.country} 
          ${receipt.unit.municipality} 
          ${receipt.unit.postalCode}</p>
          <p class="company__transaction">${receipt.organization.name}</p>
        </div>
        <div class="sum__transaction">
          <p class="value__transaction">${receipt.totalPrice} €</p>
        </div>
      </li>`;
    })
    .reverse();

  refs.transactionList.insertAdjacentHTML('beforeend', markUp.join(''));
}

function checkedTypeTransaction(params) {}

import { fetchMyDebit } from './requestDebit';
import Notiflix from 'notiflix';

const refs = {
  ownerCard: document.querySelector('.owner__card'),
  ownerDebit: document.querySelector('.amount__debit'),
};

fetchDebitAndCreateMarkup();

async function fetchDebitAndCreateMarkup() {
  try {
    const myDebit = await fetchMyDebit('1');
    createMarkupDebit(myDebit);
  } catch (error) {
    console.error('Произошла ошибка:', error);
    Notiflix.Report.warning(
      'Warning',
      'Sorry, server dbDebit is not available. Try logging in at a different time or contact your system administrator',
      'Okay',
      {
        warning: {
          backOverlayColor: '',
        },
      }
    );
  }
}

function createMarkupDebit(myDebit) {
  refs.ownerCard.textContent = myDebit['fullName'];
  refs.ownerDebit.textContent = myDebit['amount'] + ' EUR';
}

// const BASE_URL = 'http://localhost:3030';

// function fetchOrders() {
//   return fetch(`${BASE_URL}/orders`)
//     .then(res => res.json())
//     .then(console.log);
// }

// console.log('fetchOrders', fetchOrders());

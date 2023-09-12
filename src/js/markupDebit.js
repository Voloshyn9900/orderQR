import { fetchMyDebit } from './requestDebit';
import Notiflix from 'notiflix';

const refs = {
  ownerCard: document.querySelector('.owner__card'),
  titleDebit: document.querySelector('.title__debit'),
  ownerDebit: document.querySelector('.amount__debit'),
  numberCard: document.querySelector('.number__card'),
  dateCard: document.querySelector('.date__card'),
  cvvCard: document.querySelector('.cvv__card'),
};

fetchDebitAndCreateMarkup();

async function fetchDebitAndCreateMarkup() {
  try {
    const myDebit = await fetchMyDebit('1');
    console.log(myDebit);
    createMarkupDebit(myDebit);
  } catch (error) {
    console.error('Произошла ошибка:', error);
    Notiflix.Report.failure(
      'Warning',
      'Sorry, server dbDebit is not available. Try logging in at a different time or contact your system administrator',
      'Okay',
      {
        failure: {
          backOverlayColor: '',
        },
      }
    );
  }
}

function createMarkupDebit({
  cardType,
  fullName,
  amount,
  cardNumber,
  expirationDate,
}) {
  refs.ownerCard.textContent = fullName;
  refs.ownerDebit.textContent = amount.toFixed(2) + ' EUR';
  refs.titleDebit.textContent = cardType + ' debit';
  refs.numberCard.textContent = cardNumber;
  refs.dateCard.textContent = expirationDate;
  refs.cvvCard.textContent = 'cvv';
}

// const BASE_URL = 'http://localhost:3030';

// function fetchOrders() {
//   return fetch(`${BASE_URL}/orders`)
//     .then(res => res.json())
//     .then(console.log);
// }

// console.log('fetchOrders', fetchOrders());

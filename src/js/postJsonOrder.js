import Notiflix, { Notify } from 'notiflix';
import { fetchMyDebit, fetchPutMyDebit } from './requestDebit';
import { fetchMyOrders, fetchPostMyOrders } from './requestOrders';
import { fetchOrdersAndCreateMarkup, createMarkupOrdres } from './markupOrders';

const refs = {
  textareaPutJson: document.querySelector('.textarea__put--json'),
  buttonPutJson: document.querySelector('.button__put--submit'),
  form: document.querySelector('.form__put--json'),
  amountDebit: document.querySelector('.amount__debit'),
};

console.log(refs.textareaPutJson);
console.log(refs.buttonPutJson);
console.log(refs.form);

refs.form.addEventListener('submit', getAndPutNewOrders);

// function getAndPutNewOrders(e) {
//   e.preventDefault();
//   // Получите данные из текстового поля
//   const jsonInputValue = refs.textareaPutJson.value;

//   try {
//     // Попытайтесь преобразовать данные в объект JSON
//     const jsonData = JSON.parse(jsonInputValue);
//     console.log(jsonData);

//     // Вызовите функцию fetchPutFromModal для отправки данных
//     fetchPostMyOrders(jsonData)
//       .then(updatedOrders => {
//         console.log('Данные успешно отправлены и обновлены:', updatedOrders);
//         successShow();
//       })
//       .catch(error => {
//         console.error('Произошла ошибка при отправке данных:', error);
//         failureShow();
//       });
//   } catch (error) {
//     console.error('Ошибка при разборе данных JSON:', error);
//     failureShow();
//   }

//   refs.textareaPutJson.value = '';
// }

async function getAndPutNewOrders(e) {
  e.preventDefault();
  // Получите данные из текстового поля
  const jsonInputValue = refs.textareaPutJson.value;

  try {
    // преобразовать данные в объект JSON
    const jsonData = JSON.parse(jsonInputValue);
    console.log(jsonData);
    // createMarkupOrdres(jsonData);
    // функция fetchPostMyOrders для отправки данных
    try {
      const updatedOrders = await fetchPostMyOrders(jsonData);
      console.log('Данные успешно отправлены и обновлены:', updatedOrders);
      successShow();

      // Вычитаем текущий debit и значение totalPrice
      try {
        const debit = await fetchMyDebit();
        const { amount } = debit;
        const {
          receipt: { totalPrice },
        } = jsonData;

        // Вычитаем totalPrice из debit и отправьте обновленное значение
        const newAmount = amount - totalPrice;

        try {
          const updatedDebit = await fetchPutMyDebit('1', {
            amount: newAmount,
          });
          console.log('Дебит успешно обновлен:', updatedDebit);
          refs.amountDebit.textContent = updatedDebit.amount;
        } catch (error) {
          console.error('Произошла ошибка при обновлении дебита:', error);
          failureShow();
        }
      } catch (error) {
        console.error('Произошла ошибка при получении текущего дебита:', error);
        failureShow();
      }
    } catch (error) {
      console.error('Произошла ошибка при отправке данных:', error);
      failureShow();
    }
  } catch (error) {
    console.error('Ошибка при разборе данных JSON:', error);
    failureShow();
  }

  refs.textareaPutJson.value = '';
}

function failureShow() {
  Notify.failure('Oops, something went wrong.', {
    width: '220px',
    position: 'left-top',
    failure: {
      background: '#ff5549',
      textColor: '#fff',
      notiflixIconColor: '#fff',
    },
  });
}

function successShow() {
  Notify.success('Data sent and updated successfully.', {
    width: '220px',
    position: 'left-top',
    success: {
      background: '#5bc643',
      textColor: '#fff',
      notiflixIconColor: '#fff',
    },
  });
}

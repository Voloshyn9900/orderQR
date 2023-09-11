import { fetchMyDebit } from './requestDebit';
import { fetchMyOrders } from './requestOrders';

const refs = {
  ownerCard: document.querySelector('.owner__card'),
  ownerDebit: document.querySelector('.amount__debit'),
};

const BASE_URL = 'http://localhost:4040';

async function fetchDataAndCalculateDebit(params) {
  try {
    const myDebit = await fetchMyDebit('1');
    const myTransactions = await fetchMyOrders();
    console.log(myDebit);
    console.log(myTransactions);

    if (myDebit && myDebit.amount && myTransactions) {
      // Вычисляем новое значение "amount"
      const newAmount =
        myDebit.amount -
        myTransactions.reduce(
          (acc, transaction) => acc + transaction.receipt.totalPrice,
          0
        );

      // Обновляем "amount" в объекте "myDebit"
      myDebit.amount = newAmount;

      return myDebit; // Возвращаем обновленный объект myDebit
    } else {
      console.error('Неверные данные или данные отсутствуют');
    }
  } catch (error) {
    console.error('Произошла ошибка: updateDebit.js', error);
  }
}

async function updateMyDebit(IdDebit = '1', newMyDebit) {
  const url = `${BASE_URL}/myDebit/${IdDebit}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMyDebit),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const updatedDebit = await response.json();
    return updatedDebit;
  } catch (error) {
    console.error('Произошла ошибка при обновлении дебита:', error);
    throw error;
  }
}

export async function main() {
  const newMyDebit = await fetchDataAndCalculateDebit();
  console.log(newMyDebit);

  const updatedDebit = await updateMyDebit('1', newMyDebit); // Передаем newMyDebit
  console.log(updatedDebit);
  //   refs.ownerDebit.textContent = myDebit.amount.toFixed(2) + ' EUR';
}

main();

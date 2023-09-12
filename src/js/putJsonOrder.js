import { fetchMyDebit, fetchPutMyDebit } from './requestDebit';
import { fetchMyOrders, fetchPutMyOrders } from './requestOrders';
const refs = {
  textareaPutJson: document.querySelector('.textarea__put--json'),
  buttonPutJson: document.querySelector('.button__put--submit'),
  form: document.querySelector('.form__put--json'),
};

console.log(refs.textareaPutJson);
console.log(refs.buttonPutJson);
console.log(refs.form);

refs.form.addEventListener('submit', getAndPutNewOrders);

function getAndPutNewOrders(e) {
  e.preventDefault();

  // Получите данные из текстового поля
  const jsonInputValue = refs.textareaPutJson.value;

  try {
    // Попытайтесь преобразовать данные в объект JSON
    const jsonData = JSON.parse(jsonInputValue);

    // Вызовите функцию fetchPutFromModal для отправки данных
    fetchPutMyOrders(jsonData)
      .then(updatedOrders => {
        // Обработайте результат отправки, если это необходимо
        console.log('Данные успешно отправлены и обновлены:', updatedOrders);
      })
      .catch(error => {
        console.error('Произошла ошибка при отправке данных:', error);
      });
  } catch (error) {
    console.error('Ошибка при разборе данных JSON:', error);
  }

  refs.textareaPutJson.value = '';
}

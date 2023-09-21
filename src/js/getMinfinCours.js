// // import axios from 'axios';
// // const cheerio = require('cheerio');

// // async function fetchCurrencyExchangeRate() {
// //   try {
// //     const url = 'https://minfin.com.ua/company/privatbank/currency/';
// //     const response = await axios.get(url);
// //     // console.log(response.data);
// //     const $ = cheerio.load(response.data);
// //     console.log($());
// //     // Здесь вы можете использовать селектор Cheerio для извлечения нужной информации.
// //     // Например, если вам нужно получить текст элемента с классом 'mfm-text-1',
// //     // вы можете сделать следующее:

// //     const exchangeRate = $(`<div class="cusssrrency-page">
// // <table class="currency-data">
// // <thead>
// // <tr>
// // <td>Валюта</td>
// // <td>Покупка</td>
// // <td>Продажа</td>
// // <td>Обновление</td>
// // </tr>
// // </thead>
// // <tbody>
// // <tr>
// // <td>USD</td>
// // <td>
// // 37.3000
// // </td>
// // <td>
// // 37.9000
// // </td>
// // <td>
// // 13.09.2023
// // </td>
// // </tr>
// // <tr>
// // <td>EUR</td>
// // <td>
// // 40.1000
// // </td>
// // <td>
// // 41.1000
// // </td>
// // <td>
// // 13.09.2023
// // </td>
// // </tr>
// // </tbody>
// // </table>
// // </div>`).html();
// //     //  .text();
// //     console.log('Курс валюты:', exchangeRate);

// //     document.body.insertAdjacentHTML('beforebegin', exchangeRate);
// //     // Другие действия с данными, как вам необходимо.
// //   } catch (error) {
// //     console.error('Произошла ошибка:', error);
// //   }
// // }

// // fetchCurrencyExchangeRate();

// import axios from 'axios';
// const cheerio = require('cheerio');

// const cours = document.querySelector('.section__tools');

// async function fetchCurrencyExchangeRate() {
//   try {
//     const url = 'https://minfin.com.ua/company/privatbank/currency/';
//     const response = await axios.get(url);
//     console.log(response);
//     console.log(response.data);
//     const $ = cheerio.load(response.data);

//     const exchangeRate = $('.currency-data').html();

//     console.log('Курс валюты:', exchangeRate);

//     cours.insertAdjacentHTML('beforebegin', exchangeRate);
//     // Другие действия с данными, как вам необходимо.
//   } catch (error) {
//     console.error('Произошла ошибка:', error);
//   }
// }

// // async function fetchCurrencyExchangeRate() {
// //   try {
// //     const response = await fetch(`https://time100.ru/timestamp`);

// //     // Проверяем, успешен ли HTTP-ответ (статус 200)
// //     if (!response.ok) {
// //       throw new Error('Ошибка HTTP: ' + response.status);
// //     }

// //     // Получаем тело ответа в виде текста
// //     const responseBodyText = await response.text();

// //     // Выводим текст тела в консоль
// //     console.log(responseBodyText);

// //     return responseBodyText;
// //   } catch (error) {
// //     console.error('Произошла ошибка:', error);
// //   }
// // }

// fetchCurrencyExchangeRate();

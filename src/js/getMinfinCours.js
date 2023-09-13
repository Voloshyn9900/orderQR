const axios = require('axios');
const cheerio = require('cheerio');
console.log(0);
async function fetchCurrencyExchangeRate() {
  try {
    console.log(1);
    const url = 'https://minfin.com.ua/currency/';
    console.log(2);
    const response = await axios.get(url);
    console.log(3);
    const $ = cheerio.load(response.data);
    console.log(4);

    // Здесь вы можете использовать селектор Cheerio для извлечения нужной информации.
    // Например, если вам нужно получить текст элемента с классом 'mfm-text-1',
    // вы можете сделать следующее:

    const exchangeRate = $('.mfm-text-1').text();
    console.log(5);
    console.log('Курс валюты:', exchangeRate);
    console.log(6);

    // Другие действия с данными, как вам необходимо.
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}

fetchCurrencyExchangeRate();

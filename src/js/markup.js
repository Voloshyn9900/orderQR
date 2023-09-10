const BASE_URL = 'http://localhost:3030';

function fetchBooks() {
  return fetch(`${BASE_URL}/orders`)
    .then(res => res.json())
    .then(console.log);
}

console.log('9', fetchBooks());

const BASE_URL = 'http://localhost:3030';
// const IdDebit = '1';

export async function fetchMyOrders() {
  const response = await fetch(`${BASE_URL}/orders`);
  const orders = await response.json();
  console.log(orders);
  return orders;
}

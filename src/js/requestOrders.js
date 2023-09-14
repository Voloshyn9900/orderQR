const BASE_URL = 'http://localhost:3030';
// const IdDebit = '1';

export async function fetchMyOrders() {
  const response = await fetch(`${BASE_URL}/orders`);
  const orders = await response.json();
  // console.log(orders);
  return orders;
}

export async function fetchMyOrdersBiId(Id) {
  const response = await fetch(`${BASE_URL}/orders/${Id}`);
  const orders = await response.json();
  // console.log(orders);
  return orders;
}

export async function fetchPostMyOrders(newMyOrder) {
  const url = `${BASE_URL}/orders`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMyOrder),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const updatedOrder = await response.json();
    return updatedOrder;
  } catch (error) {
    console.error('Произошла ошибка при обновлении рецептов:', error);
    throw error;
  }
}

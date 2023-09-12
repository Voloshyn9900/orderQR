const BASE_URL = 'http://localhost:4040';
// const IdDebit = '1';

export async function fetchMyDebit(IdDebit = '1') {
  const response = await fetch(`${BASE_URL}/myDebit/${IdDebit}`);
  const debit = await response.json();
  // console.log(debit);
  return debit;
}

export async function fetchPutMyDebit(IdDebit = '1', newMyDebit) {
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

const BASE_URL = 'http://localhost:4040';
// const IdDebit = '1';

export async function fetchMyDebit(IdDebit = '1') {
  const response = await fetch(`${BASE_URL}/myDebit/${IdDebit}`);
  const debit = await response.json();
  console.log(debit);
  return debit;
}

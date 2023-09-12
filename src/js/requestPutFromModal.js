// const BASE_URL = 'http://localhost:4040';

// export async function fetchPutFromModal(IdDebit = '1', newMyDebit) {
//   const url = `${BASE_URL}/myDebit/${IdDebit}`;

//   try {
//     const response = await fetch(url, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newMyDebit),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const updatedDebit = await response.json();
//     return updatedDebit;
//   } catch (error) {
//     console.error('Произошла ошибка при обновлении дебита:', error);
//     throw error;
//   }
// }

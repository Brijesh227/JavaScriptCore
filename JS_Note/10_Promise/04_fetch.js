const cartItem = () => {
    return fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .catch(err => console.log(err));
}

const data = cartItem()
                .then(data => {
                    console.log('data then',data);
                    return data;
                });

console.log('data',data);                           

/*  data Promise { <pending> }
    data then { ... }            
*/

// const fetchData = () => {
//     return fetch('https://dummyjson.com/carts/1')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok.');
//             }
//             return response.json();
//         })
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             throw error; // Optionally handle or rethrow the error
//         });
// };

// const processData = () => {
//     fetchData()
//         .then(fetchedData => {
//             return fetchedData;
//         })
//         .catch(error => {
//             console.error('Error processing data:', error);
//         });
// };

// data = processData();
// console.log('data',data);



// async function fetchdata(){
//     try {
//         const response = await fetch('https://dummyjson.com/carts/1');
//         if (!response.ok) {
//             throw new Error('Network response was not ok.');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:');
//     }
// }

// async function start(){
//     const data = await fetchdata();
//     console.log('data',data);
// }

// start()
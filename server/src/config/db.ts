const { Client } = require('pg');

const client = new Client();

client.connect();
// const query = `
// CREATE TABLE users (
//     username varchar,
//     password varchar,
// );
// `;

// client
//     .query(query)
//     .then(res => {
//         console.log('Table is successfully created');
//     })
//     .catch(err => {
//         console.error(err);
//     })
//     .finally(() => {
//         client.end();
//     });
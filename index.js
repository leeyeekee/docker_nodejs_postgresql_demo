const pg = require('pg');

const cs = 'postgres://postgres:admin@postgresql:5432/sampledb';

const client = new pg.Client(cs);
client.connect();

client.query('SELECT * FROM users').then(res => {

    const data = res.rows;

    console.log('all data');
    data.forEach(row => {
        console.log(`Id: ${row.id} Name: ${row.name} Email: ${row.email}`);
    })
}).finally(() => {
    client.end()
});

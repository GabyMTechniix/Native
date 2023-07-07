const {Client} = require('pg');

const client = new Client({
  host:'localhost',
  user:'odoo15',
  port:5332,
  password:'odoo',
  database:'test'
})

client.connect();

client.query(`Select * from test`, (err, res)=>{
  if(!err){
    console.log(res.rows);
  }else{
    console.log(err.message);
  }
  client.end
})
// const MongoClient = require('mongodb').MongoClient;
// Similar to above code ...Just destructuring
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to DB');

  // const db = client.db('TodoApp');
  //
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Create new collection and record for user with properties


  // const db = client.db('Users');
  //
  // db.collection('Users').insertOne({
  //   name: 'Bindu',
  //   age: 27,
  //   location: 'DC'
  // }, (err,result) =>{
  //   if(err) {
  //     return console.log('Unable to insert to Users');
  //   }
  //   console.log(result.ops);
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  // });


  client.close();
});

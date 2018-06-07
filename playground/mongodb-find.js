
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to DB');

  const db = client.db('Users');


  db.collection('Users').find({name:'Vamshi'}).toArray().then((docs) => {
    // console.log(`Users count: ${count}`);
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch todos',err);
  });

  // db.collection('Users').find({name:'Vamshi'}).count().then((count) => {
  //   console.log(`Users count: ${count}`);
  //   // console.log(JSON.stringify(count,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(count,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find({
  //   _id:new ObjectID('5b194a013b2f887d757116b6')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });



  client.close();
});

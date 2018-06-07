
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to DB');

  const db = client.db('Todos');


  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b193df23757e154ebfe121c')
  },{
    $set: {
      location:'MD'
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });



  client.close();
});

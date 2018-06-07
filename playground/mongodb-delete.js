
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to DB');

  const db = client.db('Users');


//Delete Many

// db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
//   console.log(result);
// });


// Delete one

// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });


// find one and delete

  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  // });


  // db.collection('User').deleteMany({name : 'Vamshi'}).then((result) => { 
  //   console.log(result);
  // });





  // client.close();
});

var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started at port 3000');
});

//
//
// var newTodo1 = new Todo({
//   text: 'Better Cook dinner',
//   completed: true,
//   completedAt: 06072018
// });
//
// newTodo1.save().then((doc) => {
//   console.log('Saved todo ',doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });




//
// var user = new User({
//   email:'vamshi@gmail.com '
// });
//
// user.save().then((doc) => {
//   console.log('User saved',doc);
// },(e) => {
//   console.log('Unable to save user',e);
// });

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');
const reciepeSchema = require('./schemas/reciepeSchema');

mongoose.connect('mongodb://localhost/recipedb')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


  const Reciepemodel = mongoose.model('Ingredients', reciepeSchema);  // Reciepe is the name of the collection

//ITERATION 2 'RECIEPE'

// let recipe1 = {
//   title: 'llenties',
//   level: 'Easy Peasy',
//   ingredients: ['meat','tomatoe', 'salad'],
//   cousine: 'Catalan',
//   dishtype: 'Dish',
//   duration: 30,
//   creator: '666'
// }

// Reciepemodel.create( recipe1, (err, result) => {
//   if (err) console.log(err);
//   else console.log('Document inserter', result);
// });



//ITERATION 3

Reciepemodel.insertMany(data)
.then( (result) => {
  console.log(result);
  result.forEach( (ele) => {
    console.log(ele.title);
  })
})
.catch( (err) => console.log(err));

//ITERATION 4

// const duration = 100;
// Reciepemodel.findOneAndUpdate( {title: 'Rigatoni alla Genovese'}, {$set: {duration: duration}})
// .then( console.log('Succes!'))
// .catch( (err) => console.log(err));

Reciepemodel.find({title: 'Rigatoni alla Genovese'})
.then((result) => {
  console.log(result)
  mongoose.disconnect();  // can close after each query
})
.catch( (err) => console.log(err));


Reciepemodel.find({title: 'Orange and Milk-Braised Pork Carnitas'})
.then((result) => {
  console.log(result)
  console.log('hi we found something')
})
.catch( (err) => console.log(err));

//ITERATION 5

// Reciepemodel.findOneAndDelete( {title: 'Carrot Cake'})
// .then((result) => console.log(result))
// .catch((err) => console.log(err));

// Reciepemodel.find({title: 'Carrot Cake'})
// .then((result) => console.log(result))
// .catch( (err) => console.log(err));

// mongoose.connection.close();



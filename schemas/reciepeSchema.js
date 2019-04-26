const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATE A SCHEMA

const reciepeSchema = new Schema( {
  title: {type: String, require: true},
  level: {type: String, enums: [{type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']}]},
  ingredients: {type: []},
  cousine: {type: String, require: true},
  dishType: {type: [], enums: [{type: String, enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']}]}, //cheeck!
  image: {type: String, default:'https://images.media-allrecipes.com/images/75131.jpg.'},
  duration: {type: Number, minimum: 0},
  creator: {type: String},
  created: {type: Date, default: Date.now}
});

module.exports = reciepeSchema;
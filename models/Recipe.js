const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

title: {
  type: String,
  required: true,
  unique: true,
  trim: true,
},
level: {
  type: String,
  enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
},
ingredients: {
  type: Array,
},
cuisine: {
  type: String,
  required: true,
  trim: true,
},
dishType: {
  type: String,
  enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other'],
},
image: {
  type: String,
  default: 'https://images.media-allrecipes.com/images/75131.jpg',
},
duration: {
  type: Number,
  min:0,
},
creator: {
  type: String,
  trim: true,
},
created: {
  type: Date,
  default: Date.now,
}
});

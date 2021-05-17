"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '..', 'build')));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/', function (req, res) {
  res.send('Home Page');
});
var recipes = [{
  name: 'One Skillet Breakfast Potatoes, Bacon & Eggs',
  image: 'https://i.ibb.co/SXYdmnN/whole30-breakfast-hash.jpg',
  category: 'Breakfast',
  cuisine: 'American',
  lifestyle: ['Whole30', 'Paleo', 'Vegan', 'Gluten-Free', 'Dairy-Free'],
  prepTime: '10',
  cookTime: '25',
  totalTime: '35',
  "yield": '2-4',
  description: 'This is one of the easiest and tastiest Whole30 breakfast skillets. These country potatoes, bacon and eggs make a hearty and healthy breakfast in only one pan. A quick meal to both cook and clean up!',
  ingredients: [{
    item: 'ghee',
    quantity: '3',
    cookingMeasure: 'tbsp',
    type: 'pantry item'
  }, {
    item: 'Yukon potatoes',
    quantity: '4',
    cookingMeasure: 'cups',
    type: 'produce'
  }, {
    item: 'diced white onion',
    quantity: '1',
    cookingMeasure: null,
    type: 'produce'
  }, {
    item: 'grass-fed bacon',
    quantity: '1/2',
    cookingMeasure: 'package',
    type: 'deli'
  }, {
    item: 'eggs',
    quantity: '4-6',
    cookingMeasure: null,
    type: 'dairy'
  }, {
    item: 'salt',
    quantity: null,
    cookingMeasure: null,
    type: 'pantry item'
  }, {
    item: 'pepper',
    quantity: null,
    cookingMeasure: null,
    type: 'pantry item'
  }, {
    item: 'garlic powder',
    quantity: '1',
    cookingMeasure: 'tsp',
    type: 'pantry item'
  }, {
    item: 'dried parsely',
    quantity: '1 1/2',
    cookingMeasure: 'tsp',
    type: 'pantry item'
  }],
  directions: ['Preheat oven to 350 degrees F.', 'Heat large oven safe skillet on medium-high heat and melt ghee and tallow. Once cooking fat is hot, add diced potatoes, season with the spices, and cook for about 5 minutes, stirring occasionally.', 'Once potatoes have started to soften, add diced onion and cook for another 5-10 minutes until potaotes start browning.', 'Add bacon and stir for about 5 minutes until bacon is about cooked thoroughly and potatoes are crisping up. Use the spatula or spoon to make open space in the skillet (create wells) for where the eggs will go.', 'Crack 1 egg into each well, ensuring to not move eggs/yolk around after they’ve been placed into the skillet. Sprinkle additional salt, pepper or parsley over eggs and place skillet into the oven.', 'Bake for 6-10 minutes, depending on how you prefer your eggs to be cooked', 'Remove from oven, top with any additional salt and pepper, parsley, optional green onion or hot sauce.']
}, {
  name: 'Whole30 Breakfast Hash',
  image: 'https://i.ibb.co/9h7Rvfs/whole30-breakfast-hash.jpg',
  category: 'Breakfast',
  cuisine: 'American',
  lifestyle: ['Whole30', 'Paleo', 'Vegan', 'Gluten-Free', 'Dairy-Free'],
  prepTime: '5 min',
  cookTime: '25 min',
  totalTime: '30 min',
  "yield": '6',
  description: 'Whole30 breakfast dish!  Simple, easy, and throw everything together with some eggs.  Can use any combination of potatoes and peppers and your favorite type of meat/sausage for this breakfast dish!',
  ingredients: [{
    item: 'peeled and diced sweet potato',
    quantity: '1',
    cookingMeasure: 'large',
    type: 'produce'
  }, {
    item: 'diced yukon gold potatoes',
    quantity: '3',
    cookingMeasure: 'small',
    type: 'produce'
  }, {
    item: 'compliant sausage',
    quantity: '1/2',
    cookingMeasure: 'lb',
    type: 'meat'
  }, {
    item: 'diced bell pepper (any color)',
    quantity: '1',
    cookingMeasure: 'cup',
    type: 'produce'
  }, {
    item: 'chopped onion',
    quantity: '1/2',
    cookingMeasure: 'small',
    type: 'pantry item'
  }, {
    item: 'olive oil',
    quantity: '2',
    cookingMeasure: 'tsps',
    type: 'pantry item'
  }],
  directions: ['Preheat oven to 400 degrees.  Line a baking sheet with parchment paper.  Toss sweet potatoes, yellow potatoes, and olive oil together on the baking sheet, stirring to coat.  Season with salt and pepper if desired.  Bake for 20-25 minutes, until potatoes are tender and slightly browned.', 'Meanwhile, in a large skillet, brown sausage over medium high heat.  In the final few minutes of cooking, add the peppers and onions to the pan, cooking until softened.  Set aside.', 'Combine cooked potatoes with sausage/pepper mixture.  Serve immediately or cool and refrigerate.']
}, {
  name: 'Eggs Benny',
  image: 'https://i.ibb.co/p3KL8BB/Healthy-Eggs-Benedict-5.jpg',
  category: 'Breakfast',
  cuisine: 'American',
  lifestyle: ['Whole30', 'Paleo', 'Gluten-Free', 'Dairy-Free'],
  prepTime: '30 min',
  cookTime: '10 min',
  totalTime: '40 min',
  "yield": '4',
  description: 'Healthy eggs Benedict is your classic brunch recipe turned into a delicious sweet potato variation. You will love it!!',
  ingredients: [{
    item: 'sweet potato cut into 1/4 inch thick slices',
    quantity: '1',
    cookingMeasure: null,
    type: 'produce'
  }, {
    item: 'eggs',
    quantity: '4',
    cookingMeasure: null,
    type: 'dairy'
  }, {
    item: 'compliant bacon',
    quantity: '4',
    cookingMeasure: 'slices',
    type: 'meat'
  }, {
    item: 'egg yolk',
    quantity: '3',
    cookingMeasure: null,
    type: 'dairy'
  }, {
    item: 'lemon juice',
    quantity: '1/2',
    cookingMeasure: 'tbsp',
    type: 'produce'
  }, {
    item: 'dijon',
    quantity: '1/2',
    cookingMeasure: 'tsp',
    type: 'pantry item'
  }, {
    item: 'salt',
    quantity: '1/4',
    cookingMeasure: 'tsp',
    type: 'pantry item'
  }, {
    item: 'cayenne pepper',
    quantity: 'pinch',
    cookingMeasure: null,
    type: 'pantry item'
  }, {
    item: 'hot ghee',
    quantity: '1/2',
    cookingMeasure: 'cup',
    type: 'pantry item'
  }],
  directions: ['Preheat your oven to 400 degrees Fahrenheit.', 'Slice the potato into even round slices, using a sharp knife or mandoline. Place the slices on a baking sheet and bake for 30-40 minutes, or until cooked through. Note: thicker slices may take longer.', 'When the sweet potato is almost done, prepare the other ingredients.', 'Cook the Canadian bacon for about a minute on each side in a pan on medium heat. Set aside.', 'Bring a pot of water to a simmer. Create a vortex with a spoon and crack and poach the eggs for 3-4 minutes. Remove the eggs from the pot and place in a bowl.', 'Add the egg yolks, lemon juice, dijon, salt and cayenne pepper to a high powered blender and blend for about 5 seconds. Then slowly pour in the hot butter with the blender on medium high, until you have fully emulsified the sauce. Pour into a small bowl.', 'Once the potatoes have cooked, add to a plate and top with canadian bacon, a poached egg, and a drizzle of hollandaise sauce. Garnish with chopped parsley and serve immediately!']
} // {
//   name: 'Eggs Shakshuka',
//   category: 'Breakfast',
//   cuisine: 'North African and Middle Eastern',
//   lifestyle: ['Whole30', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'],
//   prepTime: '10 min',
//   cookTime: '20 min',
//   totalTime: '30 min',
//   description: 'Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce with spices. It is easy, healthy and takes less than 30 minutes to make.',
//   ingredients: ['1 medium onion, diced', '1 red bell pepper, seeded and diced', '4 garlic cloves, finely chopped', '2 tsp paprika', '1 tsp cumin', '1/4 tsp chili powder', '1 28-oz can whole peeled tomatoes', '6 large eggs', 'salt', 'pepper', '1 small bunch fresh cilantro, chopped', '1 small bunch fresh parsley, chopped'],
//   directions: ['Heat olive oil in a large sauté pan on medium heat. Add the chopped bell pepper and onion and cook for 5 minutes or until the onion becomes translucent.', 'Add garlic and spices and cook an additional minute.', 'Pour the can of tomatoes and juice into the pan and break down the tomatoes using a large spoon. Season with salt and pepper and bring the sauce to a simmer.', 'Use your large spoon to make small wells in the sauce and crack the eggs into each well. Cover the pan and cook for 5-8 minutes, or until the eggs are done to your liking.', 'Garnish with chopped cilantro and parsley.']
// },
// {
//   name: 'Spicy Pulled Pork Fried Eggs',
//   category: 'Breakfast',
//   cuisine: 'American',
//   lifestyle: ['Whole30', 'Gluten-Free', 'Low-Carb', 'Paleo'],
//   prepTime: '5 min',
//   cookTime: '3 min',
//   totalTime: '8 min',
//   description: 'Spicy pulled pork fried eggs combine slow cooker pulled pork with jalapeños, green onions, hot sauce and perfectly fried eggs. Recipe slightly adapted from The Kitcheneer',
//   ingredients: ['2 large eggs', '1 tbsp ghee', '1/3 cup pulled pork', '1 jalapeno', 'green onion, sliced', 'dash of hot sauce', 'salt', 'pepper'],
//   directions: ['Heat the ghee in a small skillet on low heat.', 'Crack the eggs into the skillet and cook for 30 seconds.', 'Add the pulled pork and jalapeños and cook an additional 2 minutes or until the eggs are done to your liking.', 'Transfer the eggs to a plate and top with green onion, hot sauce, salt and pepper.']
// }
];
app.get('/recipes', function (req, res) {
  console.log('recipes route');
  res.json(recipes);
});
module.exports = app;
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {nanoid} from 'nanoid'
import url from 'url';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 next();
});

app.get('/', (req, res) => {
  res.send('Home Page')
})

const recipes = [
  {
    name: 'One Skillet Potatoes, Bacon & Eggs',
    id: nanoid(),
    image: 'https://i.ibb.co/SXYdmnN/whole30-breakfast-hash.jpg',
    category: 'Breakfast',
    cuisine: 'American',
    lifestyle: ['Whole30', 'Paleo', 'Vegan', 'Gluten-Free', 'Dairy-Free'],
    prepTime: '10',
    cookTime: '25',
    totalTime: '35',
    yield: '2-4',
    description: 'This is one of the easiest and tastiest Whole30 breakfast skillets. These country potatoes, bacon and eggs make a hearty and healthy breakfast in only one pan. A quick meal to both cook and clean up!',
    ingredients: [
      {
        item: 'ghee',
        quantity: '3',
        cookingMeasure: 'tbsp',
        type: 'pantry item'
      },
      {
        item: 'Yukon potatoes',
        quantity: '4',
        cookingMeasure: 'cups',
        type: 'produce'
      },
      {
        item: 'diced white onion',
        quantity: '1',
        cookingMeasure: null,
        type: 'produce'
      },
      {
        item: 'grass-fed bacon',
        quantity: '1/2',
        cookingMeasure: 'package',
        type: 'deli'
      },
      {
        item: 'eggs',
        quantity: '4-6',
        cookingMeasure: null,
        type: 'dairy'
      },
      {
        item: 'salt',
        quantity: null,
        cookingMeasure: null,
        type: 'pantry item'
      },
      {
        item: 'pepper',
        quantity: null,
        cookingMeasure: null,
        type: 'pantry item'
      },
      {
        item: 'garlic powder',
        quantity: '1',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'dried parsely',
        quantity: '1 1/2',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      }
],
    directions: ['Preheat oven to 350 degrees F.', 'Heat large oven safe skillet on medium-high heat and melt ghee and tallow. Once cooking fat is hot, add diced potatoes, season with the spices, and cook for about 5 minutes, stirring occasionally.', 'Once potatoes have started to soften, add diced onion and cook for another 5-10 minutes until potaotes start browning.', 'Add bacon and stir for about 5 minutes until bacon is about cooked thoroughly and potatoes are crisping up. Use the spatula or spoon to make open space in the skillet (create wells) for where the eggs will go.', 'Crack 1 egg into each well, ensuring to not move eggs/yolk around after they’ve been placed into the skillet. Sprinkle additional salt, pepper or parsley over eggs and place skillet into the oven.', 'Bake for 6-10 minutes, depending on how you prefer your eggs to be cooked', 'Remove from oven, top with any additional salt and pepper, parsley, optional green onion or hot sauce.'],
  },
  {
    name: 'Whole30 Breakfast Hash',
    id: nanoid(),
    image: 'https://i.ibb.co/9h7Rvfs/whole30-breakfast-hash.jpg',
    category: 'Breakfast',
    cuisine: 'American',
    lifestyle: ['Whole30', 'Paleo', 'Vegan', 'Gluten-Free', 'Dairy-Free'],
    prepTime: '5 min',
    cookTime: '25 min',
    totalTime: '30 min',
    yield: '6',
    description: 'Whole30 breakfast dish!  Simple, easy, and throw everything together with some eggs.  Can use any combination of potatoes and peppers and your favorite type of meat/sausage for this breakfast dish!',
    ingredients: [
      {
        item: 'peeled and diced sweet potato',
        quantity: '1',
        cookingMeasure: 'large',
        type: 'produce'
      },
      {
        item: 'diced yukon gold potatoes',
        quantity: '3',
        cookingMeasure: 'small',
        type: 'produce'
      },
      {
        item: 'compliant sausage',
        quantity: '1/2',
        cookingMeasure: 'lb',
        type: 'meat'
      },
      {
        item: 'diced bell pepper (any color)',
        quantity: '1',
        cookingMeasure: 'cup',
        type: 'produce'
      },
      {
        item: 'chopped onion',
        quantity: '1/2',
        cookingMeasure: 'small',
        type: 'pantry item'
      },
      {
        item: 'olive oil',
        quantity: '2',
        cookingMeasure: 'tsps',
        type: 'pantry item'
      }
    ],
    directions: ['Preheat oven to 400 degrees.  Line a baking sheet with parchment paper.  Toss sweet potatoes, yellow potatoes, and olive oil together on the baking sheet, stirring to coat.  Season with salt and pepper if desired.  Bake for 20-25 minutes, until potatoes are tender and slightly browned.', 'Meanwhile, in a large skillet, brown sausage over medium high heat.  In the final few minutes of cooking, add the peppers and onions to the pan, cooking until softened.  Set aside.', 'Combine cooked potatoes with sausage/pepper mixture.  Serve immediately or cool and refrigerate.']
  },
  {
    name: 'Eggs Benny',
    id: nanoid(),
    image: 'https://i.ibb.co/p3KL8BB/Healthy-Eggs-Benedict-5.jpg',
    category: 'Breakfast',
    cuisine: 'American',
    lifestyle: ['Whole30', 'Paleo', 'Gluten-Free', 'Dairy-Free'],
    prepTime: '30 min',
    cookTime: '10 min',
    totalTime: '40 min',
    yield: '4',
    description: 'Healthy eggs Benedict is your classic brunch recipe turned into a delicious sweet potato variation. You will love it!!',
    ingredients: [
      {
        item: 'sweet potato cut into 1/4 inch thick slices',
        quantity: '1',
        cookingMeasure: null,
        type: 'produce'
      },
      {
        item: 'eggs',
        quantity: '4',
        cookingMeasure: null,
        type: 'dairy'
      },
      {
        item: 'compliant bacon',
        quantity: '4',
        cookingMeasure: 'slices',
        type: 'meat'
      },
      {
        item: 'egg yolk',
        quantity: '3',
        cookingMeasure: null,
        type: 'dairy'
      },
      {
        item: 'lemon juice',
        quantity: '1/2',
        cookingMeasure: 'tbsp',
        type: 'produce'
      },
      {
        item: 'dijon',
        quantity: '1/2',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'salt',
        quantity: '1/4',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'cayenne pepper',
        quantity: 'pinch',
        cookingMeasure: null,
        type: 'pantry item'
      },
      {
        item: 'hot ghee',
        quantity: '1/2',
        cookingMeasure: 'cup',
        type: 'pantry item'
      },
    ],
    directions: ['Preheat your oven to 400 degrees Fahrenheit.', 'Slice the potato into even round slices, using a sharp knife or mandoline. Place the slices on a baking sheet and bake for 30-40 minutes, or until cooked through. Note: thicker slices may take longer.', 'When the sweet potato is almost done, prepare the other ingredients.', 'Cook the Canadian bacon for about a minute on each side in a pan on medium heat. Set aside.', 'Bring a pot of water to a simmer. Create a vortex with a spoon and crack and poach the eggs for 3-4 minutes. Remove the eggs from the pot and place in a bowl.', 'Add the egg yolks, lemon juice, dijon, salt and cayenne pepper to a high powered blender and blend for about 5 seconds. Then slowly pour in the hot butter with the blender on medium high, until you have fully emulsified the sauce. Pour into a small bowl.', 'Once the potatoes have cooked, add to a plate and top with canadian bacon, a poached egg, and a drizzle of hollandaise sauce. Garnish with chopped parsley and serve immediately!']
  },
  {
    name: 'Eggs Shakshuka',
    id: nanoid(),
    image: 'https://i.ibb.co/2yC1CrL/Shakshuka-19.jpg',
    category: 'Breakfast',
    cuisine: 'North African and Middle Eastern',
    lifestyle: ['Whole30', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'],
    prepTime: '10 min',
    cookTime: '20 min',
    totalTime: '30 min',
    description: 'Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce with spices. It is easy, healthy and takes less than 30 minutes to make.',
    ingredients: [
      {
        item: 'onion',
        quantity: '1',
        cookingMeasure: 'medium',
        type: 'produce'
      },
      {
        item: 'red bell pepper',
        quantity: '1',
        cookingMeasure: null,
        type: 'produce'
      },
      {
        item: 'garlic cloves',
        quantity: '4',
        cookingMeasure: null,
        type: 'produce'
      },
      {
        item: 'paprika',
        quantity: '2',
        cookingMeasure: 'tsp',
        type: 'pantry items'
      },
      {
        item: 'cumin',
        quantity: '1',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'chili powder',
        quantity: '1/4',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'whole peeled tomatoes',
        quantity: '1',
        cookingMeasure: '28-oz can',
        type: 'pantry item'
      },
      {
        item: 'eggs',
        quantity: '6',
        cookingMeasure: 'large',
        type: 'dairy'
      },
      {
        item: 'salt',
        quantity: null,
        cookingMeasure: null,
        type: 'pantry item'
      },
      {
        item: 'pepper',
        quantity: null,
        cookingMeasure: null,
        type: 'pantry item'
      },
      {
        item: 'cilantro',
        quantity: '1',
        cookingMeasure: 'bunch',
        type: 'produce'
      },
      {
        item: 'parsley',
        quantity: '1',
        cookingMeasure: 'bunch',
        type: 'produce'
      },
    ],
    directions: ['Heat olive oil in a large sauté pan on medium heat. Add the chopped bell pepper and onion and cook for 5 minutes or until the onion becomes translucent.', 'Add garlic and spices and cook an additional minute.', 'Pour the can of tomatoes and juice into the pan and break down the tomatoes using a large spoon. Season with salt and pepper and bring the sauce to a simmer.', 'Use your large spoon to make small wells in the sauce and crack the eggs into each well. Cover the pan and cook for 5-8 minutes, or until the eggs are done to your liking.', 'Garnish with chopped cilantro and parsley.']
  },
  {
    name: 'No-Muffin Eggs Benny with Ghee Hollandaise',
    id: nanoid(),
    image: 'https://i.ibb.co/55swv9f/no-muffin-eggs-benny-with-ghee-hollandaise-84-web-1.jpg',
    category: 'Breakfast',
    cuisine: 'American',
    lifestyle: ['Whole30', 'Paleo', 'Gluten-Free', 'Dairy-Free'],
    prepTime: '15',
    cookTime: '25',
    totalTime: '40',
    yield: '6',
    description: 'These Eggs Benedict are every bit as good as the classic versions served over an English muffin. Except we swap the muffin for sweet potato fritters, making this dish Whole30 compliant.',
    ingredients: [
      {
        item: 'ghee',
        quantity: '1/2',
        cookingMeasure: 'cup',
        type: 'pantry item'
      },
      {
        item: 'egg',
        quantity: '3',
        cookingMeasure: 'large',
        type: 'dairy'
      },
      {
        item: 'dijon mustard',
        quantity: '1',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'lemon juice',
        quantity: '1',
        cookingMeasure: 'tsp',
        type: 'produce'
      },
      {
        item: 'sweet potato',
        quantity: '4',
        cookingMeasure: 'cups',
        type: 'produce'
      },
      {
        item: 'yellow onion',
        quantity: '1',
        cookingMeasure: 'small',
        type: 'produce'
      },
      {
        item: 'eggs',
        quantity: '7',
        cookingMeasure: 'large',
        type: 'dairy'
      },
      {
        item: 'arrowroot',
        quantity: '2',
        cookingMeasure: 'tbsp',
        type: 'pantry item'
      },
      {
        item: 'sea salt',
        quantity: '1/2',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'avocado oil',
        quantity: '1/4',
        cookingMeasure: 'cup',
        type: 'pantry item'
      },
      {
        item: 'white vinegar',
        quantity: '1',
        cookingMeasure: 'tbsp',
        type: 'pantry item'
      },
      {
        item: 'fresh flat-leaf parsley',
        quantity: '2',
        cookingMeasure: 'tbsp',
        type: 'produce'
      }
],
    directions: ['Prepare hollandaise: In a small saucepan, melt ghee. In a blender, combine egg yolks, Dijon, 1 tbsp tepid water and lemon juice. With motor running, stream in ghee. The sauce should be thick enough to coat the back of a spoon. Season with salt and additional lemon juice. Pour into a bowl and cover to keep warm. Set aside.', 'Prepare fritters: Using a towel, squeeze out excess water from potatoes. In a large bowl, combine potato, onion, 1 egg, arrowroot and salt; mix thoroughly. In a heavy skillet, heat oil on high. Working in batches, place 2 tbsp mixture into oil per fritter. Reduce to medium heat and flatten out with a spatula. Cook fritters until golden brown, about 3 minutes per side. Transfer to a paper towel–lined plate.', 'Meanwhile, bring a medium pot of water to a simmer. Add vinegar. Crack remaining 6 eggs into small bowls or cups. Use a wooden spoon to stir simmering water carefully around the rim of pot to create a circular motion. Working in 2 batches, add eggs, 1 at a time, to center of pot. Return pot to a gentle simmer on low heat and cook eggs until set yet still runny in middle, about 3 minutes. Remove with a slotted spoon and drain on a paper towel. Repeat with remaining eggs.', 'On each serving plate, place 2 fritters and top with 1 egg. Drizzle sauce over top. Sprinkle with cayenne and parsley (if using).'],
  },
  {
    name: 'Whole30 Beef and Bacon Breakfast Bowl',
    id: nanoid(),
    image: 'https://i.ibb.co/PM4HrCN/Whole30-Beef-and-Bacon-Breakfast-Bowl.jpg',
    category: 'Breakfast',
    cuisine: 'American',
    lifestyle: ['Whole30', 'Dairy-Free'],
    prepTime: '20',
    cookTime: '30',
    totalTime: '50',
    yield: '6',
    description: 'Whole30 Beef and Bacon Breakfast Bowl. Super easy to make and a great way to shake up your Whole30 breakfast game. Topped off with fresh herbs and a creamy tahini sauce, all on a bed of cauliflower rice. De-lish!',
    ingredients: [
      {
        item: 'ghee',
        quantity: '2',
        cookingMeasure: 'tbsp',
        type: 'pantry item'
      },
      {
        item: 'ground beef',
        quantity: '2',
        cookingMeasure: 'pounds',
        type: 'meat'
      },
      {
        item: 'bacon',
        quantity: '6',
        cookingMeasure: 'strips',
        type: 'meat'
      },
      {
        item: 'sea salt',
        quantity: '1/2',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'black pepper',
        quantity: '2',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'fresh sage',
        quantity: '3',
        cookingMeasure: 'tsp',
        type: 'produce'
      },
      {
        item: 'garlic powder',
        quantity: '1',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'dried rosemary',
        quantity: '1/2',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'dried chives',
        quantity: '1/2',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'dried thyme',
        quantity: '1/2',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'red chili pepper flakes',
        quantity: '1',
        cookingMeasure: 'tsp',
        type: 'pantry item'
      },
      {
        item: 'tahini',
        quantity: '3/4',
        cookingMeasure: 'cups',
        type: 'condiment'
      },
      {
        item: 'water',
        quantity: '3',
        cookingMeasure: 'tbsp',
        type: null
      },
      {
        item: 'lemon juice',
        quantity: '2',
        cookingMeasure: 'tsp',
        type: 'produce'
      },
      {
        item: 'cauliflower rice',
        quantity: '2',
        cookingMeasure: 'cups',
        type: 'produce'
      },
      {
        item: 'fresh parsley',
        quantity: '2',
        cookingMeasure: 'tbsp',
        type: 'produce'
      },
],
    directions: ['In a large bowl, combine the beef and bacon with all the seasoning and spices. Be sure to adjust the red chili pepper flakes amount depending on your tolerance. Mix well with your hands and make sure everything has been dispersed as evenly as possible. Form 12 patties from the mixture about 1/2" to 3/4" thick. Set next to the stove.', 'Heat a large sauté pan over medium to medium-high heat and add half of the ghee. Once the pan has heated up for about 2 minutes, add the patties and fry on each side for 2-3 minutes or until cooked through and browned on the outside. Keep a close eye on them, as you do not want them to overcook!', 'You will most likely have to do this in two batches. Remove the patties from the pan and set aside and work on the rest of the patties, repeating the same steps.', 'In a small bowl, whisk together tahini sauce, water and lemon juice. Be sure to adjust the amount of water, based on how thick the sauce turns out. It is very forgiving!', 'Serve on top of a bed of cauliflower rice', 'Top off with fresh herbs and soft boiled eggs if you woud like.'],
  }
]

app.get('/recipes', (req, res) => {
  // server receives:
  console.log('queryObject: ', url.parse(req.url, true).query);
  res.json(recipes)
})


const getData = (query) => {
  if (query === '') return [];
  return filteredRecipes(query);
}

// useEffect & listen

const filteredRecipes = (arr, query) => {
  var results = [];
  if (query === '') return arr;
  for (var recipe of recipes) {
    for(var i=0; i < recipe.ingredients.length; i++) {
      if(recipe.ingredients[i].item.includes(query)) {
        results.push(recipe);
      }
    }
  }
  return results;
}

module.exports = app;
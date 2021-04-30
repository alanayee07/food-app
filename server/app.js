import express from "express";
import bodyParser from "body-parser";
import path from "path";

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
  { name: 'nom1', content: 'some random stuff'},
  { name: 'nom100', content: 'this is not nom'}
]

app.get('/recipes', (req, res) => {
  console.log('recipes route');
  res.json(recipes)
})

module.exports = app;
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

const chef = require('./data/chefData.json');
const recipe = require('./data/recipeData.json');
//This file provide data for server side.There have two json data file but 
//i am using on the project eating well that chefData.json flie only .There have adjust my recipes information.   

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef server is running')
});

app.get('/chef', (req, res) => {
    res.send(chef);
})
app.get('/recipe', (req, res) => {
    res.send(recipe);
});

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectRecipe = chef.find(item => item.id === +id);
    res.send(selectRecipe);
})
app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    const selectRecipe = recipe.find(item => item.id === +id);
    res.send(selectRecipe);
})

app.get('/recipe/categories/:id', (req, res) => {
    const id = req.params.id;
    const chefRecipeCategory = recipe.filter(item => item.recipeId === +id);
    res.send(chefRecipeCategory);
})


app.listen(port, () => {
    console.log(`Server running on port${port}`)
})












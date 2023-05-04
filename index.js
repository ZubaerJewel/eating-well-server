const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

const chef = require('./data/chefData.json');
const recipe = require('./data/recipeData.json');

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












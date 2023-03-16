// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 3000

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Load our fruit data from models folder
const pokemon = require('./models/pokemon')

// Load the fruit model
const Pokemon = require('./models/PokemonModel')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

// Load the method-override middleware
const methodOverride = require('method-override')

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App')
})

app.get('/pokemon', async (req, res) => {
    const pokemons = await Pokemon.find()
    res.render('./Index', { pokemons: pokemons })
})

app.get('/pokemon/new', (req, res) => {
    res.render('./New')
})

app.get('/pokemon/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.render('./Show', { pokemon: pokemon})
    } catch(err) {
        console.log(err.message)
    }

})

app.post('/pokemon', async (req, res) => {
    try {
        const pokemon = await Pokemon.create(req.body)
        console.log(pokemon)
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/pokemon')
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})
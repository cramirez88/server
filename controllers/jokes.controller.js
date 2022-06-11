const Joke = require('../models/jokes.model')

const createJoke = (req, res) => {
  Joke.create(req.body)
  .then((joke) => res.json(joke))
  .catch(err => console.log(err))
}

const getAllJokes = (req, res) => {
  Joke.find()
  .then((allJokes) => res.json(allJokes))
  .catch(err => console.log(err))
}


const getOne = (req, res) => {
  Joke.findOne({_id: req.params._id})
  .then(Ajoke => res.json(Ajoke))
  .catch(err => console.log(err))
}

const updateJoke = (req, res) => {
  Joke.findOneAndUpdate({_id: req.params._id}, req.body, {
    new: true,
    runValidators: true
  })
  .then(updatedJoke => res.json(updatedJoke))
  .catch(err => console.log(err))
}


const deleteJoke = (req, res) => {
  Joke.deleteOne({_id: req.params._id})
  .then(deletedJoke => res.json(deletedJoke))
  .catch(err => console.log(err))
}







module.exports = {
  getAllJokes,
  createJoke,
  getOne,
  updateJoke,
  deleteJoke
}
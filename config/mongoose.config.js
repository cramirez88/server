const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jokes_DB')

// mongoose.connect('mongodb://localhost/jokesdb', () => {
//   console.log('Connected, bro')
// })

.then(() => console.log('Established a connection to the database'))
.catch(err => console.log('Something is wrong with the database', err))
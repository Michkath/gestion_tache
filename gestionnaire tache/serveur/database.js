const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://michkathaboudou:89XBvnpaB7MURUWF@cluster0.r99iyyr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
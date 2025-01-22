const express = require('express');

// On définit app avec Express
const app = express();

// On définit une variable avec le port que l'on souhaite utiliser
const PORT = 1245;

// On définit la route et le message que l'on souhaite envoyer
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// On écoute sur le port défini plus haut
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

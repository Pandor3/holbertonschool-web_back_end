const http = require('http');

// Ceci permet de créer un serveur HTTP et de définir le type de contenu de la réponse
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Ceci envoie la réponse au client
  res.end('Hello Holberton School!');
});

// Ceci permet d'écouter sur le port 1245 et d'avoir une confirmation via un message sur le terminal
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.export = app;

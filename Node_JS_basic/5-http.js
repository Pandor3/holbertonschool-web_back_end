const http = require('http');
const fs = require('fs');
const path = require('path');

// Ceci permettra de lire et traiter le fichier CSV comme lors des task 2 et 3
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Ceci permet de diviser en lignes et de filtrer les lignes vides.
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        resolve('No valid students data in the database');
        return;
      }

      // Comme dans les task 2 et 3, cela permet d'extraire les en-têtes et les étudiants.
      const students = lines.slice(1).map((line) => line.split(','));

      // Ceci permettra d'organiser les étudiants par champs (fields)
      const fields = {};
      for (const student of students) {
        const [firstname, , , field] = student.map((item) => item.trim());
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      // Ceci permet d'afficher le message dans lesquelles se trouveront nos données
      let output = `Number of students: ${students.length}`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }
      resolve(output);
    });
  });
}

// Création du serveur HTTP
const app = http.createServer(async (req, res) => {
  const databasePath = path.resolve(__dirname, process.argv[2] || 'database.csv');
  let output = 'This is the list of our students\n';

  // Si l'utilisateur demande à accéder à la route '/'
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Si l'utilisateur demande à accéder à la route '/students'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    console.log('This is the list of our students\n');

    // Ceci est utilisé pour gérer la lecture de la database de manière asynchrone
    try {
      const studentData = await readDatabase(databasePath);
      output += studentData;
    } catch (err) {
      output += err.message;
    }
    res.end(output);
  } else {
    // Ceci est le message d'erreur si le chemin n'est pas trouvé vers la database
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Ceci montre que le serveur écoutera sur le port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

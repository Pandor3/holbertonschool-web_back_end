const express = require('express');
const fs = require('fs').promises;

// On définit app avec Express
const app = express();

async function countStudents(path) {
  try {
    // Ceci permettra de lire le fichier de manière asynchrone
    const data = await fs.readFile(path, 'utf-8');

    // Ceci permettra de diviser en lignes, ce qui rendra le tout plus lisible.
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Ceci permet de vérifier si le fichier à un en-tête
    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

    // Ceci permet de filtrer les données via l'en-tête et de les séparer dans un tableau
    const students = lines.slice(1).map((line) => line.split(','));
    let result = `Number of students: ${students.length}\n`;

    // Ceci permet d'organiser les étudiants par champ (fields)
    const fields = {};
    for (const student of students) {
      const [firstname, , , field] = student.map((item) => item.trim());
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    // Ceci permet de log les étudiants par champs (fields)
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }
    }
    return result.trim();
  } catch (err) {
    // Ceci permet de gérer les cas d'erreurs au cas où la database n'est pas accessible
    throw new Error('Cannot load the database');
  }
}

// On définit la route et le message que l'on souhaite envoyer
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// On définit la route students et on attends de manière asynchrone les données envoyées
// Par countStudents.
app.get('/students', async (req, res) => {
  try {
    const database = process.argv[2];
    const studentsData = await countStudents(database);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// On écoute sur le port défini (1245)
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

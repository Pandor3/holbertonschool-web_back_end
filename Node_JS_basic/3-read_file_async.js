const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Ceci permettra de lire le fichier de manière asynchrone
    const data = await fs.readFile(path, 'utf-8');

    // Ceci permettra de diviser en lignes, ce qui rendra le tout plus lisible.
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Ceci permet de vérifier si le fichier à un en-tête
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Ceci permet de filtrer les données via l'en-tête et de les séparer dans un tableau
    const students = lines.slice(1).map((line) => line.split(','));
    console.log(`Number of students: ${students.length}`);

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
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
        );
      }
    }
  } catch (err) {
    // Ceci permet de gérer les cas d'erreurs au cas où la database n'est pas accessible
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

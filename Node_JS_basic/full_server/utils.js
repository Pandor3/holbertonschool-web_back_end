const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('No students found in the database');
    }

    const fields = {};
    const students = lines.slice(1).map((line) => line.split(','));

    for (const student of students) {
      const [firstname, , , field] = student.map((item) => item.trim());

      if (!fields[field]) {
        fields[field] = [];
      }

      return fields;
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;

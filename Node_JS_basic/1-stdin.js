// Ceci importe le module process pour s'occuper des entrées et sorties
process.stdout.write('Welcome to Holberton School, what is your name ?\n');

// Ceci va créer un écouteur pour l'entrée standard
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

// Ceci permettra d'écouter afin de détecter la fin de l'entrée utilisateur.
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  process.stdout.write(`Your name is: ${input}\n`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

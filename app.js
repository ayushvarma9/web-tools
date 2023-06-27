const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/execute', (req, res) => {
  const command = req.body.command;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(Error executing command: ${error.message});
      res.status(500).json({ error: 'Error executing command' });
    } else {
      console.log(Command output: ${stdout});
      res.status(200).json({ output: stdout });
    }
  });
});

app.listen(port, () => {
  console.log(Server listening on port ${port});
});
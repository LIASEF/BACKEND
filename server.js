const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Указываем express использовать сборку React приложения
app.use(express.static(path.join(__dirname, 'my-dynamic-ui', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-dynamic-ui', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
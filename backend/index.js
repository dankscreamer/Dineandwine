const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Example endpoint
app.get('/api/wines', (req, res) => {
  res.json([{ name: 'Merlot', region: 'France' }]);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

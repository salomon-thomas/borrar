// Create Express app
const app = require('express')();
const helmet = require('helmet');
const cors = require('cors');
app.use(cors())
app.use(helmet())
// API route handler
app.get('/', (req, res) => {
    res.status(201).send({ status: true })
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/products', (req, res) => {
    res.status(200).send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
    
    res.status(201).send('A new product has been added.');
});

app.get('/categories', (req, res) => {
    res.status(200).send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
    
    res.status(201).send('A new category has been added.');
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// const express = require('express');
// const app = express();
// const port = 4000;

// app.get('/products', (req, res) => {
//     res.send('Here is the list of all products.');
// });

// app.post('/products', (req, res) => {
//     res.send('A new product has been added.');
// });

// app.get('/categories', (req, res) => {
//     res.send('Here is the list of all categories.');
// });

// app.post('/categories', (req, res) => {
//     res.send('A new category has been added.');
// });

// // 404 handler for undefined routes
// app.use('*', (req, res) => {
//     res.status(404).send('<h1>404 - Page Not Found</h1>');
// });

// app.listen(port, () => {
//     console.log(`http://localhost:${port}`);
// });

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


// File Importation
const ConnectDB = require('./Configuration/Database_Conn');
const AdminRoutes = require('./Routes/AdminRoutes');
const ClientRoutes = require('./Routes/ClientRoutes');

// Connect to the database
ConnectDB();

// Middlewares
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

// Routes
// adding middlwares -1
app.use('/Admin', AdminRoutes);
app.use('/Client', ClientRoutes);

//404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const app = express();

// MongoDB
const connectDB = require('./db');
connectDB(); // Solo si usas MongoDB


// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

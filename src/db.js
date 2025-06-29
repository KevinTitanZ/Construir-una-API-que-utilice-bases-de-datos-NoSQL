const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/laboratorio'); // 👈 ESTA ES LA LÍNEA CORRECTA
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error conectando a MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

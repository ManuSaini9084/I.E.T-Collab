const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/Product'); // Import product routes
const buyerCartRoutes = require('./routes/buyerCart'); // Import buyer cart routes
const BuyerCartController = require('./controllers/BuyerCartController');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // Use product routes
app.use('/api/buyer/cart', buyerCartRoutes); // Use buyer cart routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

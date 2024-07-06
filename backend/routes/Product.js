const express = require('express');
const multer = require('multer'); // Import multer for file uploads
const Product = require('../models/Product');
const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original filename
  },
});

const fileFilter = (req, file, cb) => {
  // Accept only images
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('File type not supported'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Add Product with image upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, contact } = req.body;
    const product = new Product({
      name,
      description,
      price,
      contact,
      image: req.file.path.replace('\\', '/'), // Save image path to database
    });
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
});

// Get Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
});

// Update Product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
});

// Delete Product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send({ message: 'Product deleted' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
});

module.exports = router;

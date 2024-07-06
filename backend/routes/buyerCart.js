const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
// Add product to buyer's cart
router.post('/:productId', async (req, res) => {
    const { productId } = req.params;
    const { userId } = req.body; // Ensure userId is passed in the request body

    try {
      if (!userId) {
        return res.status(400).json({ error: 'userId is required' });
      }

      // Check if the product is already in the cart
      let cartItem = await Cart.findOne({ productId, userId });

      if (cartItem) {
        // If product already exists in cart, increase quantity
        cartItem.quantity += 1;
        await cartItem.save();
      } else {
        // If product doesn't exist in cart, create new cart item
        cartItem = new Cart({ productId, userId });
        await cartItem.save();
      }

      res.status(201).json(cartItem);
    } catch (error) {
      console.error('Error adding product to cart:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// Get buyer's cart items
router.get('/', async (req, res) => {
  const { userId } = req.query; // Assuming userId is sent as query parameter

  try {
    const cartItems = await Cart.find({ userId }).populate('productId');
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete product from buyer's cart
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Cart.findByIdAndDelete(id);
    res.json({ message: 'Product removed from cart' });
  } catch (error) {
    console.error('Error deleting product from cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

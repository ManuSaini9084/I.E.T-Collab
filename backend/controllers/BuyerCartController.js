const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  const productId = req.params.productId;
  
  try {
    const userId = req.query.userId; // Assuming userId is sent as query parameter

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Valid userId is required' });
    }

    let cartItem = await Cart.findOne({ productId, userId });

    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      cartItem = new Cart({ productId, userId });
      await cartItem.save();
    }

    res.status(200).json(cartItem);
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Failed to add product to cart' });
  }
};

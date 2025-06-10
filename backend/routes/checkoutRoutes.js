const express = require('express');
const Checkout = require('../models/Checkout');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const Order = require('../models/Order');
const { protect } = require('../middleware/authMiddleware');


// @rote POST /api/checkout
// @desc Create a new checkout
// @access Private

const router = express.Router();
router.post('/', protect, async (req, res) => {
    const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;
    if (!checkoutItems || checkoutItems.length === 0) {
        return res.status(400).json({ message: 'No items in checkout' });
    }

    try {
        // Create a new checkout
        const newCheckout = await Checkout.create({
            user: req.user._id,
            checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus: 'pending',
            isPaid: false,
        });

        res.status(201).json(newCheckout);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route GET /api/checkout/:id/pay
// @desc Update payment status of a checkout
// @access Private
router.put('/:id/pay', protect, async (req, res) => {
    const { paymentStatus, paymentDetails } = req.body;

    try {
        const checkout = await Checkout.findById(req.params.id);

        if (!checkout) {
            return res.status(404).json({ message: 'Checkout not found' });
        }

        if (paymentStatus === "Paid") {
            checkout.isPaid = true;
            checkout.paymentStatus = 'completed';
            checkout.paymentDetails = paymentDetails; // Assuming paymentDetails is an object with transaction details
            checkout.paidAt = Date.now();

            await checkout.save();

            res.status(200).json(checkout);
        } else {
            res.status(400).json({ message: 'Invalid payment status' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route POST /api/checkout/:id/finalize
// @desc Finalize a checkout and create an order
// @access Private

router.post('/:id/finalize', protect, async (req, res) => {
    try {
        const checkout = await Checkout.findById(req.params.id);

        if (!checkout) {
            return res.status(404).json({ message: 'Checkout not found' });
        }

       

        if (checkout.isPaid && !checkout.isFinalized) {
            try {
                const orderData = {
                    user: checkout.user,
                    orderItems: checkout.checkoutItems,
                    shippingAddress: checkout.shippingAddress,
                    paymentMethod: checkout.paymentMethod,
                    totalPrice: checkout.totalPrice,
                    isPaid: true,
                    paidAt: checkout.paidAt,
                    paymentStatus: "Paid",
                    isDelivered: false,
                    paymentDetails: checkout.paymentDetails
                };

                

                const finalOrder = await Order.create(orderData);

                checkout.isFinalized = true;
                checkout.finalizedAt = Date.now();
                await checkout.save();

                await Cart.findOneAndDelete({ user: checkout.user });

                res.status(201).json(finalOrder);
            } catch (orderError) {
                
                res.status(500).json({
                    message: 'Failed to create order',
                    error: orderError.message
                });
            }
        } else if (checkout.isFinalized) {
            return res.status(400).json({ message: 'Checkout already finalized' });
        } else {
            return res.status(400).json({ message: 'Checkout not paid yet' });
        }

    } catch (error) {
        
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


module.exports = router;
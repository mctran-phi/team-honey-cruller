const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createCustomer = asyncHandler(async (req, res) => {
    try {
        const customer = await stripe.customers.create({
            email: req.body.email,
            name: req.body.name
        });


        res.status(200).json({
            customer: customer
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

exports.retrieveCustomer = asyncHandler(async (req, res) => {
    try {
        const customer = await stripe.customers.retrieve(req.params.id);

        res.status(200).json({
            customer: customer
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

exports.deleteCustomer = asyncHandler(async (req, res) => {
    try {
        const deleteCustomer = await stripe.customer.del(req.params.id);

        res.status(200).json(deleteCustomer)
    } catch (err) {
        res.status(500).json(err);
    }
});

exports.setUpIntents = asyncHandler(async (req, res) => {
    try {
        const setUpIntents = await stripe.setupIntents.create({});

        res.status(200).json({
            clientSecret: setUpIntents.client_secret
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

exports.createPaymentMethod = asyncHandler(async (req, res) => {
    try {
        const createPayment = await stripe.paymentMethods.create({
            type: req.body.type,
            // req.body.card should be an object with number, expMonth, expYear, and cvc inside.
            card: req.body.card
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

exports.createCheckoutSession = asyncHandler(async (req, res) => {
    try {
        const checkoutSession = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: [{
                price: req.body.priceId,
                // For metered billing, do not pass quantity
                quantity: 1,
            }, ],
            success_url: 'https://example.com/success.html?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'https://example.com/canceled.html'
        })

        res.status(200).json({
            CheckoutSession: checkoutSession
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

exports.chargeCard = asyncHandler(async (req, res) => {
    try {
        const chargeCard = await stripe.paymentIntents.create({
            amount: req.body.amount,
            customer: req.body.customerId,
            currency: 'usd'
        });

        res.status(200).json({
            chargeCard: chargeCard
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
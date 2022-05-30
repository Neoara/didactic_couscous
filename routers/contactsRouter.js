const express = require("express");
const contactsRouter = express.Router();

contactsRouter.get('/', (req, res) => {
    res.render('contacts', {
        email: 'Batyr.serikovich@gmail.com',
        phone: 87007776162,
        adresses: ['Abaya 24', 'Kenesary 40', 'Auezova 22', 'Orynbor 52']
    });
});

module.exports = contactsRouter;
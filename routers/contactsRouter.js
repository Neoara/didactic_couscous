const express = require("express");
const laptopsRouter = express.Router();

let laptopsArray = [
    {
        id: 1, 
        name: "Dell",
        model: "XPS 13",
        price: "1597,35$",
        categoryName: 'Gamming'
    },
    {
        id: 2, 
        name: "Lenovo",
        model: "Legion S7",
        price: "1731,58$",
        categoryName: 'Gamming'
    },
    {
        id: 3, 
        name: "HP",
        model: "OMEN",
        price: "2666,95$",
        categoryName: 'Gamming'
    },
    {
        id: 4, 
        name: "Evening",
        model: "Dress",
        price: "1796,53$",
        categoryName: 'Gamming'
    },
    {
        id: 5, 
        name: "Acer",
        model: "Nitro 5",
        price: "1597,35$",
        categoryName: 'Gamming'
    },

]

contactsRouter.get('/', (req, res) => {
    res.render('contacts', {
        email: 'Batyr.serikovich@gmail.com',
        phone: 87007776162,
        adresses: ['Abaya 24', 'Kenesary 40', 'Auezova 22', 'Orynbor 52']
    });
});

module.exports = laptopsRouter;
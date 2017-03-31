var Product = require('../models/products');
var mongoose = require('mongoose');

mongoose.connect('52.178.26.249:27017/shop-nodejs');

var products = [
    new Product({
        imagePath: "/images/fender.jpg",
        title: "Fender Stratocaster",
        description: "Great guitar",
        price: 1200
    }),
    new Product({
        imagePath: "/images/lp.jpg",
        title: "Gibson Les Paul",
        description: "Huge tone and nice playing!",
        price: 1800
    }),
    new Product({
        imagePath: "/images/es.jpg",
        title: "Gibson ES",
        description: "Jazz-ready guitar",
        price: 1800
    }),
    new Product({
        imagePath: "/images/ex.jpg",
        title: "Gibson Explorer",
        description: "For hard stuff!",
        price: 1800
    }),
    new Product({
        imagePath: "/images/fv.jpg",
        title: "Gibson Flyig V",
        description: "Must-have of all trashers!",
        price: 1800
    })
];

var done = 0;
for (var i = 0; i < products.length; i++)
{
        products[i].save(function(err, result){
        done++;
        if(done === products.length){
            debugger;
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
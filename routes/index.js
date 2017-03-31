var express = require('express');
var router = express.Router();
var session = require('express-session');
var Product = require('../models/products');
var Cart = require('../models/cart');

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err, docs){
    var chunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      chunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Sklep gitarowy', products: chunks });
  });
});



router.get('/products/', function(req, res){
  
  var products = Product.find(function(err, docs){
      res.json(docs);
  }); 
});

router.get('/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  console.log(req);
  debugger;
  var cart = new Cart(req.session.cart ? req.session.cart: {});

  Product.findById(productId, function(err, product){
    if(err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  })
});
module.exports = router;

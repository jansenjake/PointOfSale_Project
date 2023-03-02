//  EXPRESS //
const express = require('express');
//  PATH //
const path = require('path');
//  BODY-PARSER //
const bodyParser = require('body-parser');
// ROUTER //
const route = express.Router();

//  CALLING USER, PRODUCT //
const {User, Product} = require("../models/ProjectModel.js");
//  CREATE A USER INSTANCE //
const user = new User();
//  CREATE A PRODUCT INSTANCE //
const product = new Product();


route.get('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, ''));
})


// USERS ROUTER //

// *****LOGIN****** //
route.post('/login', bodyParser.json(), (req, res)=> {
    user.login(req, res);
})

//  *****RETRIEVE ALL USERS***** //
route.get('/Users', (req, res)=> {
    user.fetchUsers(req, res);
});

// *****UPDATE***** //
route.put('/Users/:id', bodyParser.json(), (req, res)=> {
    user.updateUser(req, res);
});

// *****REGISTER***** //
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})

//  *******DELETE****** //
route.delete('/Users/:id', (req, res)=> {
    user.deleteUser(req, res);
});


//  PRODUCTS //

// *****FETCH ALL PRODUCTS***** //
route.get('/Products', (req, res)=> {
    product.fetchProducts(req, res);
})

//  *****FETCH A SINGLE PRODUCT***** //
route.get('/Products/:id', (req, res)=> {
    product.fetchProduct(req, res);
})

// *****ADD A NEW PRODUCT**** //
route.post('/Products', bodyParser.json(), (req, res)=> {
    product.addProduct(req, res);
})

//  *****UPDATE A PRODUCT**** //
route.put('/Products/:id', bodyParser.json(), (req, res)=> {
    product.updateProduct(req, res);
})

//  ****DELETE A PRODUCT**** //
route.delete('/Products/:id', (req, res)=> {
    product.deleteProduct(req, res);
})

module.exports = route;

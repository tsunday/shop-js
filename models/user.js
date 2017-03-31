var mongoose =require('mongoose');

var userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true}
})
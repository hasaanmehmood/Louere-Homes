const mongoose = require('mongoose');
const conn = require('../config/db');

var showProfile = new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    address:String,
    city:String,
    state:String,
    stay:String,
    image:String,
    type:String
},{
    timestamps:true
})

let myprofile = conn.model('Profile',showProfile,'Profile');
module.exports = myprofile;
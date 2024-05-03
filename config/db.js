const mongoose = require("mongoose");
require('dotenv').config();
module.exports = connect = async() => {
    try {
        const response = await mongoose.connect("mongodb+srv://reactmern7071:abhinav77@cluster0.lfnwgqi.mongodb.net/blog?retryWrites=true&w=majority");
        console.log('connection created');
    } catch (error) {
        console.log(error);
    }
}
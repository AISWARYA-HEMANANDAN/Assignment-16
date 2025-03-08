const mongoose = require('mongoose')
const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://ktaiswarya:oox2eDPdF4VXOyqV@cluster0.af5jd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Db connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = dbConnection



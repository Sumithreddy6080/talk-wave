const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
           

        });

        console.log(`mongodb connected : ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`error : ${error.message}`.red.bold);
        process.exit();
    }
}



module.exports = connectDB;
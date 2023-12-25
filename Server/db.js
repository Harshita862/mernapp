const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB successfully");
        return mongoose.connection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

 const fetchDatabaseData = async () => {
     try {
         const connection = await connectDB();
         const SampleData = await connection.db.collection("SampleData").find({}).toArray();
         const FoodCategoryData = await connection.db.collection("FoodCategoryData").find({}).toArray();
         await mongoose.connection.close();

         return { SampleData, FoodCategoryData };
     } catch (error) {
         console.error("Error fetching data:", error);
         throw error;
     }
 };
 module.exports = fetchDatabaseData; 

import mongoose from "mongoose";

let connected = false;

const connectDB = async() => {
    mongoose.set('strictQuery', true); //only fields specificied in our scheme will be saved in database

    //if the database is already connected, don't connect again
    if(connected){
        console.log('MongoDB is connected');
        return;
    }

    //connect to MongoDB

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    } catch(error){
        console.log("error while connecting MongoDB ",error);
    }
};

export default connectDB;
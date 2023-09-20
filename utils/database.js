import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log(`mongodb is already connected`);
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        dbName: "sharePrompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      });
      isConnected = true;
      console.log('Mongo db is connected');
    } catch (error) {
      console.error(error);
    }
  }
};
export default connectToDB

import mongoose from "mongoose";

mongoose.set("strictQuery", false);

/**
 * It connects to the MongoDB database using the Mongoose library.
 * @returns The connection object.
 */
const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;

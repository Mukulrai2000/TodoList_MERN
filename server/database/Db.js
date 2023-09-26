import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-izjptll-shard-00-00.ypxjmv3.mongodb.net:27017,ac-izjptll-shard-00-01.ypxjmv3.mongodb.net:27017,ac-izjptll-shard-00-02.ypxjmv3.mongodb.net:27017/?ssl=true&replicaSet=atlas-7lt2u3-shard-0&authSource=admin&retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database");
  });
};

export default Connection;

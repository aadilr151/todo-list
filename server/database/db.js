import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://${username}:${password}@ac-3dktwnq-shard-00-00.w3985bo.mongodb.net:27017,ac-3dktwnq-shard-00-01.w3985bo.mongodb.net:27017,ac-3dktwnq-shard-00-02.w3985bo.mongodb.net:27017/?ssl=true&replicaSet=atlas-14lnwo-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;
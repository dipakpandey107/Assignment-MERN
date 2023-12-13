import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {createRequire} from "module";
import cookieParser from 'cookie-parser';
// import dotnev from "dotnev";
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';

// dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
    origin: true,
    credentials: true
}

//database connection
mongoose.set("strictQuery", false);
const connect = async()=>{
    try {
        await mongoose.connect("mongodb+srv://vinay:vinay@tourbooking.4ez0yvi.mongodb.net/tour_booking?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (err) {
        console.log("Could not connect");
    }
};

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);


app.listen(port, () => {
    connect();
    console.log('server listening on', port);
})
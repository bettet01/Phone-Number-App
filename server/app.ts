// server imports
import express from 'express';
import bodyParser from 'express';
import cors from 'cors';
// route imports
import phoneNumberRoutes from "./routes/phoneNumberRoutes";
import userRoutes from "./routes/userRoutes";


// db connection
import mongoose, {ConnectionOptions} from 'mongoose'
import {initializeRoles} from "./auth/initilizeRoles";
// db setup
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.yxwjh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options: ConnectionOptions = { autoCreate: true, autoIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

// initialize server
const app = express();
app.use(bodyParser.json());

// cors setup
app.use(cors({origin: "http://localhost:3000"}))

// server routes
app.use(phoneNumberRoutes);
app.use(userRoutes);
app.get('/', (req,res) => res.send('Phone Number Api'));


// port setup
const PORT: string | number = process.env.API_PORT || 8000
// start server
mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
            initializeRoles();
        })
    )
    .catch(error => {
        throw error
    })
import express from 'express';
import bodyParser from 'express';

// route imports
import phoneNumberRoutes from "./routes/phoneNumberRoutes";

// db connection
import mongoose, {ConnectionOptions} from 'mongoose'

// port setup
const PORT: string | number = process.env.PORT || 8000

// mongoose setup
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.yxwjh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options: ConnectionOptions = { autoCreate: true, autoIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

// initialize server
const app = express();
app.use(bodyParser.json());


// server routes
app.use(phoneNumberRoutes);
app.get('/', (req,res) => res.send('Phone Number Api'));


// start server
mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch(error => {
        throw error
    })
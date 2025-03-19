import express, { application } from 'express'
import cors from 'cors'
import 'dotenv/config'
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';



const app=express();


app.use(cors());
app.use(express.json())
app.use(bodyParser.json())

connectDB()



app.use('/api/auth',authRoutes)
app.use("/api/products", productRoutes);

const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
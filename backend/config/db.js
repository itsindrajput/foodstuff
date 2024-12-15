import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ramanuj:rama12345678@cluster0.vdvqy.mongodb.net/food-del1').then(()=>console.log("DB Connected"));
   
}


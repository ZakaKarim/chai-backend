// import dotenv from "dotenv";
import "dotenv/config";
import connectDB from "./db/index.js";

//well is ma error aya tha but i slove it thanks to Allah well agar tum second wala
// way se dotenv ko config kar raha ho tu is ko comment kar do your code will work
//but agar phle wala way hai to is ko use karnai ho gay otherwise error aya gay
// dotenv.config({
//   path: "./.env",
// });

connectDB();

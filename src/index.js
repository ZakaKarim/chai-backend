// import dotenv from "dotenv";
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

//well is ma error aya tha but i slove it thanks to Allah well agar tum second wala
// way se dotenv ko config kar raha ho tu is ko comment kar do your code will work
//but agar phle wala way hai to is ko use karnai ho gay otherwise error aya gay
// dotenv.config({
//   path: "./env",
//   path:"./.env"
// });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Listenening on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

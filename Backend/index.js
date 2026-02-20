import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";

dotenv.config();

const app = express();


app.use(cors()); 

app.use(express.json());


app.get("/", (req, res) => {
  res.send("API RUNNING 🚀");
});


app.use("/users", UserRoute);


const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("SERVER STARTED ON", PORT);
});


(async () => {
  try {
    await db.authenticate();
    console.log("Database connected.");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
})();


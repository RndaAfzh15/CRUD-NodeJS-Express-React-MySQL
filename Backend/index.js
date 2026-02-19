import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";

dotenv.config();

const app = express();

/*
  ===== CORS (SIMPLE MODE DULU) =====
*/
app.use(cors()); // sementara buka semua biar pastiin bukan CORS config yg salah

app.use(express.json());

/*
  ===== TEST ROOT =====
*/
app.get("/", (req, res) => {
  res.send("API RUNNING 🚀");
});

/*
  ===== ROUTES =====
*/
app.use("/users", UserRoute);

/*
  ===== START SERVER DULU =====
*/
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("SERVER STARTED ON", PORT);
});

/*
  ===== CONNECT DATABASE (BELAKANGAN) =====
*/
(async () => {
  try {
    await db.authenticate();
    console.log("Database connected.");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
})();

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";

dotenv.config();

const app = express();

/*
  ===== CORS CONFIG =====
*/
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "https://crud-node-js-express-react-my-sql.vercel.app",
        "http://localhost:3000",
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

/*
  ===== ROUTES =====
*/
app.use("/users", UserRoute);

app.get("/", (req, res) => {
  res.send("API RUNNING 🚀");
});

/*
  ===== SERVER START =====
  Server start dulu biar gak 404 kalau DB error
*/
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("SERVER STARTED ON", PORT);
});

/*
  ===== DATABASE CONNECT =====
*/
(async () => {
  try {
    await db.authenticate();
    console.log("Database connected.");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
})();

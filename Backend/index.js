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
    origin: "https://crud-node-js-express-react-my-sql.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

/*
  ===== ROUTES =====
*/
app.use("/users", UserRoute);

/*
  ===== TEST ROUTE =====
*/
app.get("/", (req, res) => {
  res.send("API RUNNING 🚀");
});

/*
  ===== DATABASE + SERVER START =====
*/
(async () => {
  try {
    await db.authenticate();
    console.log("Database connected.");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("DB connection failed:", error);
  }
})();

import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// ✅ Gunakan port dari environment Railway (process.env.PORT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

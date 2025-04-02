import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();

const PORT = parseInt(process.env.PORT || "3000");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ test");
});

// 🔥 Główna funkcja startowa
const startServer = async () => {
  try {
    await connectDB(); // najpierw łączymy z Mongo

    app.listen(PORT, () => {
      console.log(`🚀 Server is working on port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to DB. Server not started.");
    console.error(error);
    process.exit(1); // zakończ proces jeśli baza nie działa
  }
};

startServer();


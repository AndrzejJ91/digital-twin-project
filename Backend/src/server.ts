import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import maschineRoutes from "./routes/maschinesRoutes";
import { startMqttClient } from "./config/mqtt";


dotenv.config();

const PORT = parseInt(process.env.PORT || "3000");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ test");
});


// Eksportujemy app do testów
export default app;

// 🔥 Główna funkcja startowa
const startServer = async () => {
  try {
    await connectDB(); // najpierw łączymy z Mongo
    await startMqttClient();

    app.listen(PORT, () => {
      console.log(`🚀 Server is working on port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to DB. Server not started.");
    console.error(error);
    process.exit(1); // zakończ proces jeśli baza nie działa
  }
};



if (require.main === module) {
  startServer();
}


app.use("/api/maschine", maschineRoutes);
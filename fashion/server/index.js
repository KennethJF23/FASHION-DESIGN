import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js"; // Ensure this file exists!

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("http://localhost:5002/api/v1/dalle", dalleRoutes); // Ensure this is correctly set up!

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

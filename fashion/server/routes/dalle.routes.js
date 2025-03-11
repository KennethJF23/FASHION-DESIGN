import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env file
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("Received Prompt:", prompt); // ✅ Debugging Log

    const response = await openai.images.generate({
      model: "dall-e-3", // Use "dall-e-2" if needed
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    console.log("OpenAI Response:", response); // ✅ Debugging Log

    if (!response || !response.data || !response.data[0].b64_json) {
      console.error("Error: No image received from OpenAI", response);
      return res.status(500).json({ error: "Failed to generate image" });
    }

    res.status(200).json({ photo: response.data[0].b64_json });
  } catch (error) {
    console.error("DALL·E API Error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

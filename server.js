const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/tiktok", async (req, res) => {
  const videoUrl = req.query.url;
  if (!videoUrl) return res.status(400).json({ error: "URL tidak boleh kosong." });

  try {
    const apiUrl = `https://api.siputzx.my.id/api/tiktok/v2?url=${encodeURIComponent(videoUrl)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data dari API." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy aktif di port ${PORT}`);
});

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("LX ARAFAT BOT is online 🤖");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "online",
    bot: "LX ARAFAT BOT",
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`LX ARAFAT BOT server running on port ${PORT}`);
});

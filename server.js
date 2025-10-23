import express from "express";
const app = express();

// ✅ Serve everything in the "public" folder at /static
app.use("/static", express.static("public"));

app.get("/", (_, res) => {
  res.send("✅ Avatar hosting server running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

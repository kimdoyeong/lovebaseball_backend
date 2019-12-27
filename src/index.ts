import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost/lovebaseball").then(() => {
  app.listen(PORT, () => console.log(`Lovebaseball server started at ${PORT}`));
});

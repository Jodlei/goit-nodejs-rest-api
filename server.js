const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Yurii:4DnlcM5TaRbCnsIR@cluster0.7e3tlar.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log(
        "Server running. Database connection successful. Use our API on port: 3000"
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

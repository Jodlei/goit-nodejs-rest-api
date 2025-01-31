const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Database connection successful.");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

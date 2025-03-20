const express = require("express");
const app = express();
const dbConnection = require("./config/db");
const routes = require("./routes/subscriberRoutes");
const cors = require("cors");


dbConnection();

app.use(cors())
app.use(express.json());
app.use("/api",routes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

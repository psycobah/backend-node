const express = require("express");
const app = express();
const { PORT } = require("./config/config");
const cors = require("cors");
const apiRoutes = require("./routes/routes");
const dbConnection = require("./config/db-connection");

app.set("port", PORT);

//
app.use(cors());
app.use(express.json());

//routes
app.use("/api", apiRoutes);

//server
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server listenning on port ${app.get("port")}...`);
});

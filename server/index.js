const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
    getCompliment,
    getFortune,
    addFortune,
    deleteFortune,
    editFortune,
  } = require("./controller");
  
  app.get("/api/compliment", getCompliment);
  app.get("/api/fortunes", getFortune);
  app.post("/api/addFortune", addFortune);
  app.delete("/api/deleteFortune/:id", deleteFortune);
  app.put("/api/editFortune/:id", editFortune);
  
  app.listen(4000, () => console.log("Server running on 4000"));

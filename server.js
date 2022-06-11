require("./config/mongoose.config");
const express = require("express");
const app = express();
    

    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyJokesRoutes = require("./routes/jokes.routes");
AllMyJokesRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
const express = require(`express`);
const dotenv = require(`dotenv`);

//load env variables from config.env...
dotenv.config({path: './Config/config.env'});

//initialise our app with express...
const app = express();
const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`));
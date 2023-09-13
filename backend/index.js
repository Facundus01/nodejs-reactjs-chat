// imports
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require('dotenv').config();

const private_key = process.env.PRIVATE_KEY;
const api_rest = process.env.API_REST;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
try {
    const r = await axios.put(
        api_rest,
        {username: username, secret: username, first_name: username},
        {headers:{"private-key":private_key}}
        );
        console.log(r.data)
    return res.status(r.status).json(r.data)
} catch (e) {
    return res.status(404).json(e.response.data)
}
});
app.listen("https://nodejs-reactjs-chat-rssr.vercel.app/"); // run the app in 3001
// imports
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers:{"private-key":"9b5336db-5c2e-44cd-95f8-0666e1b89022"}}
        );

    return res.status(r.status).json(r.data)
} catch (e) {
    return res.status(404).json(e.response.data)
}
});
app.listen(3001); // run the app in 3001
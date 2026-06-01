const makeWASocket = require("@whiskeysockets/baileys");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/pair", (req, res) => {
    const { number } = req.body;

    if (!number) {
        return res.status(400).json({
            message: "Veuillez entrer un numéro."
        });
    }

    res.json({
        message: `Numéro reçu : ${number}`
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur ${PORT}`);
});

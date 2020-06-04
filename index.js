const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.status(200).json("Hello from the other side");
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

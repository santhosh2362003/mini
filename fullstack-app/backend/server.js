const express = require("express");
const app = express();

app.use(express.json());

// Simple API
app.get("/", (req, res) => {
    res.send("Backend Running 🚀");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({ message: "Login Success" });
    } else {
        res.json({ message: "Login Failed" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));

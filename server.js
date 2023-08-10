const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

// Handle form submission
app.post("/api/response", (req, res) => {
    const jsonData = req.body;

    try {
        // Process the JSON data here as needed
        // For this example, we'll simply send the received JSON back
        res.redirect(`/response.html?data=${encodeURIComponent(JSON.stringify(jsonData))}`);

    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

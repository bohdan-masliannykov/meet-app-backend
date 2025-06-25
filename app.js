import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" }
    ]);
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});
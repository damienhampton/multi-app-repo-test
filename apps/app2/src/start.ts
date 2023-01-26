import express from "express";
import { anotherHello } from "lib1";
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    console.log("request received to app 2");
    res.send({ message: "Hello from app 2", lib1: anotherHello() });
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
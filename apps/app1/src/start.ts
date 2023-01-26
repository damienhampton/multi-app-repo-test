import express from "express";
import { helloFromLib  } from "lib1";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log("request received to app 1");
    res.send({ message: "Hello from app 1", lib: helloFromLib() });
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
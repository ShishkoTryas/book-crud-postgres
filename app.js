import express from "express"
import bodyParser from "body-parser"
import { db }  from "./models/book.js"
import { router } from "./routes/book.js"

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/books', router);

db.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

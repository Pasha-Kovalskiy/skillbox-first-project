import express from "express";
import ReactDOM from "react-dom/server";
import { Header } from "../shared/Header";
import { indexTemplate } from "./indexTemlate";

const app = express();
const port = 3000;

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(Header()))
    );
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
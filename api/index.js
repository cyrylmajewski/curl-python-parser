import * as curlconverter from 'curlconverter';
import express from 'express';
import bodyParser from "body-parser";

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/python', (req, res) => {
    const { curlUrl } = req.body

    const result = curlconverter.toPython(curlUrl);

    res.end(JSON.stringify(result));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
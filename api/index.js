const express = require('express');
const curlconverter = require('curlconverter');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api', (req, res) => {
    const { curlUrl } = req.body
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    console.log('fefe')

    const result = curlconverter.toPython(curlUrl);

    res.end(JSON.stringify(result));
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = app;
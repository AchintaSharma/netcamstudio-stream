const express = require('express');
const app = express();
const PORT = 8000;
const index = require('./index.html')
app.get('/', (req, res) => {
    console.log('Success!')
    res.status(200).send(index);
})


app.listen(PORT, () => {
    console.log(`Server hosted at port ${PORT}`);
})
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express listening on ${port}`);
});
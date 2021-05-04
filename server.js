// modules =================================================
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// set our port
const port = 3000;
app.get('/', (req, res) => res.send('Welcome to Dashboard'));

const postRoutes = require('./routes/api_route');

// startup our app at http://localhost:3000
//app.listen(port, () => console.log(`The crit is running on  ${port}!`));

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());
//app.use(express.json);

app.use('/', postRoutes);

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.wjm5d.mongodb.net/democovid?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => {
          app.listen(process.env.PORT || 3000, console.log('Express server listening on port %d in %s mode', app.settings.env));
    })
    .catch(err => console.log(err));


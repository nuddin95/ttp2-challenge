const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const db = require('./db'); 

//Sync our db before starting the server
db.sync()
.then(()=>{
    //Logging middleware for debugging
    app.use(morgan('dev'));
    
    //Serves up static files when browser loads index.html
    app.use(express.static(path.join(__dirname, '../CalendarFrontEnd/public')));
    
    //Parses request bodies into the req.body object
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    //Redirects all api requests to api folder
    app.use('/api', require('./api'));
    
    //Sending the html file when users come to the site
    app.get('*', function (req, res, next) {
        res.sendFile(path.join(__dirname, '../CalendarFrontEnd/public/index.html'));
    });
    
    //500 Error for when everything goes wrong
    app.use(function (err, req, res, next) {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });
    
    //Starts our server to listen for requests
    app.listen(port, () => {
        console.log(`Your server, listening on port ${port}`);
    });
})



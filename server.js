const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const metascraper = require('metascraper')([
        require('metascraper-author')(),
        require('metascraper-date')(),
        require('metascraper-description')(),
        require('metascraper-image')(),
        require('metascraper-logo')(),
        require('metascraper-clearbit')(),
        require('metascraper-publisher')(),
        require('metascraper-title')(),
        require('metascraper-url')(),
        require('metascraper-logo-favicon')(),
        require('metascraper-youtube')(),
        require('metascraper-amazon')()
      ]),
      got = require('got')

// sets port 3000 to default or unless otherwise specified in the environment
app.set('port', process.env.PORT || 3000);
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.get('/', function (req, res) {
    res.render('pages/home');
});


app.post('/parsedata', urlencodedParser, function (req, res, next) {
    const url = req.body.url;
       
    const targetUrl = url

    ;(async () => {
      const { body: html, url } = await got(targetUrl)
      
      const metadata = await metascraper({ html, url})
      console.log(metadata)
     try{
      res.render('pages/metadata', {metadata:metadata});
     }catch(err){
res.render('pages/home',"something went Wrong, Please try again")
     }
    })()
    
    
});


app.listen(app.get('port'), function () {
    console.log("App is listening on port 3000!");
});

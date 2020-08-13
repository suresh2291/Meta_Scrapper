const restify = require('restify'),
      Logger = require('./logger'),
      logger = new Logger('server'),
      metascraper = require('metascraper')([
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
   
      const targetUrl = 'https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=A0X536KCJFQMKAA9SDX0&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_2'

      ;(async () => {
        const { body: html, url } = await got(targetUrl)
        
        const metadata = await metascraper({ html, url})
        console.log(metadata)
      })()
// var server = restify.createServer();
// server.use(restify.plugins.acceptParser(server.acceptable));
// server.use(restify.plugins.fullResponse());
// server.use(restify.plugins.dateParser());
// server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());
// server.use(restify.plugins.requestLogger());

// server.get('/category',(req,res,next)=>{

//     res.send(400,{error:true, message:'Category already exits'})
// })

// //console.log(os.networkInterfaces( ))
// server.listen(8080,'localhost', function() {
//   logger.info(`listening at ${server.name} ${server.url}`);
// });
var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/feed', function(req, res, next) {
    fs.readFile('resources/feed.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }
        
        var data = JSON.parse(data); // slaat data op
        var page = req.query.p; // haal de verzochte pagina op uit de url 
        if (typeof page == 'undefined') { // dit is een default als er niks is doe dan dit (fallback)
            page = 0;
        
        }
        
        res.render('feed', { title: 'Feed', items: data.slice(8*page, page*8 + 8), layout:false }); // layout false zeg je je hoeft hem niet door die layout heen te halen
    })
});

router.get('/appearance/:uuid', function(req, res, next) {
    fs.readFile('resources/appearance/'+req.params.uuid+'.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        var item = JSON.parse(data);
        var products = [];

        item.product_occurrences.forEach(function(occurrence) {
            var product = fs.readFileSync('resources/product/'+occurrence.product.id+'.json', 'utf8');
            products.push(JSON.parse(product));
        });

        console.log(products);

        res.render('appearance', { title: item.title, item: item , products: products, layout:false}); // hij knalt niet de layout erom heen ?
    })
});

//rander deze json 

router.get('/product/:uuid', function(req, res, next) {
    sendFile('product/'+req.params.uuid+'.json', res);
});

// Reads and sends file contents
function sendFile(filename, res) {
    res.type('json'); 
    var file = fs.readFile('resources/'+filename, 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            res.json({'status': 404, 'message': 'resource with name: '+filename+' not found'});
        } else {
            res.send(data);
        }
    });
}

module.exports = router;

// we willen dat de api html aanpast
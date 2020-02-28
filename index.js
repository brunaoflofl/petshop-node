const  http = require('http')
const url = require('url')
const adcPets = require('./petshop')
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
    if(req.url == '/'){
        res.end("Rodando...")
    }
    
    if(req.url == '/home'){
        res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
        res.end("Você está dentro do sistema petShop!")
    }
   /* if(req.url == '/pet/adicionar'){
        petshop.adcPets('dodoli')
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
            res.end("Pet adicionado com sucesso!")
        
        
        
        
    }*/
}).listen(3000, 'localhost'); 
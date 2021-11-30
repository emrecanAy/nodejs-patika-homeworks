const http = require('http');

const server = http.createServer((req, res) => {
    
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h2>Index Sayfasına Hoşgeldiniz!</h2>");
    }
    else if(url === '/hakkimda'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h2>Hakkımda Sayfasına Hoşgeldiniz!</h2>");
    }
    else if(url === '/iletisim'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h2>İletişim Sayfasına Hoşgeldiniz!</h2>");
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.write("<h2>404 Sayfa Bulunamadı!</h2>");
    }
    console.log("Bir istek gönderildi!");
    res.end();
});

const port = 5000;
server.listen(port, () => {
    console.log(`Sunucu port ${port}'de başlatıldı!`);
});
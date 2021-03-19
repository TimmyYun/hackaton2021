const request = require('request');
const cheerio = require('cheerio');
var options = {
    url: 'https://www.kinopoisk.ru/lists/top250/',
    method: 'GET',
    headers: {
        'Accept': 'text/html',
        'User-Agent': 'Chrome'
    }
};

request(options, function(error, response, responseBody) {
    if (error) {
        return;
    }
    let $ = cheerio.load(responseBody);
    
    var links = $('a.selection-film-item-meta__link');

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));

    if (!urls.length) {
           
        console.log("No links have been found");    
        
    }

    const title = $('<a href="/film/326/" class="selection-film-item-meta__link">');
    
    console.log(title.attr('href'));

    console.log(urls);
    console.log(urls[0]);
    
});

var options = {
    url: 'https://www.kinopoisk.ru/lists/top250/',
    method: 'GET',
    headers: {
        'Accept': 'text/html',
        'User-Agent': 'Chrome'
    }
};

request(options, function(error, response, responseBody) {
    if (error) {
        return;
    }
    let $ = cheerio.load(responseBody);
    
    var links = $('a.selection-film-item-meta__link');

    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));

    if (!urls.length) {
           
        console.log("No links have been found");    
        
    }

    const title = $('<a href="/film/326/" class="selection-film-item-meta__link">');
    
    console.log(title.attr('href'));

    console.log(urls);
    console.log(urls[0]);
    
});




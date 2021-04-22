var Crawler = require("crawler");
console.log('asdas');
 
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            let osake = $("div > div > div > main > div > div > div > div > div > div > div > div > div > div > span").text();
            console.log(osakeReg(osake));



            // let rahasto = $("div > div > div > main > div > div > div > div > div > div > div > div > div > div > div > span").text();
            // console.log(rahastoReg(rahasto));
        }
        done();
    }
});

function osakeReg(string) {
    const regex = /\d{0,9}[,]\d{0,4}[\+-\−]/sg;
    let str = string.match(regex);
    str = (Array.isArray(str) ? str[0] : str);
    str = str.replace("+", "");
    str = str.replace("−", "");
    str = str.replace(",", ".");

    return str
}

function rahastoReg(string) {
    const regex = /\d{0,9}[,]\d{0,2}/sg;
    let str = string.match(regex);

    str = (Array.isArray(str) ? str[0] : str);

    str = str[0].replace(",", ".");
    return str;
}
 
// osake
// c.queue('https://www.nordnet.fi/markkinakatsaus/osakekurssit/16100798-finnair');
c.queue('https://www.nordnet.fi/markkinakatsaus/osakekurssit/16118139-apple');

// rahasto
// c.queue('https://www.nordnet.fi/markkinakatsaus/rahastolistat/16801606-nordnet-indeksirahasto-suomi');

// div
// div
// div
// main
// div
// div
// div
// div
// div
// div
// div
// div
// div
// div
// span

// \d{0,9}(?:[.,]\d{3})*(?:[.,]\d{0,4})[\+-\−]
// \d{0,9}[.,]\d{0,4}[\+-\−]

// \d{0,9}[,]\d{0,4}[\+-\−]
// \d{0,9}[,]\d{0,2}
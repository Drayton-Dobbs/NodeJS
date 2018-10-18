const path = require('path');
let request = require('request');
let rp = require('request-promise');
const fs = require('fs');
let options = {
    encoding:  'binary'
}




rp('https://reddit.com/r/popular.json')
    .then((data) => {
        let parsedData = JSON.parse(data)
        //console.log(parsedData)

        let articleArr = [];
        let downloadedArticleArr = [];
        

        parsedData.data.children.forEach(element => {
            let articles = {
                id: element.data.id,
                url: element.data.url
            }
            articleArr.push(articles)
        });
        //console.log(articleArr);

        articleArr.forEach(obj => {
            if (path.extname(obj.url) === '.jpg' || path.extname(obj.url) === '.png') {
                downloadedArticleArr.push(obj)

                rp(obj.url, options)
                .then(data => {
                    fs.writeFile(path.join(__dirname, `./download/${obj.id}${path.extname(obj.url)}`), data, options, null, 2, (err) => {
                    if (err) console.log(`messed up ${err}`);
        
                    console.log('YEE')
                })
            })
                



            }
        })
        console.log(downloadedArticleArr);

       

        // articleArr.forEach(url => {
        //     if (url.includes(".jpg")) {
        //       rp(url).then(url => {
        //           console.log(fs.writeFile(download, url))
        //         fs.writeFile(download, url),
        //           err => {
        //             console.log(`yeuuhp wroang. error: ${err}`);
        //           };
        //       });
        //     }
        //   });

    })



    .catch(function (err) {
        console.log(`ohnoez ${err}`)
        // Crawling failed...
    });
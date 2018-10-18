const path = require('path');
let request = require('request');
let rp = require('request-promise');

const userPath = path.join(__dirname, "./reddit.json");

rp('https://reddit.com/r/popular.json')
    .then((data) => {
        let parsedData = JSON.parse(data)
        console.log(parsedData)

        let articleArr = [];

        parsedData.data.children.forEach(element => {
            let articles = {
                author: element.data.author,
                title: element.data.title,
                url: element.data.url
            }
            articleArr.push(articles)
        });
            console.log(articleArr);

        fs.writeFile(userPath, JSON.stringify(articleArr, null, 2), (err) => {
            if (err) console.log(`messd up ${e}`);

            console.log('YEE')
        })


    })



    .catch(function (err) {
        console.log('ohnoez')
        // Crawling failed...
    });



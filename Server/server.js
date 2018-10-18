const path = require('path');
const fs = require('fs');
const dataPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {
        name: 'James',
        chirp: 'this is my first chirp!'
    },
    {
        name: 'Josh',
        chirp: 'this is my second chirp!'
    },
    {
        name: 'Rob',
        chirp: 'this is my third chirp!'
    },
    {
        name: 'Aaron',
        chirp: 'this is my fourth chirp!'
    },
    {
        name: 'Mags',
        chirp: 'this is my fifth chirp!'
    }
]

let fixed = JSON.stringify(chirps);

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, chirps) => {
    console.log(chirps);
});

fs.writeFile('chirps.json', fixed, (err) => {
    if (err) throw err
    console.log('SAVED!');
});
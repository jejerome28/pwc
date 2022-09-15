const converter = require('xml-js');

const fs = require('fs');
const file = fs.readFileSync('./pwc_xml.xml', 'utf8');

let result = converter.xml2json(file, {compact:true, spaces:4});

fs.writeFile('pwcJson.json',result, (err)=>{
    if(err) throw err;
    console.log('file saved!');
})

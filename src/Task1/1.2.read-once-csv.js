
import csvtojson from 'csvtojson';
import { writeFile } from 'fs';
var path = require('path');

try {
  const sourcePath  = path.join(__dirname, '../../csv/nodejs-hw1-ex1.csv') ;
  const destPath  = path.join(__dirname, '../../csv/nodejs-hw1-ex2.json') ;
  console.log(__dirname);
  csvtojson()
  .fromFile(sourcePath)
  .then((jsonObj)=>{  
    console.log(jsonObj);
    writeFile(destPath, JSON.stringify(jsonObj), "utf-8", (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })

  
}
catch(e) {
  console.log(e);
}

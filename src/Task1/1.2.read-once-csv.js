import csvtojson from 'csvtojson';
import { writeFile } from 'fs';

try {
  const sourcePath  = new URL('../../csv/nodejs-hw1-ex1.csv', import.meta.url);
  const destPath  = new URL('../../csv/nodejs-hw1-ex2.json', import.meta.url);

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

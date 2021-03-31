import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import csvtojson from 'csvtojson';

try {
  const sourcePath  = new URL('../../csv/nodejs-hw1-ex1.csv', import.meta.url);
  const destPath  = new URL('../../csv/nodejs-hw1-ex2.json', import.meta.url);

  
  pipeline(
    createReadStream(sourcePath),
    csvtojson(),
    createWriteStream(destPath),
    (err) => {
      if (err) {
        console.error('Writting json failed.', err);
      } else {
        console.log('File saved successfully.');
      }
    }
  );

  
}
catch(e) {
  console.log(e);
}

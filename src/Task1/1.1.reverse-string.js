import readline from 'readline';

export default function reverseString(){
    
    const r1 =readline.createInterface({
        input: process.stdin, 
        output: process.stdout,
        terminal: false
    })

    r1.on('line', function(line){
        console.log(`${line.toString().split("").reverse().join("")}\n`);
    })
}

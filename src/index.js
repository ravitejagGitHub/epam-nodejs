
const args = process.argv;
if(args.length> 2) {
    const task = args[2];
    switch(task) {
        case 'task1':
            import("./Task1/1.1.reverse-string.js").then(()=> {
                console.log("****** String Reverse ******");
            },()=>{
                console.error("Can't find reverse string  module.")
            });
        break;

    }
} else {
    console.log("Please provide task number as argument to run: Ex: npm start task1");
}

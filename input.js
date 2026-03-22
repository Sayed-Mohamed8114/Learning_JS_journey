const readline = require("readline");

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r1.question("what is your favourite food ? ",(food)=>{
    console.log(`ah your favourite food is ${food} ,Me too.`)
    r1.close();
})




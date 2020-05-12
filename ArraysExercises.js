// If Statements 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    // Your Code Goes Here...
    let userinput= await askQuestion("Add input : ");
    let user=[userinput];
    while(user[user.length -1])
    {
        userinput= await askQuestion("Add input : ");
        user.push(userinput);
    }
    user.pop();
    console.log(user);
    
}


Program().then(() => {
    process.exit(0);
});
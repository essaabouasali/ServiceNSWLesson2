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
    let i=0;
    let bol = false;
    let testt= null;
    while(!bol)
    {

        userinput= await askQuestion("Add input : ");
        testt=userinput;
        user.push(userinput);
        for(i=0;i<user.length - 1;i++)
        {
            //console.log(i);
            if(user[i] == testt)
            {
                bol=true;
                user.pop();
            }
        }
        
    }
    console.log(`sorry you have entered dublicate entry...`);
    console.log(`your input is ${user}`);
}


Program().then(() => {
    process.exit(0);
});
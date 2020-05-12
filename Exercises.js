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
    let userinput1= await askQuestion("Add first Number : ");
    let x=parseInt(userinput1);
    let userinput2= await askQuestion("Add second Number : ");
    let y = parseInt(userinput2);

    // Question 1
    console.log("Qeustion 1 \n")
    if(x>y)
    {
        console.log(`the greater number is ${x}`);
    }
    else if(x==y)
    {
        console.log(`the numbers are equal`);
    }
    else{
        console.log(`the greater number is ${y}`);
    }

    // Question 2
    console.log("Qeustion 2 \n")
    if(x>y)
    {
        console.log(`the numbers are : ${x} - ${y}`);
    }
    else if(x==y)
    {
        console.log(`the numbers are equal` + x +" - "+ y);
    }
    else{
        console.log(`the numbers are : ${y} - ${x}`);
    }

    // Question 3
    console.log("Qeustion 3 \n")
    if(x>y)
    {
        console.log(`the numbers are : ${y} - ${x}`);
    }
    else if(x==y)
    {
        console.log(`the numbers are equal` + x +" - "+ y);
    }
    else{
        console.log(`the numbers are : ${x} - ${y}`);
    }




  
}


Program().then(() => {
    process.exit(0);
});

//Question 1
for(let i=1 ; i<=7 ; i++)
{
    console.log(i);
}
i=1;
while(i<=7)
{
    console.log(i);
    i++;
}

//Qeustion 2

for(let x=2;x<9 ; x+=2)
{
    console.log(x);
}

//Qeustion 3

let arr=["dave","essa","luck"];
for(let z=arr.length -1 ;z<=0;z--)
{
    console.log(arr[z]);
}

//Qeustion 4


let arr2=["stud1","stud2","3","4","stud5"];
let c=0;
while(arr2[c])
{
    let x =arr2[c];
    if(!parseInt(x[0]))
    {
        console.log(arr2[c]);
    }
        c++;
}

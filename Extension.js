/*const arr=["BMW","RANG","AUDI","BMW","Toyota","AUDI"];
let cont=[0,0,0,0,0,0];
let arr1=arr;
let i=0, j=0;
while(i<arr.length)
{
    
    while(j<arr1.length)
    {
        if(arr[i] === arr1[j])
        {
            cont[i]++;
        }
        j++;
    }
    j=0;
    i++;
    
}
for(i=0;i<arr.length;i++)
{
    console.log(`${arr[i]} appears ${cont[i]} times in the array`);
}
*/


/* 

let students = ["Dave","Christine","Haley","Dave","Dave", "Dave", "Haley"];

    let foundNames = [];
    let foundNameValues = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let found = false;
        for(let j = 0; j < foundNames.length; j++){
            if(foundNames[j] == student){
                foundNameValues[j]++;
                found = true;
                break;
            }
        }
        if (found == false){
            foundNames.push(student);
            foundNameValues.push(1);
        }
    }

    for(let i = 0; i < foundNames.length; i++) {
        console.log(`${foundNames[i]} appears in the list ${foundNameValues[i]} times`);
    }
    */
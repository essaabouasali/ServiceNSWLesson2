const arr=["BMW","RANG","AUDI","BMW","Toyota","AUDI"];
let cont=[0,0,0,0,0,0];
let arr1=arr;
let i=0, j=0;
while(i<arr.length)
{
    
    while(j<arr1.length)
    {
        if(arr[i] === arr1[j])
        {
            //console.log(arr[i]);
            cont[i]++;
        }
        j++;
    }
    j=0;
    //arr1=arr;
    //console.log(i);
    //console.log(arr.length);
    i++;
    
}
for(i=0;i<arr.length;i++)
{
    console.log(`${arr[i]} appears ${cont[i]} times in the array`);
}
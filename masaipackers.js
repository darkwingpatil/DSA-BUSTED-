// Finally, India found the vaccine, and things have started getting normal. Offices are opening up, and therefore, you have to shift to Bangalore. Now, to transport your stuff, you hire Masai Packers & Movers. The company has N trucks, and each truck can hold only a certain amount of weight only. Also, because of surge in prices of Fuel, the company has implemented a new policy, that the truck will be granted to the customer, only if the truck is completely occupied, and no extra space is left.

// You have to transport K units of weight, since each truck will take the weight exactly equal to its capacity, find the number of ways, in which you can transport K units of weight.

// Note : Any truck can be sent any number of times.

// 3 3
// 1 2 3
let count=0;
function runProgram(input){
    input=input.trim().split("\n")
    let[cap,size]=input[0].split(" ").map(Number)
    let arr=input[1].split(" ").map(Number)
    masaipackers(cap,size,arr)
    console.log(count)
}

// function masaipackers(cap,size,arr,val=0)
// {
//     if(val==cap)
//     {
//         count++;
//         return
//     }
//     else if(val>cap)
//     {
//         return
//     }
    
//     for(let i=0;i<size;i++)
//     {
//         val=val+arr[i]
//         masaipackers(cap,size,arr,val)
//         val=val-arr[i]
//     }
    
//     return
// }


//alernative sol
function masaipackers(cap,size,arr)
{
    if(cap==0)
    {
        count++;
        return
    }
    else if(cap<0)
    {
        return
    }
    
    for(let i=0;i<size;i++)
    {
        masaipackers(cap-arr[i],size,arr)
    }
    
    return
}


if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
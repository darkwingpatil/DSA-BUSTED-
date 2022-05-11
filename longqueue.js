function runProgram(input){
    input=input.split("\n");
    var length =+ input[0];
    var arr= input[1].trim().split(" ").map(Number);
    check_queue(length,arr);
    
}
function check_queue(length,arr)
{
    
    let count=0;
    arr[length]=0;
    for(let i=0;i<=length;i++)
    {
        if(arr[i]>arr[i+1])
        {
            count++;
        }
    }
    console.log(count)

    
    // alternative
    // var count=0;
    //for(var i=0;i<lenght;i++)
    // {
    //     if(arr[i]<=arr[i+1])
    //     {
    //         count++;
    //     }
    //     console.log(length-count);
    // }
}
  if (process.env.USERNAME=== "91789") {
    runProgram(`6
    1 2 4 3 5 8`);
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
      process.exit(0) ;
    });
  }
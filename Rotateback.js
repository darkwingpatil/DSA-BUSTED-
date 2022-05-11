function runProgram(input){
    input=input.trim().split("\n");
    var tc=+ input[0];
    var line=1;
    for(var i=0;i<tc;i++)
    {
        var[size,tar]=input[line].trim().split(" ").map(Number);
        line++;
        var arr=input[line].trim().split(" ").map(Number);
        line++;
      get_myvalue(arr,size,tar)
      console.log(arr.join(" "))
    }

}

 function get_myvalue(arr,size,tar)
 {
     //for rotating simple trick!
     //first half rotate less then target
     // second half start from target to end
     
     tar=tar%size;
     let left=0;
     let right=size-1
     while(left<right)
     {
         swap(arr,left,right)
         left++;
         right--
     }
     
     
     left=0;
     right=tar-1;
     while(left<right)
     {
         swap(arr,left,right)
         left++;
         right--
     }
     
     left=tar;
     right=size-1;
     while(left<right)
     {
         swap(arr,left,right)
         left++;
         right--
     }
 }
 
 function swap(arr,i,j)
 {
     let temp=arr[i]
     arr[i]=arr[j]
     arr[j]=temp
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
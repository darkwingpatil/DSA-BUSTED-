// Given a list of prices of a single stock for N number of days, find stock span for each day. Stock span is defined as a number of consecutive days prior to the current day when the price of a stock was less than or equal to the price at current day.
// For the first day, span is always 1. In the example we can see that for day 2 at 60, there is no day before it where the price was less than 60. Hence span is 1 again. For day 3, the price at day 2 (60) is less than 70, hence span is 2. Similarly, for day 4 and day 5. Remember days should be consecutive, that’s why the span for day 4 is 1 – even though there was a day 2 where the price was less than 65.
// 1
// 6
// 100 60 70 65 80 85

function runProgram(input){
    
    input=input.trim().split("\n");
    var testcase=+input[0];
    var line=1;
    for(var i=0;i<testcase;i++)
    {
        var size=+input[line++];
        var arr=input[line++].trim().split(" ").map(Number)
        
        myvalues(arr,size)
    }
}

function myvalues(arr,size)
{
    let stack=[]
    let indexstack=[]
    let val=[]
    for(let i=0;i<size;i++)
    {
        if(stack.length==0)
        {
            val.push(1)
        }
        else if(arr[i]<stack[stack.length-1])
        {
            
            val.push(i-indexstack[indexstack.length-1])
        }
        else
        {
            while(stack.length!=0)
            {
                if(arr[i]<stack[stack.length-1])
                {
                    break;
                }
                indexstack.pop()
                stack.pop()
            }
            
            if(stack.length==0)
            {
                
                val.push(i+1) 
            }
            else
            {
                val.push(i-indexstack[indexstack.length-1])
            }
        }
        
        stack.push(arr[i])
        indexstack.push(i)
    }
    return console.log(val.join(" "))
}
    
    
    //my method it passes all test cases but tle 
    //     var stack=[];
    // var stack1=[];
    // var brr=[];
    // for(var i=0;i<size;i++)
    // {
    //     stack.push(arr[i]);
    //     stack1.push(arr[i]);
    //     let count=0;
    //     while(arr[i]>=stack[stack.length-1])
    //     {
    //         count++;
    //         stack.pop();
    //     }
    //     brr.push(count);
    //     var x=stack1;
    //     x=x.join(" ");
    //     stack=x.split(" ").map(Number);
    //     // console.log(stack)
    // }
    
    // console.log(brr.join(" "))
    
    
    //both methods giving tle
    // alterntive method
    
    //   var stack=[];
    // var brr=[];
    
    // for(var i=0;i<arr.length;i++)
    // {
    //     let count=0;
    //     let top=stack.length;
    //     stack.push(arr[i]);
    //     while(arr[i]>=stack[top])
    //     {
    //         count++;
    //         if(top<=0)
    //         {
    //             break
    //         }
    //         top--
    //     }
    //     brr.push(count)
    // }
    // console.log(brr.join(" "))



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
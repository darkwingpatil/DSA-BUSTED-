// Noddy has an exam in which each question has a difficulty level in the form of an Integer. Now, Noddy can only solve the problems that have difficulty level less than or equal to X. Now the rules are-

// The score of the student is equal to the maximum number of answers he/she has attempted without skipping a question.

// The student is allowed to skip just "one" question that will not be counted in the continuity of the questions.

// Note- Assume the student knows the solution to the problem he/she attempts and always starts the paper from the first question.

// Given the number of Questions, N, the maximum difficulty level of the problem Noddy can solve, X, and the difficulty level of each question in the form of an array

// Determine the maximum score that Noddy can score?


// Sample Input 1 

// 2
// 6
// aabbcc
// 5
// aabcd

function runProgram(input){
    input=input.split("\n");
//     2
// 6
// aabbcc
// 5
// aabcd

var tc=+ input[0];
var line=1;
for(var i=0;i<tc;i++)
{
    var size=+input[line];
    line++;
    // str1=input[line];
    var str=input[line].split("");
    line++;
    check_palin(str,size);
}
    
}

function check_palin(str,size)
{
    let obj={}
    
    for(let i=0;i<size;i++)
    {
        if(obj[str[i]]==undefined)
        {
            obj[str[i]]=1;
        }
        else
        {
            obj[str[i]]=obj[str[i]]+1
        }
    }
    let count=0;
    
    for(key in obj)
    {
        if(obj[key]%2!=0)
        {
           count++; 
        }
    }
    
    if(str.length%2==0 && count==0)
    {
        console.log("Possible!")
    }
    else if(str.length%2!=0 && count==1)
    {
        console.log("Possible!")
    }
    else
    {
        console.log("Not Possible!")
    }
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
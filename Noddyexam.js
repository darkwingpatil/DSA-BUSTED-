// Noddy has an exam in which each question has a difficulty level in the form of an Integer. Now, Noddy can only solve the problems that have difficulty level less than or equal to X. Now the rules are-

// The score of the student is equal to the maximum number of answers he/she has attempted without skipping a question.

// The student is allowed to skip just "one" question that will not be counted in the continuity of the questions.

// Note- Assume the student knows the solution to the problem he/she attempts and always starts the paper from the first question.

// Given the number of Questions, N, the maximum difficulty level of the problem Noddy can solve, X, and the difficulty level of each question in the form of an array

// Determine the maximum score that Noddy can score?

function runProgram(input){
    input=input.split("\n");
    var [size,tar]=input[0].split(" ").map(Number);
    var arr=input[1].split(" ").map(Number);
    
    check_point(arr,size,tar)
     
 }
 function check_point(arr,size,tar)
 {
    let flag=true;
    let count=0;
    for(let i=0;i<size;i++)
    {
        if(arr[i]<=tar)
        {
            count++;
        }
        else if(arr[i]>tar && flag==true)
        {
            flag=false;
        }
        else if(arr[i]>tar && flag==false)
        {
            break
        }
    }
    console.log(count)
 
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
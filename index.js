var readLineSync = require("readline-sync");

var userName=readLineSync.question("Enter your name : ");
console.log("Welcome "+userName+" ARE YOU A MCU FAN? ");
console.log("-------------------------------------------------");

var quiz=[
    {
        que : "Who is the father of Thor ? ",
        ans : "odin",
    },
    {
        que : "Who was MODOK ? ",
        ans : "crime partner of red skull",
    },
    {
        que : "How many infinity stones are there ? ",
        ans : "5",
    },
    {
        que : "Who is TVA ? ",
        ans : "Kang gang",
    },
    {
        que : "Who are Enternals ? ",
        ans : " Celestial beings of high power",
    }
]
var score=0;
function play(que,ans)
{
    var userAns = readLineSync.question(que);
    if(userAns === ans)
    {
        console.log("Right");
        console.log("-------------------------------------------------");
        score+=1;
    }
    else
    {
        console.log("Wrong");
        console.log("-------------------------------------------------");
    }
}

for(var i=0;i<quiz.length;i++)
{
    play(quiz[i].que,quiz[i].ans);
}

console.log("YAY! Your score : "+score);
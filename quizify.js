let input= require("readline-sync");

const leaderBoard={
    data:[
        {
            name: "Anup",
            score: 2
        },
        {
            name: "Jay",
            score: 1
        },
        {
            name: "Riya",
            score: 2
        }
    ]
}


const database={
    data : [
        {
            question: "What is the capital of India?",
            options:{
                a: "New Delhi",
                b: "Mumbai",
                c: "Kolkata",
                d: "Bengaluru"
            },
            correctAnswer: "a"
        },
        {
            question: "Number of union territory in India?",
            options:{
                a: "5",
                b: "7",
                c: "8",
                d: "9"
            },
            correctAnswer: "d"
        },
        {
            question: "What is the capital of france?",
            options:{
                a: "Frankfurt",
                b: "Paris",
                c: "Jeneva"
            },
            correctAnswer: "b"
        }
    ]
}



function showQuestionAndAnswer(){
    let userName=input.question("Enter yout name: ");
    let count=0;
    for(let i=0; i<database.data.length;i++){
        console.log(`Qs${i+1} ${database.data[i].question}\nOptions:`);
        for(let key in database.data[i].options){
            console.log(`${key} ${database.data[i].options[key]}`);
        }
        let userAnswer=input.question("Enter your answer: ");
        if(userAnswer===database.data[i].correctAnswer){
            console.log("correct\n");
            count+=1;
        }
        else{
            console.log("Incorrect\n");
        }

    }
    console.log(`Thank You ${userName}\nYour score is ${count}/${database.data.length}`);
    leaderBoard.data.push({name: userName,score: count});

}

function ranking(){
    let sortedList=leaderBoard.data.sort((a,b)=>b.score-a.score)
    console.log("\nCheck your ranking here: \nRank\tName\tScore");
    for(let i=0;i<leaderBoard.data.length;i++){
        console.log(`${i+1}\t${sortedList[i].name}\t${sortedList[i].score}`);
    }
}

showQuestionAndAnswer();
ranking();
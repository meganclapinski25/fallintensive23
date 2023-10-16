const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const nextButton = document.getElementById("next");
const resultContainer = document.getElementById("result-container");
const result = document.getElementById("result");


let current = 0;
let score = [];

const questions = [
    {
        question: "What kind of car would you like?",
        choices:["Hybrid", "Electric"],
    },
    {
        question:"Where are you driving your vehical?",
        choices:["City","Highway", "Both"],
    },
    {
        question:"What would your price range be?",
        choices:["20k-30k", "40k-50k", "60k-70k","80k-90k", "100k+"],

    },
    {
        question:"What size of Car do you prefer",
        choices:["Compact", "MidSize", "Truck"],
    }

];
const recommends = {
"HybridCity20k-30kCompact": "Tesla Model 3",
"HybridHighWay100kCompact": "Porche Taycan",
"ElectricCity100k+MidSize": "Lucid Air",
"ElectricHighWay40k-50kMidsize": "Tesla Model S",
};

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    if (current < questions.length) {
        const currentData = questions[current];
        question.textContent = currentData.question;
        
        for (const choice of currentData.choices) {
            const i = document.createElement("li");
            i.textContent = choice;
            i.addEventListener("click", () =>{
                score[current] = choice;
                current++;
                nextQuestion();
            });
            choices.appendChild(i);
        }
        
    } 
}
function temp(choice){
    score.push(choice);
    nextQuestion();
}
function getRecommendedCar() {
    // Create a logic to map user choices to recommended car types
    const carMatches = {
        "HybridCity20k-30kCompact": "Tesla Model 3",
        "HybridHighWay100kCompact": "Porche Taycan",
        "ElectricCity100k+MidSize": "Lucid Air",
        "ElectricHighWay40k-50kMidsize": "Tesla Model S",
       
    };
}
function showResult() {
    
}






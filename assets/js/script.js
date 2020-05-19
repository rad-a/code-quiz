let startBtn = document.getElementById('start-btn');
let quizSection = document.getElementById('main');
let nextBtn = document.getElementById('next-question');
let timer = document.getElementById('countdown-timer');
let questionNumber = document.getElementById('question-num');
let quizDisplaySetting = quizSection.style.display;
let questionBox = document.getElementById('question');
let answerOptions = document.getElementById('answers');
let startInstruction = document.getElementById('hide-on-start');

//Set countdown timer variables
let counter = 0;
let timeLeft = 90;


//Declare initial index for questions
let questionIndex = 0;

let currentQuestion = 1;

const quizQuestions = [
    {


question: 'How do you invoke a JavaScript function?',
answers: [
     'call.function()',
     'function();',
     'function;',
     'none of the above'
],
correctAnswer: 1
    },
{
question: 'Which is not a method for declaring a variable?',
answers: [
     'variable',
     'var',
     'const',
     'let'
],
correctAnswer: 0
}, 
{
    question: 'How do you create an array in JavaScript?',
    answers: [
         'createElement.array',
         'array={}',
         'var x = [];',
        'var y = {}'
    ],
    correctAnswer: 2
    }

] 



//--WRITE FUNCTIONS--

//start timer
timer.innerHTML = convertSeconds(timeLeft);
setInterval(countTime, 1000); 

function countTime() {
    counter++;
    timer.innerHTML = convertSeconds(timeLeft - counter);
}

//Convert timer to minutes + seconds
function convertSeconds(s) {
    let minutes = Math.floor(s / 60);
    let seconds = s % 60;
    return minutes + ':' + seconds;

}


//Start quiz
startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    questionNumber.innerHTML = currentQuestion;
    startBtn.style.display = 'none';
    startInstruction.style.display = 'none';
    quizSection.style.display = 'block';
    setQuestion();
    }
   

    function setQuestion() {
    
        questionBox.innerHTML = quizQuestions[questionIndex].question;
        createAnswerButtons();
    }

    //Create answer buttons and append to the correct <div> elements
    function createAnswerButtons() {

        for (let i=0; i < quizQuestions[questionIndex].answers.length; i++) {

            const option = document.createElement('button');
            option.innerHTML=quizQuestions[questionIndex].answers[i];
            option.classList.add('option-button', 'btn');
            option.id = i;
            option.setAttribute('onclick', 'check(this)');
            answerOptions.appendChild(option);
            
                  }  
            

    }

var score = '';
var points = 5;
    function check(ele) {
const button_id = ele.id;
if (button_id == quizQuestions[questionIndex].correctAnswer) {
ele.classList.add('correct');

} else{
    ele.classList.add('incorrect');
    timeLeft -= 5;
}

}



nextBtn.addEventListener('click', function() {
    reset();
    questionIndex++;
    setQuestion()
        questionNumber.innerHTML= currentQuestion++;
        
})

function reset() {
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild)
    }
}

    

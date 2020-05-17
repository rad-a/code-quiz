let startBtn = document.getElementById('start-btn');
let quizSection = document.getElementById('main');
let nextBtn = document.getElementById('next-question');
let timer = document.getElementById('countdown-timer');
let questionNumber = document.getElementById('question-num');
let quizDisplaySetting = quizSection.style.display;
let questionBox = document.getElementById('question');
let ansOptionsLeft = document.getElementById('left-answers');
let ansOptionsRight = document.getElementById('right-answers');
let startInstruction = document.getElementById('hide-on-start');

//Set countdown timer variables
let counter = 0;
let timeLeft = 90;

//Declare initial index for questions
let questionIndex = 0;


const quizQuestions = [
    {
        question: 'How do you invoke a JavaScript function?',
l_answers: [
     'call.function()',
     'function();'
],
r_answers: [
     'function;',
     'none of the above'
],
correctAnswer: 1
    },
{
question: 'Which is not a method for declaring a variable?',
l_answers: [
     'variable',
     'var'
],
r_answers: [
     'const',
     'let'
],
correctAnswer: 0
}, 
{
    question: 'How do you create an array in JavaScript?',
    l_answers: [
         'createElement.array',
         'array={}'
    ],
    r_answers:[
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
    startBtn.style.display = 'none';
    startInstruction.style.display = 'none';
    quizSection.style.display = 'block';
    questionBox.innerHTML = quizQuestions[questionIndex].question;
    createAnswerButtons();
    }

    //Create answer buttons and append to the correct <div> elements
    function createAnswerButtons() {
      for (let i=0; i < quizQuestions[questionIndex].l_answers.length; i++) {

let option = document.createElement('button');
option.innerHTML=quizQuestions[questionIndex].l_answers[i];
$(option).addClass('btn option-button');
option.id = i;
ansOptionsLeft.appendChild(option);

      }  

      for (let i=0; i < quizQuestions[questionIndex].r_answers.length; i++) {

        let option = document.createElement('button');
        option.innerHTML=quizQuestions[questionIndex].r_answers[i];
        $(option).addClass('btn option-button');
        option.id = i;
        ansOptionsRight.appendChild(option);

    
              }  
    }

    $('.option-button').click(function() {
        console.log(this.id);
    });


    
(function (window, document, undefined) {
    window.onload = init;

    function init() {
        // the code to be called when the dom has loaded
        // #document has its nodes

//TIMER IS RIGHT HERE
//everything will be executed once the jQuery is loaded
$(document).ready(function () {
    //Put Start Button here 
    $("#startGame").on("click", function () {
        console.log("clicked")
        //make the start button DO something once clicked HERE 
    });
    //2 make the countdown timer 
    //first set a var to the number of seconds on clock
    var time = 30;
    //then make the timer run using function go

    $("#timer").on("click", go);
})

//make the #timer countdown from 30 seconds 
var time = 30;
function countDown() {
    
    // Decrease number by one.
    time--;
    // Show the number in the #timeLeft div.
    $("#timeLeft").html("<h2>" + time + "seconds" + "</h2>");
    // When the number is equal to zero, 
    if (time === 0) {
        // run the stop function.
        stop();
        // Alert the user that time is up. Update the innerHTML of the message
        // div to say 'Game Over!'
        // alert('Time Up!')
        $('#message').html('time up!');
        checkAnswers();
    }
}



//create a function that tells the timer to go
function go() {
    seconds = setInterval(countDown, 1000);

}
function stop() {

    clearInterval(go);
}

//execute the go function
go();









        var myQuestions = [
            {
                question: "Which of the following is the largest island in the world?",
                answers: {
                    a: "Madagascar",
                    b: "Australia",
                    c: "Greenland"
                },
                correctAnswer: "c"
            },
            {
                question: "What fraction of the world's population is estimated to live on an island? ",
                answers: {
                    a: "1/6th ",
                    b: "1/8th",
                    c: "The entire earth is an island"
                },
                correctAnswer: "a"
            },
            {
                question: "What is the most populated island in the world?",
                answers: {
                    a: "Java, Indonesia",
                    b: "Manhattan, New York City ",
                    c: "The Bahamas",
                    d: "Luzon, Philippines"
                },
                correctAnswer: "a"
            }
        ];

        function buildQuiz() {
            // we'll need a place to store the HTML output
            var output = [];

            // for each question...
            myQuestions.forEach((currentQuestion, questionNumber) => {
                // we'll want to store the list of answer choices
                var answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {
                    // ...add an HTML radio button
                    answers.push(
                        `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
                );
            });

            // finally combine our output list into one string of HTML and put it on the page
            quizContainer.innerHTML = output.join("");
        }

        function showResults() {
            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll(".answers");

            // keep track of user's answers
            let numCorrect = 0;

            // for each question...
            myQuestions.forEach((currentQuestion, questionNumber) => {
                // find selected answer
                var answerContainer = answerContainers[questionNumber];
                var selector = `input[name=question${questionNumber}]:checked`;
                var userAnswer = (answerContainer.querySelector(selector) || {}).value;

                // if answer is correct
                if (userAnswer === currentQuestion.correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    answerContainers[questionNumber].style.color = "lightgreen";
                } else {
                    // if answer is wrong or blank
                    // color the answers red
                    answerContainers[questionNumber].style.color = "red";
                }
            });

            // show number of correct answers out of total
            resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        }

        function showSlide(n) {
            slides[currentSlide].classList.remove("active-slide");
            slides[n].classList.add("active-slide");
            currentSlide = n;

            if (currentSlide === 0) {
                previousButton.style.display = "none";
            } else {
                previousButton.style.display = "inline-block";
            }

            if (currentSlide === slides.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "inline-block";
            } else {
                nextButton.style.display = "inline-block";
                submitButton.style.display = "none";
            }
        }

        function showNextSlide() {
            showSlide(currentSlide + 1);
        }

        function showPreviousSlide() {
            showSlide(currentSlide - 1);
        }

        var quizContainer = document.getElementById("quiz");
        var resultsContainer = document.getElementById("results");
        var submitButton = document.getElementById("submit");

        // display quiz right away
        console.log(quizContainer)
        buildQuiz();

        var previousButton = document.getElementById("previous");
        var nextButton = document.getElementById("next");
        var slides = document.querySelectorAll(".slide");
        var currentSlide = 0;

        showSlide(0);

        // on submit, show results
        submitButton.addEventListener("click", showResults);
        previousButton.addEventListener("click", showPreviousSlide);
        nextButton.addEventListener("click", showNextSlide);
    }
})(window, document, undefined);



//(function() {
   // function buildQuiz() {
      // we'll need a place to store the HTML output
     // const output = [];

      // for each question...
     // myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
      //  const answers = [];

        // and for each available answer...
       // for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
        //  answers.push(
         //   `<label>
          //    <input type="radio" name="question${questionNumber}" value="${letter}">
          //    ${letter} :
          //    ${currentQuestion.answers[letter]}
          //  </label>`
        //  );
      //  }

        // add this question and its answers to the output
       // output.push(
          //`<div class="question"> ${currentQuestion.question} </div>
          //<div class="answers"> ${answers.join("")} </div>`
       // );
      //});

      // finally combine our output list into one string of HTML and put it on the page
     // quizContainer.innerHTML = output.join("");
   // }

    //function showResults() {
      // gather answer containers from our quiz
     // const answerContainers = quizContainer.querySelectorAll(".answers");

      // keep track of user's answers
      //let numCorrect = 0;

      // for each question...
     // myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        //const answerContainer = answerContainers[questionNumber];
       // const selector = `input[name=question${questionNumber}]:checked`;
        //const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        //if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          //numCorrect++;

          // color the answers green
        //  answerContainers[questionNumber].style.color = "lightgreen";
       // } else {
          // if answer is wrong or blank
          // color the answers red
        //  answerContainers[questionNumber].style.color = "red";
       // }
     // });

      // show number of correct answers out of total
    //  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
   // }

   // const quizContainer = document.getElementById("quiz");
   // const resultsContainer = document.getElementById("results");
   // const submitButton = document.getElementById("submit");
   // const myQuestions = [
    //  {
     //   question: "Who is the strongest?",
      //  answers: {
      //    a: "Superman",
       //   b: "The Terminator",
      //    c: "Waluigi, obviously"
     //   },
     //   correctAnswer: "c"
     // },
     // {
       // question: "What is the best site ever created?",
       // answers: {
        //  a: "SitePoint",
        //  b: "Simple Steps Code",
        //  c: "Trick question; they're both the best"
        //},
        //correctAnswer: "c"
    //  },
     // {
     //   question: "Where is Waldo really?",
     //   answers: {
       //   a: "Antarctica",
       //   b: "Exploring the Pacific Ocean",
        //  c: "Sitting in a tree",
         // d: "Minding his own business, so stop asking"
      //  },
      //  correctAnswer: "d"
     // }
   // ];

    // display quiz right away
   // buildQuiz();

    // on submit, show results
  //  submitButton.addEventListener("click", showResults);
//})();
//make an End Game button 
//make sure all code is within the document.ready function from the top 

/*
//TIMER IS RIGHT HERE
//everything will be executed once the jQuery is loaded
$(document).ready(function () {
    //Put Start Button here 
    $("#startGame").on("click", function () {
        console.log("clicked")
        //make the start button DO something once clicked HERE 
    });
    //2 make the countdown timer 
    //first set a var to the number of seconds on clock
    var time = 30;
    //then make the timer run using function go

    $("#timer").on("click", go);
})

//make the #timer countdown from 30 seconds 
function countDown() {
    // Decrease number by one.
    time--;
    // Show the number in the #timeLeft div.
    $("#timeLeft").html("<h2>" + time + "seconds" + "</h2>");
    // When the number is equal to zero, 
    if (time === 0) {
        // run the stop function.
        stop();
        // Alert the user that time is up. Update the innerHTML of the message
        // div to say 'Game Over!'
        // alert('Time Up!')
        $('#message').html('time up!');
        checkAnswers();
    }
}



//create a function that tells the timer to go
function go() {
    seconds = setInterval(countDown, 1000);

}
function stop() {

    clearInterval(go);
}

//execute the go function
go();

//then make the timer run using function go


//when you click start, make the start button dissapear

//make and End Game button 
$("#endGame").on("click", function () {
    console.log("endgame")

});
*/
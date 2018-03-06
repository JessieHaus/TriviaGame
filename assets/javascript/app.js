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
})



//make and End Game button 
//make sure all code is within the document.ready function from the top 
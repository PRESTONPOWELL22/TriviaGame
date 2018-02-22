// button is #game
// row for game is #gameRow

$(document).ready(function(){
    $(".hiddenContent").hide()


    // global vars
    var questions = [
        "1. What is the set of markup symbols or codes inserted in a file intended for display on a World Wide Web browser page called?",
        "2. What describes how HTML elements are to be displayed/styled?",
        "3. What is the name of a javascript library that helps with dynamic page manipulation?",
        "4. What is the name of the popular css library made by twitter?",
        "5. What is the name of javascript framework that facebook designed?",
        "6. jQuery is a _______ library?",
        "7. This game sucks?",
        "8. What is node.js?",
        "9. What is Google's javascript framework called?",
        "10. What does the duck say?"

    ]

    var answers = [
        "Hypertext Markup Language",
        "Cascading Style Sheets",
        "jQuery",
        "Bootstrap",
        "React.js",
        "Javascript",
        "True",
        "A javascript runtime environment",
        "Angular.js",
        "Quack"        
    ]

    var correct = 0
    var incorrect = 0
    var sec = 60
    
    
    

    
    



    // function that creates the game once you click the start button
    $("#game").click(function(){
        $(".jumbotron").hide()
        $('.hiddenContent').show()

        var sec = 100
    
    
    
    
        var timer = setInterval(function() {
        $('.timer').text(sec--);
          if (sec == -1) {
            $('.timer .countdown').fadeOut('slow');
            clearInterval(timer);
          }
          if (sec <= 0){
            $(".timer").html("you ran outta time dawg") 
          }  
        }, 1000);
        var num = Math.floor(Math.random * 10)
        // question1
        $(".q1").append(questions[0])
        $(".q1a1").append(answers[3])
        $(".q1a2").append(answers[7])
        $(".q1a3").append(answers[0])

        // question2
        $(".q2").append(questions[1])
        $(".q2a1").append(answers[0])
        $(".q2a2").append(answers[2])
        $(".q2a3").append(answers[1])

        // question 3
        $(".q3").append(questions[2])
        $(".q3a1").append(answers[0])
        $(".q3a2").append(answers[2])
        $(".q3a3").append(answers[1])


        // question 4
        $(".q4").append(questions[3])
        $(".q4a1").append(answers[1])
        $(".q4a2").append(answers[7])
        $(".q4a3").append(answers[3])

        // question 5
        $(".q5").append(questions[4])
        $(".q5a1").append(answers[0])
        $(".q5a2").append(answers[4])
        $(".q5a3").append(answers[1])

        // question 6
        $(".q6").append(questions[5])
        $(".q6a1").append(answers[0])
        $(".q6a2").append(answers[5])
        $(".q6a3").append(answers[1])

        // question 7
        $(".q7").append(questions[6])
        $(".q7a1").append(answers[6])
        $(".q7a2").append("false")
        $(".q7a3").append("chicken noodle soup")

        // question 8
        $(".q8").append(questions[7])
        $(".q8a1").append(answers[0])
        $(".q8a2").append(answers[7])
        $(".q8a3").append(answers[1])

        // question 9
        $(".q9").append(questions[8])
        $(".q9a1").append(answers[4])
        $(".q9a2").append(answers[8])
        $(".q9a3").append(answers[1])

        // question 10
        $(".q10").append(questions[9])
        $(".q10a1").append(answers[0])
        $(".q10a2").append(answers[9])
        $(".q10a3").append(answers[1])
        
        



                
    })
    



























})
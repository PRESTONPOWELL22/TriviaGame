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

    var one = {
        question: "What is the set of markup symbols or codes inserted in a file intended for display on a World Wide Web browser page called?",
        rightAns: 2,
        answers: ["Chinese", "Javascript", "Hypertext Markup Language"]
    }

    var two = {
        question: "What describes how HTML elements are to be displayed/styled?",
        rightAns: 1,
        answers: ["Microdata", "CSS", "Sass"]
    }

    var three = {
        question: "What is the name of a javascript library that makes dynamic page manipulation easier?",
        rightAns: 0,
        answers: ["jQuery", "React.js", "Angular.js"]
    }

    var four = {
        question: "What is the name of the popular css library made by twitter?",
        rightAns: 2,
        answers: ["Twitter Public Library", "Sass", "Bootstrap"]
    }

    var five = {
        question: "jQuery is a _______ library?",
        rightAns: 0,
        answers:["Javascript","CSS","HTML"]
    }

    var six = {
        question: "This game sucks?",
        rightAns: 0,
        answers:["Hotdog","True","False"]
    }

    var seven = {
        question: "What is node.js?",
        rightAns: 1,
        answers:["A javascript library","A javascript runtime environment","Another name for bootstrap"]
    }

    var eight = {
        question: "What is Google's javascript framework called?",
        rightAns: 1,
        answers:["Node.js","Angular.js","React.js"]
    }

    var nine = {
        question: "What is the name of javascript framework that facebook designed?",
        rightAns: 2,
        answers:["Bootstrap","Angular.js","React.js"]
    }

    var ten = {
        question: "What does the duck say?",
        rightAns: 0,
        answers:["Quack","Moo","Shux"]
    }
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
        // var num = Math.floor(Math.random * 10)
        // question1
        $(".q1").append(one.question)
        $(".q1a1").append(one.answers[0])
        $(".q1a2").append(one.answers[1])
        $(".q1a3").append(one.answers[2])

        // question2
        $(".q2").append(two.question)
        $(".q2a1").append(two.answers[0])
        $(".q2a2").append(two.answers[1])
        $(".q2a3").append(two.answers[2])

        // question 3
        $(".q3").append(three.question)
        $(".q3a1").append(three.answers[0])
        $(".q3a2").append(three.answers[1])
        $(".q3a3").append(three.answers[2])


        // question 4
        $(".q4").append(four.question)
        $(".q4a1").append(four.answers[0])
        $(".q4a2").append(four.answers[1])
        $(".q4a3").append(four.answers[2])

        // question 5
        $(".q5").append(five.question)
        $(".q5a1").append(five.answers[0])
        $(".q5a2").append(five.answers[1])
        $(".q5a3").append(five.answers[2])

        // question 6
        $(".q6").append(six.question)
        $(".q6a1").append(six.answers[0])
        $(".q6a2").append(six.answers[1])
        $(".q6a3").append(six.answers[2])

        // question 7
        $(".q7").append(seven.question)
        $(".q7a1").append(seven.answers[0])
        $(".q7a2").append(seven.answers[1])
        $(".q7a3").append(seven.answers[2])

        // question 8
        $(".q8").append(eight.question)
        $(".q8a1").append(eight.answers[0])
        $(".q8a2").append(eight.answers[1])
        $(".q8a3").append(eight.answers[2])

        // question 9
        $(".q9").append(nine.question)
        $(".q9a1").append(nine.answers[0])
        $(".q9a2").append(nine.answers[1])
        $(".q9a3").append(nine.answers[2])

        // question 10
        $(".q10").append(ten.question)
        $(".q10a1").append(ten.answers[0])
        $(".q10a2").append(ten.answers[1])
        $(".q10a3").append(ten.answers[2])
        
        
        $( "form" ).submit(function( event ) {
            event.preventDefault();
           
            var ans = $('select option:selected'); // [$(option) ... $(option)]
            var valuess = []
            $.map(ans, function(elem) {
                valuess.push(parseInt($(elem).val()));
              });
            // console.log(valuess);
            function getSum(total, num) {
                return total + num;
            }
            correct = valuess.reduce(getSum)
            // console.log(correct)
            wrong = 10 - correct
            $(".hiddenContent").hide()
            $('#correct').append("you got " + correct + " right")
            $('#wrong').append("you got " + wrong + " wrong")
            percent = correct*10
            $("#percent").append("you scored " + percent + "%")
            
        });


                
    })
    



























})
$(document).ready(function() {
    
    
    // Question 1, return a letter grade "A", "B".. when an integer is passed in. I used a button to clearly show the input and output

  

    $("#gradeIt").click(function() {
    
        var score = $("#number-grade").val().trim();

        if (score <= 71 && score >= 0) {
            $('#output').html("You got an F. Looks like you'll have to retake the test");
        } else
        if (score >= 72 && score <= 79) {
            $('#output').html("You got a C. Time to brush up!");
        } else
        if (score >= 80 && score <= 89) {
            $('#output').html("You got a B! Not Bad!");
        } else
        if (score >= 90 && score <= 100) {
            $('#output').html("You got an A! Great Job!");
        } else {
            $('#output').html("I'm sorry that value is out of range");            
        }
    });

    // Question 2, set focus to an anchor tag when a button with class of skip is clicked

    $('#focus').click(function() {
        $("#main").focus();
    });

    // Question 3, I used a button to add the class of learn to all anchor tags with text of "learn more", I used the toggleClass method instead of addClass because I think it makes it easier to illustrate the change in class. I added some CSS to the cleass learn to further show the change in class

    $("#learn").click(function() {
            var foundin = $('a:contains("learn more")');
            foundin.toggleClass('learn');
    });
});

    


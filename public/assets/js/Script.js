$(document).ready(function() {
    $(window).keydown((enter) => {
      if(enter.keyCode == 13) {
        enter.preventDefault();
        return false;
        }
    });

    $('#button').attr('disabled', true);
    $('#password').keyup(function() {
        if ($(this).val().length !=0) {
            $('#button').attr('disabled', false);  
        }          
        else {
            $('#button').attr('disabled', true);
        }
    });

});

var v = document.getElementById("scores");
var x = document.getElementById("pass_stats")

function brokenAuth() {
    const input = $("#password").val();
    console.log(input);
    if (input !== null) {
        v.style.display = "inline";
        x.style.display = "inline";
        const stats = zxcvbn(input);
        var numberofGuesses = stats.guesses; 
        var passwordScore = stats.score;
        var suggestions = stats.feedback.suggestions;
        var crackTime = stats.crack_times_display;
        
        document.getElementById("passGuess").innerHTML = "It is estimated that your password can be cracked in " + numberofGuesses + " guesses.";
        document.getElementById("passTime1").innerHTML = "In scenario A, your password would take approximately " + crackTime.online_throttling_100_per_hour + " to crack."
        document.getElementById("passTime2").innerHTML = "In scenario B, your password would take approximately " + crackTime.online_no_throttling_10_per_second + " to crack."
        document.getElementById("passTime3").innerHTML = "In scenario C, your password would take approximately " + crackTime.offline_slow_hashing_1e4_per_second + " to crack."
        document.getElementById("passTime4").innerHTML = "In scenario D, your password would take approximately " + crackTime.offline_fast_hashing_1e10_per_second + " to crack."
        document.getElementById("passScore").innerHTML = "Your password has a score of " + passwordScore;
        document.getElementById("passFeedback2").innerHTML = "Here is some suggestions for your password (if any), in order to make it more secure: " + suggestions
        document.getElementById("passFeedback").innerHTML = "Here are some warnings for your password (if any): " + stats.feedback.warning 
    } 
    
}



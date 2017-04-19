$(document).ready(function() {
   $("#editfield").focus();
   $("#submit").click(function(){

    var valuefield = $.trim($("#editfield").val());
      // var remCharacters = ',.!@#$%^&*()_+<>?/`~';
      // $('#enterName').show();
      $('#outputHere').show();

      if (valuefield == "") {
          $('#enterName').text("Enter Your Name. ").show().fadeOut(5000);
          $("#editfield").focus();
      }
      else {
        var myArray = [
        'Is Awesome! :)', 
        'You have the best laugh.', 
        'Your perspective is so refreshing.', 
        'Is that your picture next to "charming" in the dictionary? damn!!', 
        "On a scale from 1 to 10, you're an 11.", 
        "You're even more beautiful on the inside than you are on the outside.", 
        'Your eyes are breathtaking!',
        "You're hotter than the sun!",
        "You're like sunshine on a rainy day.",
        'You were cool way before hipsters were cool. How bah dah!?',
        'You smell really good. :)',
        'Being around you makes everything better!',
        "You're wonderful.", 
        "You're one of a kind!", 
        "You na Menses!", 
        "You're inspiring.", 
        'You could survive a Zombie apocalypse.',
        "You're great at figuring stuff out.",
        "Who raised you? They deserve a medal for a job well done.",
        "You're gorgeous and that's the least interesting thing about you, too.",
        'Any team would be lucky to have you on it.',
        "You're really special. :)",
        "You're a gift to those around you.",
        'Your smile is contagious. :)',
        'You look great today.',
        "You're a smart cookie.",
        'I bet you make babies smile.', 
        "On a scale of 1 to 10, you're an 11."
        ];

        var rand = Math.floor(Math.random() * myArray.length);
        var random = myArray[rand];
        $("#outputHere").text(valuefield + ',' + ' ' + random.toLowerCase());

      }
  });
});


$('#cancel').click(function(){
     $("#editfield").focus();
     $('#enterName').hide();
     $('#outputHere').hide();
     $("#outputHere").empty();
});

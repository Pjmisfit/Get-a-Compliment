$(document).ready(function() {
   $("#editfield").focus();

  $(document).keydown(function(e){ /*enter to submit*/
      if (e.keyCode == 13) { 
        e.preventDefault(); 
         $('#submit').click();
      }
  });   
   $("#submit").click(function(){
    var valuefield = $.trim($("#editfield").val());
      $('#outputHere').show();

        // var dont = $("#editfield").val().match(/^[a-zA-Z]+$/);
        var dont = $("#editfield").val().match(/^[1234567890+_)(*&^%$#@!:;"//'?/><,."{}) ]+$/);/*filter characters*/
        var lent = $("#editfield").val().length;
      if (valuefield == "" || valuefield == dont || lent < 2) {
          $('#enterName').text("enter your name. ").show().fadeOut(5000);
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
        "On a scale of 1 to 10, you're an 11.",
        "You’re so special.",
        "You’re talented.",
        "You’re creative.",
        "You’re inspiring.",
        "You’re fantastic.",
        "You’re one of a kind.",
        "You’re unique.",
        "You do things with excellence.",
        "You make a difference.",
        "The World needs more people like you."

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


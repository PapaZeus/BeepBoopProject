//FRONT END
$(document).ready(function() {
  $("form").keyup(function(event){
    event.preventDefault();
    let userInput = parseInt($("#numberInput").val());
    $("#results").text(beepboopGenerator(userInput));
  });


//BACK END

function beepboopGenerator(userInput) {

let results = [];

  for (let i = 1; i <= userInput; i++) {

    if (i.toString().match(/3/)) {

      results.push(" I'm sorry Dave. I'm afraid I can't do that.")
    }
    else if (i.toString().match(/1/)) {

      results.push(" Beep!")
    }
    else if (i.toString().match(/2/)) {

      results.push(" Boop!")
    }
    else {
      results.push(i);
    }
  }
    return results;

  }
});

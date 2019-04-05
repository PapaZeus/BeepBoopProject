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

}

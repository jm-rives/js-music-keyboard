'use strict'

console.log("Nothings happend yet.");

$(document).ready( function() {
  console.log("Inside the first fxn, nothings happened yet either");

  $('div.instrument > .note_c').click(function(){
    console.log("Inside .click() fxn");
    $('div.audio > cAudio')[0].play();
    console.log("Did that thing happen? NOPE");
  });
});
  // $('div.instrument > note c').click()function()) {
    // alert("That thing you wanted to work WERKED!")
  // })
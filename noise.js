'use strict'

console.log("Nothings happend yet.");

$(document).ready( function() {
  console.log("Inside the first fxn, nothings happened yet either");

  $('div.instrument > .note_c').click(function(){
    console.log("Inside .click() fxn");

    var cNote = $('div#audio_embeds > #cAudio')[0];

    cNote.play();
    
    // noteC.addEventListener('ended', function() {
    //     this.currentTime = 0;
    //     this.play();
    // }, false);
    
    // $('#play').click(function() {
    //     noteC.play();
    // });
    
    // $('#pause').click(function() {
    //     noteC.pause();
    // });


    console.log("Did that thing happen? NOPE");
  });
});
  // $('div.instrument > note c').click()function()) {
    // alert("That thing you wanted to work WERKED!")
  // })
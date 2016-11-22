'use strict'

$(document).ready( function() {


  $('div.instrument > .note_c').click(function(){

    var cNote = $('div#audio_embeds > #cAudio')[0];
    cNote.play();
  });

  $('div.instrument > .note_d').click(function(){

    var dNote = $('div#audio_embeds > #dAudio')[0];
    dNote.play();
  });

  $('div.instrument > .note_e').click(function(){

    var eNote = $('div#audio_embeds > #eAudio')[0];
    eNote.play();
  });


});
  // $('div.instrument > note c').click()function()) {
    // alert("That thing you wanted to work WERKED!")
  // })

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

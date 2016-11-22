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

  $('div.instrument > .note_f').click(function(){

    var fNote = $('div#audio_embeds > #fAudio')[0];
    fNote.play();
  });

  $('div.instrument > .note_g').click(function(){

    var gNote = $('div#audio_embeds > #gAudio')[0];
    gNote.play();
  });

  $('div.instrument > .note_a').click(function(){

    var aNote = $('div#audio_embeds > #aAudio')[0];
    aNote.play();
  });

  $('div.instrument > .note_b').click(function(){

    var bNote = $('div#audio_embeds > #bAudio')[0];
    bNote.play();
  });
});
  
  // TODO JM-RIVES FIX broken CSS/ HTML

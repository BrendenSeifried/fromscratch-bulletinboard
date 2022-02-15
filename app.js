// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

import { getNotes } from './fetch-utils.js';
import { renderNoteDetail } from './render-utils.js';
//import { renderDogCard } from './render-utils.js';

const noteDetailContainer = document.getElementById('note-list-container');




window.addEventListener('load', async () =>{
   // const params = new URLSearchParams(window.location.search);
    //const id = params.get('id');

    const note = await getNotes();
    console.log(note);

    const noteDeets = renderNoteDetail(note);
    noteDetailContainer.append(noteDeets);

});

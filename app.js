// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

import { getNotes } from './fetch-utils.js';
import { renderNoteDetail } from './render-utils.js';

const noteDetailContainer = document.getElementById('note-detail-container');

const logInBtn = document.getElementById('loginbtn');

const createBtn = document.getElementById('createbtn');

logInBtn.addEventListener('click', () =>{
    location.replace('./authpage');
});

createBtn.addEventListener('click', () =>{
    location.replace('./createpage');
});


window.addEventListener ('load', async () =>{

    const notes = await getNotes();
    //console.log(notes);

    for (let note of notes) {
        const noteDeets = renderNoteDetail(note);
        noteDetailContainer.append(noteDeets);
        //console.log(note);
    }

});

export function renderNoteDetail(note) {
    const div = document.createElement('div');
    //const img = document.createElement('img');
    //const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const dateEl = document.createElement('p');
    const infoEl = document.createElement('p');
    //const ageAndBreedEl = document.createElement('div');

    div.classList.add('note-detail');

    nameEl.textContent = note.name;
    nameEl.classList.add('name');

    dateEl.textContent = note.name;
    dateEl.classList.add('date');

    infoEl.textContent = note.name;
    infoEl.classList.add('info');


    div.append(nameEl, dateEl, infoEl);

    return div;

}
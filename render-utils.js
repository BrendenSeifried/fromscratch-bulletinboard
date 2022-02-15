// export function renderNoteCard(note) {
//     const div = document.createElement('div');
//     const a = document.createElement('a');
//     const img = document.createElement('img');
//     const p = document.createElement('p');

//     div.classList.add('dog-card');

//     p.textContent = dog.name;
//     img.src = `./assets/${dog.breed}.jpeg`;
//     //a.href = `http://127.0.0.1:5500/detail/index/?id=${dog.id}`; // link to the dog's detail page here
//     a.href = `./detail/?id=${dog.id}`;
    
//     div.append(p, img);

//     a.append(div);

//     return a;
// }




export function renderNoteDetail(note) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const dateEl = document.createElement('p');
    const infoEl = document.createElement('p');

    div.classList.add('note-detail');

    nameEl.textContent = note.name;
    nameEl.classList.add('name');

    dateEl.textContent = note.date;
    dateEl.classList.add('date');

    infoEl.textContent = note.info;
    infoEl.classList.add('info');


    div.append(nameEl, dateEl, infoEl);

    return div;

}
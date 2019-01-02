// NOTE TAKING APP

console.log("*** *** *** YOUR PERSONAL NOTEBOOK *** *** ***")

// Saving a note

let notes = [];
function addNote (noteId, note) {
       notes.push({noteId, note});
}
addNote(10001, "First note that you need to keep");
addNote(10002, "Second note that you need to keep");
addNote(10003, "Third note that you need to keep");
addNote(10004, "Forth note to keep");
addNote(10005, "To be continued");

console.log(notes);
console.log("---------------------------------");


// Geting a note

function getNoteFromId(id) {
    for (let i=0; i < notes.length; i++) {
            if (id === notes[i].noteId) {
                return notes[i];
            } 
            } 
    return "Note with ID "+ id + " doesn't exist";
        }      


console.log (getNoteFromId(10002));
console.log ("---------------------------------");

// Reading notes

function showAllNotes() {
    for (let i=0; i < notes.length; i++) {
        console.log ("The note with id: " + notes[i].noteId + ", has the following note text: " + notes[i].note);
    }
}

showAllNotes();
console.log ("---------------------------------");


// Unique feature
// Every note has its own importance, so we add third key ("priority") and will sort all notes according to its status


// Step-1 - assigning importance to objects and show them as a list of notes;
function addPriority (importance) {
    for (let i=0; i < notes.length; i++) {
        notes[i].priority = importance[i];
        console.log(notes[i]);
    }
}

addPriority (["important", "middle", "low", "low", "important"]);
console.log ("---------------------------------");

// Step-2 - according to notes' importance we assign indexes and then sorting notes;
let sortedNotes = [];
function sortNotes () {
    for (let i=0; i < notes.length; i++) {
            if (notes[i].priority === "important") {
                notes[i].impIndex = 1;
        } else if (notes[i].priority === "middle") {
            notes[i].impIndex = 2;
        } else {
            notes[i].impIndex = 3;
        }
    }
    notes.sort(function (a,b) {return a.impIndex - b.impIndex});
    displayNotes ();
}

// Step-3 - rule of showing sorted notes
function displayNotes () {
    //console.log(notes[0].noteId + " - " + notes[0].priority + " - " + notes[0].note);
    //console.log(notes[1].noteId + " - " + notes[1].priority + " - " + notes[1].note);
    //console.log(notes[2].noteId + " - " + notes[2].priority + " - " + notes[2].note);
    //console.log(notes[3].noteId + " - " + notes[3].priority + " - " + notes[3].note);
    //console.log(notes[4].noteId + " - " + notes[4].priority + " - " + notes[4].note);
    for (let i=0; i<notes.length; i++) {
        console.log (notes[i].noteId + " - " + notes[i].priority + " - " + notes[i].note);
 }
}

sortNotes();
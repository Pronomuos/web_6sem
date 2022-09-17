const note = document.getElementById('note');
const notes = document.getElementById('notes');
const notebookSocket = io('/notebook');

note.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    send();
  }
});

function send() {
  notebookSocket.emit('note', note.value);
  note.value = '';
  note.focus();
}

notebookSocket.on('connect', () => {
  console.log('socket connected');
});

notebookSocket.on('disconnect', () => {
  console.log('socket disconnected');
});

notebookSocket.on('note', (note) => {
  console.log('received:', note);
  receiveNote(note);
});

function receiveNote(note) {
  notes.appendChild(createNote(note));
}

function createNote(note) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(note));
  return li;
}
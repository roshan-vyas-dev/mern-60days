import { useState, useEffect } from "react"
import { createNote, getAllNotes, deleteNote as deleteNoteApi } from './api/notesApi'
import Login from "./Login";


function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
}

  const addNote = async () => {
    if (!title || !content) {
      alert("Please fill both fields");
      return;
    }

    const savedNote = await createNote({ title, content })

    setNotes([...notes, savedNote])

    setTitle("");
    setContent("");
  }

  const deleteNote = async (id) => {

    await deleteNoteApi(id);

    setNotes(notes.filter(note => note._id !== id));


  }

  useEffect(() => {
    async function fetchNotes() {
      const data = await getAllNotes();
      setNotes(Array.isArray(data) ? data : []);
    }
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes App</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Write your notes" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={addNote}>Add Note</button>

      {notes.length === 0 && <p>No notes yet. Add one above!</p>}

      {notes.map((note) =>

        <div key={note._id} >
          <p>{note.title}</p>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>delete</button>

        </div>



      )}

    </div>
  )
}

export default App

import { useState } from "react"

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (!title || !content) {
      alert("Please fill both fields");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    }

    setNotes([...notes, newNote])

    setTitle("");
    setContent("");
  }

  const deleteNote = (id) => {

    setNotes(notes.filter(note => note.id !== id));


  }

  return (
    <div>
      <h1>Notes App</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Write your notes" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={addNote}>Add Note</button>

      {notes.length === 0 && <p>No notes yet. Add one above!</p>}

      {notes.map((note) =>

        <div key={note.id} >
          <p>{note.title}</p>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note.id)}>delete</button>

        </div>



      )}

    </div>
  )
}

export default App

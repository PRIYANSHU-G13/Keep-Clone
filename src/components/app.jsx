import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
        return [...prevNotes, newNote];
        });
    }

    function deleteNote(noteId) {
        setNotes((prevNotes) => {
        return prevNotes.filter((note, index) => {
            return index !== noteId;
        });
        });
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delNote={deleteNote}
          />
        );
      })}
        <Footer />
    </div>
}

 export default App;

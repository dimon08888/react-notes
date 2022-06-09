import React, { useState } from 'react'
import { Header } from './header'
import { NoteDetail } from './note-detail'
import { Route, Routes } from 'react-router-dom'
import { AddNote } from './add-note'
import { NoteList } from './note-list'

function App() {
  const [isGridView, setGridView] = useState(true)
  const [notes, setNotes] = useState([
    <NoteDetail title={'Hello'} content={'World'} />,
    <NoteDetail title={'Hello Hello'} content={'World World'} />,
    <NoteDetail title={'Hello Hello Hello'} content={'World World World'} />,
  ])

  return (
    <div>
      <Header setGridView={setGridView} />
      <Routes>
        <Route path='/' element={<NoteList isGridView={isGridView} notes={notes} />} />
        <Route path='/create-note' element={<AddNote setNotes={setNotes} />} />
        <Route path='/note-detail/:id' element={<NoteDetail />} />
      </Routes>
    </div>
  )
}

export default App

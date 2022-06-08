import React, { useState } from 'react'
import { Header } from './header'
import { NoteDetail } from './note-detail'
import { Route, Router, Routes } from 'react-router-dom'
import { AddNote } from './add-note'
import { NoteList } from './note-list'

function App() {
  const [isGridView, setGridView] = useState(true)

  return (
    <div>
      <Header setGridView={setGridView} />
      <Routes>
        <Route path='/' element={<NoteList isGridView={isGridView} />} />
        <Route path='/create-note' element={<AddNote />} />
        <Route path='/note-detail/:id' element={<NoteDetail />} />
      </Routes>
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { Header } from './header'
import { NoteDetail } from './note-detail'
import { Route, Routes } from 'react-router-dom'
import { AddNote } from './add-note'
import { NoteList } from './note-list'

export type NoteType = string[]

function App() {
  const [isGridView, setGridView] = useState(true)
  const [notes, setNotes] = useState<NoteType[]>([
    [
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    ],
    [
      'qui est esse',
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    ],
    [
      'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    ],
  ])

  // useEffect(() => {
  //   window.localStorage.setItem('notes', )
  // }, [notes])

  // useEffect(() => {
  //  const storedNotes = window.localStorage.getItem('notes')
  //   if (storedNotes) {
  //    JSON.parse(storedNotes)
  //   }
  // },[])

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

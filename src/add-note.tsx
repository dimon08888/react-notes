import React, { useState } from 'react'
import { NoteDetail } from './note-detail'

export function AddNote({
  setNotes,
}: {
  setNotes: React.Dispatch<React.SetStateAction<JSX.Element[]>>
}) {
  const [noteTitle, setNoteTitle] = useState('')
  const [descriptionNote, setDescriptionNote] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col'>
      <input
        type='text'
        placeholder='Title'
        onChange={e => setNoteTitle(e.target.value)}
        value={noteTitle}
        className='h-9 placeholder-red-600 pl-2 '
      />
      <textarea
        onChange={e => setDescriptionNote(e.target.value)}
        value={descriptionNote}
        className='h-48 bg-slate-300 pl-2'
      ></textarea>
      <button
        onClick={() =>
          setNotes(notes =>
            notes.concat(<NoteDetail title={noteTitle} content={descriptionNote} />)
          )
        }
        className='bg-slate-400 mx-auto my-2 px-10 hover:bg-slate-300 cursor-pointer'
      >
        Save
      </button>
    </form>
  )
}

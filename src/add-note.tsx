import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NoteType } from './App'
import { NoteDetail } from './note-detail'

export function AddNote({
  setNotes,
}: {
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>
}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setNotes(notes => notes.concat([[title, content]]))
    navigate('/')
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col'>
      <input
        type='text'
        placeholder='Title'
        onChange={e => setTitle(e.target.value)}
        value={title}
        className='h-9 placeholder-red-600 pl-2 '
      />
      <textarea
        onChange={e => setContent(e.target.value)}
        value={content}
        className='h-48 bg-slate-300 pl-2'
      ></textarea>
      <button className='bg-slate-400 mx-auto my-2 px-10 hover:bg-slate-300 cursor-pointer'>
        Save
      </button>
    </form>
  )
}

import './App.css'
import { Link } from 'react-router-dom'
import { NoteType } from './App'
import { NoteDetail } from './note-detail'

export function NoteList({
  isGridView,
  notes,
}: {
  isGridView: boolean
  notes: NoteType[]
}) {
  return (
    <div className={isGridView ? 'note-grid' : 'ml-2'}>
      {notes.map((note, i) => (
        <Link to='/note-detail' className='w-full' key={i}>
          <NoteDetail title={note[0]} content={note[1]} />
        </Link>
      ))}
    </div>
  )
}

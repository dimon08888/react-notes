import './App.css'
import { Link } from 'react-router-dom'

export function NoteList({
  isGridView,
  notes,
}: {
  isGridView: boolean
  notes: JSX.Element[]
}) {
  return (
    <div className={isGridView ? 'note-grid' : 'ml-2'}>
      {notes.map((note, i) => (
        <Link to='/note-detail' className='w-full' key={i}>
          {note}
        </Link>
      ))}
    </div>
  )
}

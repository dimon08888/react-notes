import { NoteDetail } from './note-detail'
import './App.css'
import { Link } from 'react-router-dom'

export function NoteList({ isGridView }: { isGridView: boolean }) {
  const arrNotes = [
    <NoteDetail title={'Hello'} content={'World'} />,
    <NoteDetail title={'Hello Hello'} content={'World World'} />,
    <NoteDetail title={'qqweqwee'} content={'qwrqwrqwqwtqwtqw'} />,
  ]

  return (
    <div className={isGridView ? 'note-grid' : ''}>
      {arrNotes.map((note, i) => (
        <Link
          to='/note-detail'
          className='border-2 border-solid border-black cursor-pointer my-2'
          key={i}
        >
          {note}
        </Link>
      ))}
    </div>
  )
}

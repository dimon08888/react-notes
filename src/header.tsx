import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header({
  setGridView,
}: {
  setGridView: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [search, setSearch] = useState('')

  return (
    <div>
      <button onClick={() => setGridView(isGridView => !isGridView)}>grid view</button>
      <Link to='/'> &lt; </Link>
      <button>delete note</button>
      <Link to='/create-note'>Add note</Link>

      <input
        type='text'
        placeholder='Search'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
    </div>
  )
}

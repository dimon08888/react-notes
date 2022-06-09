import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header({
  setGridView,
}: {
  setGridView: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [search, setSearch] = useState('')

  return (
    <div className='bg-slate-500 h-16 flex'>
      <div className='flex justify-center items-center w-1/3 gap-4'>
        <button
          className='text-red-600 no-underline bg-slate-200 rounded-xl hover:bg-slate-600 px-2 py-1 cursor-pointer'
          onClick={() => setGridView(isGridView => !isGridView)}
        >
          grid view
        </button>

        <Link
          className='text-red-600 no-underline bg-slate-200 rounded-xl hover:bg-slate-600 px-2 py-1'
          to='/'
        >
          &lt;
        </Link>

        <button className='text-red-600 no-underline bg-slate-200 rounded-xl hover:bg-slate-600 px-2 py-1 cursor-pointer'>
          delete note
        </button>
        <Link
          className='text-red-600 no-underline bg-slate-200 rounded-xl hover:bg-slate-600 px-2 py-1'
          to='/create-note'
        >
          Add note
        </Link>
      </div>

      <div className='flex flex-grow justify-center items-center'>
        <input
          className=' text-red-600 rounded bg-slate-200 h-6 w-52 placeholder-red-600'
          type='text'
          placeholder='Search'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </div>
  )
}

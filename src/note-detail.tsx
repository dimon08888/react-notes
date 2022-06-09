import { useParams } from 'react-router-dom'

export function NoteDetail({ title, content }: { title?: string; content?: string }) {
  const params = useParams()

  return (
    <div className='border-2 border-solid border-black my-2 max-w-xs relative'>
      <button className='font-bold absolute right-1 top-1'>...</button>
      <h3 className='ml-2'>{title}</h3>
      <div className='ml-2'>{content}</div>
    </div>
  )
}

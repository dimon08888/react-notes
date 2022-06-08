import { useParams } from 'react-router-dom'

export function NoteDetail({ title, content }: { title?: string; content?: string }) {
  const params = useParams()

  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  )
}

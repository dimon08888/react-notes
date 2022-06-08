import React from 'react'
export function AddNote() {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Title' />
      <textarea></textarea>
      <button>Save</button>
    </form>
  )
}

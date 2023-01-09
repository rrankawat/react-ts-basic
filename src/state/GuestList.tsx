import { useState } from 'react'

const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const onClick = () => {
    setGuests([...guests, name])
    setName('')
  }

  return (
    <div>
      <h2>Guest List</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  )
}

export default GuestList

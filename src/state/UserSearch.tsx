import { useState } from 'react'

interface User {
  name: string
  age: number
}

const users = [
  {
    name: 'Sarah',
    age: 20,
  },
  {
    name: 'Alex',
    age: 21,
  },
  {
    name: 'Michael',
    age: 22,
  },
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<User | undefined>()

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name)

    setUser(foundUser)
  }

  return (
    <div>
      <h2>User Search</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>

      <br />
      <br />
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  )
}

export default UserSearch

import { Component } from 'react'

interface User {
  name: string
  age: number
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string
  user: User | undefined
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  }

  onClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    )

    this.setState({ user: foundUser })
  }

  render() {
    const { name, user } = this.state

    return (
      <div>
        <h2>User Search</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>

        <br />
        <br />
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
      </div>
    )
  }
}

export default UserSearch

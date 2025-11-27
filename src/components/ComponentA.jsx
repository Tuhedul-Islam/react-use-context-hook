import React, {useState} from 'react'
import ComponentB from './ComponentB'
import { UserContext } from './UserContext'

const ComponentA = () => {

    const users = [
        {name: 'John Doe', age: 30}
    ];

    const [allUsers, setAllUsers] = useState(users)
    const [text, setText] = useState('Hello World from text state')

  return (
    <div>
      <UserContext.Provider value={{allUsers, text}}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA
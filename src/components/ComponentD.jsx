import React, {useContext} from 'react'
import {UserContext} from './UserContext' 

const ComponentD = () => {
  const data = useContext(UserContext)
  const {allUsers, text} = data
  console.log(allUsers, text)

  return (
    <div>
        {
            allUsers.map((user, index) => {
                return (
                    <div key={index} style={{'border': 'border'}}>
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                    </div>
                )
            })
        }
        
        <p>{text}</p>
    </div>
  )
}

export default ComponentD
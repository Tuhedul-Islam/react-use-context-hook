import React from 'react'
export const UserContext = React.createContext();
//or
//export { UserContext };

//..................
//Provider, Consumer

//<UserContext.Provider value={{allUsers, text}}>
//     <ComponentB />
//   </UserContext.Provider>
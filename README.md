# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Getting Started [Learning]
```jsx

- Procedure
1. Create context
2. wrap the child component with context provider
3. wrap the child component with context consumer
4. use context in child component


- create context

import React from 'react'
export const UserContext = React.createContext();
//or
//export { UserContext };

//..................
//Provider, Consumer

//<UserContext.Provider value={{allUsers, text}}>
//     <ComponentB />
//   </UserContext.Provider>




- Used in Child Component
.........................
const data = useContext(UserContext)
const {allUsers, text} = data
console.log(allUsers, text)

```
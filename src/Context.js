import React, { useEffect, useState } from "react"

export const context = React.createContext()

export const MyProvider = ({ children }) => {
   const [theme, setTheme] = useState(true)

   console.log(theme)

   const { Provider } = context
   return (
      <Provider value={{ theme,setTheme }}>
         {children}
      </Provider>
   )
}
import { createContext, useState, useEffect } from 'react'
import { API_URL } from '@/config/index'

const ThemeContext = createContext()

export const ThemeProviderctx = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(null)
  const [allThemes, setAllThemes] = useState([])

  const NAME = 'JEFF'

  // useEffect(() => getAllThemes(), [])

  // useEffect(() => {
  //   console.log(currentTheme)
  // }, [currentTheme])

  // To do: change theme
  const changeTheme = () => {
    // const randomTheme = allThemes[Math.floor(Math.random() * allThemes.length)]
    // setCurrentTheme(randomTheme)
    console.log('YOO')
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        allThemes,
        changeTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Footer({ footerLink }) {
  const { theme, setTheme } = useTheme()
  const [allThemes, setAllThemes] = useState(null)
  const [mounted, setMounted] = useState(false)
  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
    setAllThemes(localStorage.getItem('themes'))
  }, [])

  const handleRandomiseTheme = () => {
    const themeIndex = theme.split('').pop()
    const parsedThemes = JSON.parse(allThemes)

    const themeNames = parsedThemes
      .filter(theme => {
        return theme.id != themeIndex
      })
      .map(x => {
        return `theme${x.id}`
      })

    setTheme(themeNames[Math.floor(Math.random() * themeNames.length)])
  }

  if (!mounted) return null

  return (
    <footer className={styles.footer}>
      <div className={styles.textContainer}>
        <p onClick={() => handleRandomiseTheme()}>Play</p>
        <p className={styles.link}>
          <Link href={footerLink === 'work' ? '/' : `/${footerLink}`}>
            {footerLink}
          </Link>
        </p>
      </div>
    </footer>
  )
}

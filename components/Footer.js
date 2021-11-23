import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'

export default function Footer({ footerLink }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.textContainer}>
        <p>Play</p>
        <p className={styles.link}>
          <Link href={`/${footerLink}`}>{footerLink}</Link>
        </p>
      </div>
    </footer>
  )
}

import styles from '../styles/Terms.module.scss'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import {  fadeInOut } from '../animations'
import { motion } from 'framer-motion'

export default function Terms({ termspage }) {
  return (
    <Layout footerLink='info'>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href='/'>
            <h1 className='cn-logo'>CN</h1>
          </Link>
          <motion.div
            className={styles.info}
            initial={fadeInOut.initial}
            transition={{
              ease: 'easeInOut',
              duration: '0.5'
            }}
            exit={fadeInOut.exit}
            animate={fadeInOut.animate}
          >
            <ReactMarkdown linkTarget='_blank'>{termspage.terms}</ReactMarkdown>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const termspageRes = await fetch(`${API_URL}/termspage`)
  const termspage = await termspageRes.json()

  return {
    props: { termspage }, // will be passed to the page component as props
    revalidate: 1
  }
}

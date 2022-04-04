import styles from '../styles/Home.module.scss'
import Layout from '@/components/Layout'
import Carousel from '@/components/Carousel'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import { fadeInOut } from '../animations'
import { motion } from 'framer-motion'

export default function Home({ projects, homepage }) {
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
            <ReactMarkdown>{homepage.text}</ReactMarkdown>
          </motion.div>
        </div>
      </div>
      <motion.div
        className={styles.carouselContainer}
        initial={fadeInOut.initial}
        transition={{
          ease: 'easeInOut',
          duration: '0.5',
          delay: 0.3
        }}
        exit={fadeInOut.exit}
        animate={fadeInOut.animate}
      >
        <Carousel projects={projects} />
      </motion.div>

      <div className={styles.mobileInfo}>
        <ReactMarkdown>{homepage.text}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export async function getStaticProps(pageProps) {
  const projectsRes = await fetch(`${API_URL}/projects`)
  const homePageRes = await fetch(`${API_URL}/homepage`)
  const projects = await projectsRes.json()
  const homepage = await homePageRes.json()

  return {
    props: { projects, homepage }, // will be passed to the page component as props
    revalidate: 1
  }
}

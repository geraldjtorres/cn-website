import styles from '../styles/Home.module.scss'
import Layout from '@/components/Layout'
import Carousel from '@/components/Carousel'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import { slideUp } from '../animations'
import { motion } from 'framer-motion'

export default function Home({ projects, homepage, metaData }) {
  return (
    <Layout footerLink='info' metaData={metaData}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href='/'>
            <h1 className='cn-logo'>CN</h1>
          </Link>
          <motion.div
            className={styles.info}
            initial={slideUp.initial}
            transition={{
              ease: 'easeInOut',
              duration: '0.5'
            }}
            exit={slideUp.exit}
            animate={slideUp.animate}
          >
            <ReactMarkdown>{homepage.text}</ReactMarkdown>
          </motion.div>
        </div>
      </div>
      <motion.div
        className={styles.carouselContainer}
        initial={slideUp.initial}
        transition={{
          ease: 'easeInOut',
          duration: '0.5',
          delay: 0.3
        }}
        exit={slideUp.exit}
        animate={slideUp.animate}
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
  let metaData = {}

  const projectsRes = await fetch(`${API_URL}/projects`)
  const homePageRes = await fetch(`${API_URL}/homepage`)
  const projects = await projectsRes.json()
  const homepage = await homePageRes.json()
  const metaRes = await fetch(`${API_URL}/metadata`)
  const meta = await metaRes.json()

  metaData = {
    metaTitle: meta.title,
    metaUrl: meta.url,
    metaDescription: meta.description,
    metaFavicon: meta.favicon.url,
    metaSocialCard: meta.social_media_card[0].formats.thumbnail.url
  }

  return {
    props: { projects, homepage, metaData }, // will be passed to the page component as props
    revalidate: 1
  }
}

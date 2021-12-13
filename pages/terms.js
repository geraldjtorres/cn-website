import styles from '../styles/Terms.module.scss'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { slideUp } from '../animations'
import { motion } from 'framer-motion'

export default function Terms({ termspage, metaData }) {
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
            <ReactMarkdown linkTarget='_blank'>{termspage.terms}</ReactMarkdown>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let metaData = {}
  const termspageRes = await fetch(`${API_URL}/termspage`)
  const termspage = await termspageRes.json()
  const metaRes = await fetch(`${API_URL}/metadata`)
  const meta = await metaRes.json()

  metaData = {
    metaTitle: meta.title,
    metaUrl: meta.url,
    metaDescription: meta.description,
    metaFavicon: meta.favicon.url,
    metaSocialCard: meta.social_media_card[0].formats.small.url
  }

  return {
    props: { termspage, metaData }, // will be passed to the page component as props
    revalidate: 1
  }
}

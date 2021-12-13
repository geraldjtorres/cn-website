import styles from '../styles/Info.module.scss'
import Layout from '@/components/Layout'
import { FiCornerDownRight } from 'react-icons/fi'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { slideUp } from '../animations'
import { motion } from 'framer-motion'

export default function InfoPage({ infopage, metaData }) {
  const [heroImage, setHeroImage] = useState({
    backgroundImage: `url(${infopage.profile_picture.formats.large.url})`
  })

  return (
    <Layout footerLink='work' metaData={metaData}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href='/'>
            <h1 className='cn-logo'>CN</h1>
          </Link>
          <motion.div
            className={styles.picture}
            initial={slideUp.initial}
            transition={{
              ease: 'easeInOut',
              duration: '0.5'
            }}
            exit={slideUp.exit}
            animate={slideUp.animate}
            style={heroImage}
            onMouseEnter={() => {
              setHeroImage({
                backgroundImage: `url(
                  ${infopage.studio_picture.formats.large.url}
                )`
              })
            }}
            onMouseLeave={() => {
              setHeroImage({
                backgroundImage: `url(
                  ${infopage.profile_picture.formats.large.url}
                )`
              })
            }}
          >
            <a target='_blank' href={infopage.more_link} className='more-link'>
              More
            </a>
          </motion.div>
          <motion.div
            className={styles.info}
            initial={slideUp.initial}
            transition={{
              ease: 'easeInOut',
              duration: '0.5',
              delay: 0.3
            }}
            exit={slideUp.exit}
            animate={slideUp.animate}
          >
            <ReactMarkdown linkTarget='_blank'>
              {infopage.description}
            </ReactMarkdown>

            <ul>
              {infopage.links.map(link => (
                <li key={link.id}>
                  <Link href={link.href}>
                    <a target='_blank'>
                      <FiCornerDownRight /> {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.builtBy}>
              <ReactMarkdown linkTarget='_blank'>
                {infopage.website_details}
              </ReactMarkdown>
            </div>
            <p>
              © 2021 <Link href='/terms'>Terms</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let metaData = {}
  const infopageRes = await fetch(`${API_URL}/infopage`)
  const infopage = await infopageRes.json()
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
    props: { infopage, metaData }, // will be passed to the page component as props
    revalidate: 1
  }
}

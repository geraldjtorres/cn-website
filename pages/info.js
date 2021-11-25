import styles from '../styles/Info.module.scss'
import Layout from '@/components/Layout'
import { FiCornerDownRight } from 'react-icons/fi'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { useState } from 'react'

export default function InfoPage({ infopage }) {
  // console.log('infopage', infopage)
  const [heroImage, setHeroImage] = useState({
    backgroundImage: `url(${infopage.profile_picture.formats.large.url})`
  })

  return (
    <Layout footerLink='work'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>CN</h1>
          <div
            className={styles.picture}
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
          />
          <div className={styles.info}>
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
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const infopageRes = await fetch(`${API_URL}/infopage`)
  const infopage = await infopageRes.json()

  return {
    props: { infopage } // will be passed to the page component as props
  }
}

import styles from '../styles/Home.module.scss'
import Layout from '@/components/Layout'
import Carousel from '@/components/Carousel'
import ReactMarkdown from 'react-markdown'
import { API_URL } from '@/config/index'

export default function Home({ projects, homepage }) {
  console.log(homepage)
  return (
    <Layout footerLink='info'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>CN</h1>
          <div className={styles.info}>
            <ReactMarkdown>{homepage.body[0].description}</ReactMarkdown>
          </div>
        </div>

        <Carousel projects={projects} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/projects`)
  const homePageRes = await fetch(`${API_URL}/homepage`)
  const projects = await res.json()
  const homepage = await homePageRes.json()

  return {
    props: { projects, homepage } // will be passed to the page component as props
  }
}

import styles from '../styles/Home.module.scss'
import Layout from '@/components/Layout'
import Carousel from '@/components/Carousel'
import ReactMarkdown from 'react-markdown'
import { API_URL } from '@/config/index'

export default function Home({ projects, homepage }) {
  console.log(projects)
  return (
    <Layout footerLink='info'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>CN</h1>
          <div className={styles.info}>
            <ReactMarkdown>{homepage.text}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel projects={projects} />
      </div>

      <div className={styles.mobileInfo}>
        <ReactMarkdown>{homepage.text}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projectsRes = await fetch(`${API_URL}/projects`)
  const homePageRes = await fetch(`${API_URL}/homepage`)
  const projects = await projectsRes.json()
  const homepage = await homePageRes.json()

  return {
    props: { projects, homepage } // will be passed to the page component as props
  }
}

import styles from '../styles/Terms.module.scss'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import ReactMarkdown from 'react-markdown'

export default function Terms({ termspage }) {
  console.log('terms', termspage)
  return (
    <Layout footerLink='info'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>CN</h1>
          <div className={styles.info}>
            <ReactMarkdown linkTarget='_blank'>{termspage.terms}</ReactMarkdown>
            {/* <div className={styles.transparent}></div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const termspageRes = await fetch(`${API_URL}/termspage`)
  const termspage = await termspageRes.json()

  return {
    props: { termspage } // will be passed to the page component as props
  }
}

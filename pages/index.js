import styles from '../styles/Home.module.scss'
import Layout from '@/components/Layout'
import Carousel from '@/components/Carousel'

export default function Home() {
  return (
    <Layout footerLink='info'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>CN</h1>
          <div className={styles.info}>
            <p>Co-founder + Design Director at Hundred Studio.</p>
            <p>
              Based in Belfast, Northern Ireland. I’ve worked across the globe,
              creating brand experiences that leave an impression. Focused on
              building business.
            </p>
          </div>
        </div>

        <Carousel />
      </div>
    </Layout>
  )
}

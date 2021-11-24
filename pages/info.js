import styles from '../styles/Info.module.scss'
import Layout from '@/components/Layout'
import {FiCornerDownRight} from "react-icons/fi"
import Link from 'next/link'


export default function InfoPage() {
  return (
    <Layout footerLink='work'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>CN</h1>
          <div className={styles.picture}></div>
          <div className={styles.info}>
          <p>
                I’ve delivered projects in Dubai, London, New York, Dublin and Belfast. 
              </p>
              <p>
                In 2020, I launched <Link href="https://www.hundredstudio.co.uk/" target="_blank">Hundred Studio</Link> with Gregg after many discussions about how to do something creative outside of our day job.
              </p>
              <p>
                Changing that day job turned out to be the answer.
              </p>
              <p>
                I’m in the business of finding solutions. I ask questions, and then I ask some more questions. Helping businesses head in the right direction. I’ve worked with Bvlgari, Ulster University, HSBC, Danske Bank, First Abu Dhabi Bank.
              </p>
              <ul>
                <li>Email me</li>
                <li>Follow me on Instagram</li>
                <li>Connect on LinkedIn</li>
              </ul>
              <ul className={styles.builtBy}>
                <li><FiCornerDownRight/> Built by <Link href="https://www.linkedin.com/in/gerald-jeff-torres-92a24a94/" target="_blank">Jeff Torres</Link></li>
                <li><FiCornerDownRight/> Portrait by <Link href="https://www.linkedin.com/in/kalie-reid-bb127715b/" target="_blank">Kalie Reid</Link></li>
                <li><FiCornerDownRight/> Typeset in Franklin Gothic Regular</li>
              </ul>
              <p>© 2021 <Link href="/terms">Terms</Link></p>
          </div>
        </div>      
      </div>
  </Layout>
  )
}

import Head from 'next/head'
import styles from '@/styles/Layout.module.scss'
import Footer from '@/components/Footer'

export default function Layout({
  title,
  keywords,
  description,
  children,
  footerLink
}) {
  return (
    <div style={{ backgroundColor: '#E9E7E2', color: 'red' }}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      {children}

      <Footer footerLink={footerLink} />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Craig Norwood',
  description: 'Co-founder + Design Director at Hundred Studio',
  keywords: 'Hundred Studio, Design'
}

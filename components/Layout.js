import Head from 'next/head'
import Footer from '@/components/Footer'

export default function Layout({
  title,
  keywords,
  description,
  children,
  footerLink,
  currentTheme,
  colorScheme
}) {
  // console.log('props', props)

  return (
    <div>
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

import Head from 'next/head'
import Footer from '@/components/Footer'
export default function Layout({
  title,
  keywords,
  description,
  children,
  footerLink,
  currentTheme,
  colorScheme,
  metaData
}) {
  return (
    <div>
      <Head>
        <link rel='icon' href={metaData.metaFavicon} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <meta property='og:title' content={metaData.metaTitle} />
        <meta property='og:url' content={metaData.metaUrl} />
        <meta property='og:description' content={metaData.metaDescription} />
        <meta property='og:image' content={metaData.metaSocialCard} />
        <title>{title}</title>
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

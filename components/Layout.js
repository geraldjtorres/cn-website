import Head from 'next/head'
import Footer from '@/components/Footer'
import { useState } from 'react'
export default function Layout({
  title,
  keywords,
  description,
  children,
  footerLink,
  metaData
}) {
  // const [metaImage, setMetaImage] = useState(metaData.metaSocialCard)

  return (
    <div>
      <Head>
        {/* <meta property='og:description' content={metaData.metaDescription} />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/gjtorres-dev/image/upload/v1639313961/cn-website/thumbnail_cn_website_social_card_d41e141ecf.jpg'
        />
        <meta property='og:title' content={metaData.metaTitle} />
        <meta property='og:url' content={metaData.metaUrl} />
        <link rel='icon' href={metaData.metaFavicon} /> */}
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

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

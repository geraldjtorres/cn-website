import Head from 'next/head'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

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

  const [metaTitle, setMetaTitle] = useState('')
  const [metaUrl, setMetaUrl] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [metaFavicon, setMetaFavicon] = useState('')
  const [metaSocialCard, setMetaSocialCard] = useState('')

  useEffect(() => {
    getMetaData()
  }, [])

  const getMetaData = async () => {
    const res = await fetch('https://cn-website-backend.herokuapp.com/metadata')

    const data = await res.json()
    setMetaTitle(data.title)
    setMetaUrl(data.url)
    setMetaDescription(data.description)
    setMetaFavicon(data.favicon.url)
    setMetaSocialCard(data.social_media_card[0].formats.small.url)

    console.log(data.social_media_card[0].formats.small.url)

    // setMetadata({...values, [name]: value }})
    // setValues({ ...values, [name]: value })
  }

  return (
    <div>
      <Head>
        <link rel='icon' href={metaFavicon} />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <meta property='og:title' content={metaTitle} />
        <meta property='og:url' content={metaUrl} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={metaSocialCard} />
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

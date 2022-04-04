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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <script defer data-domain="craignorwood.co" src="https://plausible.io/js/plausible.js"></script>

        {/* <meta name='description' content={description} />
        <meta name='keywords' content={keywords} /> */}
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

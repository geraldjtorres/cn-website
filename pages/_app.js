import '../styles/globals.scss'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, useTheme } from 'next-themes'
import { API_URL } from '@/config/index'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
// import SEO from '../next-seo.config';

import Router from 'next/router'

// Fix for scss modules bug when using Framer motion transitions
const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]')
    allStyleElems.forEach(elem => {
      elem.removeAttribute('media')
    })
  }
  tempFix()
}

Router.events.on('routeChangeComplete', routeChange)
Router.events.on('routeChangeStart', routeChange)

function MyApp({
  router,
  Component,
  pageProps,
  pageProps: {
    colorScheme: { themes },
    metaData
  }
}) {
  const [mounted, setMounted] = useState(false)
  const [randomTheme, setRandomTheme] = useState(
    themes[Math.floor(Math.random() * themes.length)]
  )
  const { theme } = useTheme()

  const cssStyles = themes.map((theme, index) => {
    return `[data-theme="theme${index + 1}"]{background-color: ${
      theme.background_color
    };color: ${theme.text_color};}
    
    ${theme.text_color};}[data-theme="theme${index + 1}"] a:hover {
      background-image: repeating-linear-gradient(
        -17deg,
        ${theme.text_color},
        ${theme.text_color} 5px,
        transparent 5px,
        transparent 11px,
        ${theme.text_color} 11px
      ),
      repeating-linear-gradient(
        73deg,
        ${theme.text_color},
        ${theme.text_color} 5px,
        transparent 5px,
        transparent 11px,
        ${theme.text_color} 11px
      ),
      repeating-linear-gradient(
        163deg,
        ${theme.text_color},
        ${theme.text_color} 5px,
        transparent 5px,
        transparent 11px,
        ${theme.text_color} 11px
      ),
      repeating-linear-gradient(
        253deg,
        ${theme.text_color},
        ${theme.text_color} 5px,
        transparent 5px,
        transparent 11px,
        ${theme.text_color} 11px
      );
    }
    
    [data-theme="theme${index + 1}"] footer {background: ${
      theme.background_color
    };   background: -webkit-linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      ${theme.background_color} 40%
    );
      background: linear-gradient(270deg, $rgba(255, 255, 255, 0) 0%, ${
        theme.background_color
      } 40%);}[data-theme="theme${index + 1}"] .more-link {background-color: ${
      theme.text_color
    }; color: ${theme.background_color}} 
    
    @media (max-width: 768px) {
      [data-theme="theme${index + 1}"] footer {
        background: none ${theme.background_color} !important
      }
    }`
  })

  // Your themeing variables
  const GlobalStyle = createGlobalStyle`

  :root{background-color: ${randomTheme.background_color};color: ${
    randomTheme.text_color
  };}
  
  :root footer {background: linear-gradient(180deg, rgba(233, 231, 226, 0) 0%, ${
    randomTheme.background_color
  } 40%);}

  @media (max-width: 768px) {
    :root footer {
      background: none ${randomTheme.background_color} !important
    }
  }
  
  :root .more-link {background-color: ${randomTheme.background_color}}
  ${cssStyles.join('')}

  `

  // When mounted on client, now we can show the UI
  useEffect(() => {
    // setMounted(true)
    // Add themes to local storage
    localStorage.setItem('themes', JSON.stringify(themes))
    router.push(router.pathname)
  }, [])

  // if (!mounted) return null

  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route}>
          <DefaultSeo
            title={metaData.metaTitle}
            description={metaData.metaDescription}
            additionalLinkTags={[
              {
                rel: 'icon',
                href: metaData.metaFavicon
              }
            ]}
            openGraph={{
              type: 'website',
              url: metaData.metaUrl,
              title: metaData.metaTitle,
              description: metaData.metaDescription,
              images: [
                {
                  url: metaData.metaSocialCard,
                  width: 800,
                  height: 600,
                  alt: 'Craig Norwood'
                }
              ]
            }}
          />
          <ThemeProvider defaultTheme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async () => {
  const colorsRes = await fetch(`${API_URL}/colorscheme`)
  const colorScheme = await colorsRes.json()

  const metaRes = await fetch(`${API_URL}/metadata`)
  const meta = await metaRes.json()

  const metaData = {
    metaTitle: meta.title,
    metaUrl: meta.url,
    metaDescription: meta.description,
    metaFavicon: meta.favicon.url,
    metaSocialCard: meta.social_media_card[0].formats.small.url
  }

  return {
    pageProps: { colorScheme, metaData } // will be passed to the page component as props
  }
}

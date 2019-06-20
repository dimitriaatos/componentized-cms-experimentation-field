import React from 'react'
import { Helmet } from 'react-helmet'
import useTheme from '@material-ui/styles/useTheme'

const Metadata = props => {
  const theme = useTheme()
  return (
    <Helmet>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes"/>

      <title>Dimitri Aatos Ellinas</title>
      <meta name="description" content="Personal Webpage"/>

      <link rel="icon" href="images/favicon.ico"/>

      {/* <link rel="manifest" href="manifest.json"/> */}

      <meta name="theme-color" content={theme.palette.primary.main} />

      {/* Add to homescreen for Chrome on Android. Fallback for manifest.json */}
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="application-name" content="Dimitri Aatos Ellinas"/>

      {/* Add to homescreen for Safari on iOS */}
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="apple-mobile-web-app-title" content="Dimitri Aatos Ellinas"/>

      {/* Homescreen icons */}
      <link rel="apple-touch-icon" href="images/manifest/icon-48x48.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="images/manifest/icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="96x96" href="images/manifest/icon-96x96.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="images/manifest/icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="192x192" href="images/manifest/icon-192x192.png"/>

      {/* Tile icon for Windows 8 (144x144 + tile color) */}
      <meta name="msapplication-TileImage" content="images/manifest/icon-144x144.png"/>
      <meta name="msapplication-TileColor" content={theme.palette.primary.main}/>
      <meta name="msapplication-tap-highlight" content="no"/>
    </Helmet>
  )
}

export default Metadata
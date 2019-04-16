import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@material-ui/styles';

const Head = () => {
  const theme = useTheme();
  const isDark = theme.palette.type === 'dark';
  return (
    <Helmet defaultTitle="Yelli" titleTemplate="Yelli - %s">
      <meta charSet="utf-8" />
      <link href="manifest.json" rel="manifest" />
      <meta
        content="width=device-width, initial-scale=1, user-scalable=no"
        name="viewport"
      />
      <meta content="Yelli" property="og:title" />
      <meta
        content="A directory for progressive web apps"
        property="og:description"
      />
      <meta
        content="%PUBLIC_URL%/icons/android-chrome-512x512"
        property="og:image"
      />
      <meta content="image/png" property="og:image:type" />
      <meta content="512" property="og:image:width" />
      <meta content="512" property="og:image:height" />
      <meta
        content="Yelli - A directory for progressive web apps"
        property="og:image:alt"
      />
      <meta content="https://yelli.com" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="A directory for progressive web apps" name="Description" />
      <meta content={isDark ? '#161a2a' : '#ffffff'} name="theme-color" />
      <meta content="yes" name="mobile-web-app-capable" />
      <meta content="Yelli" name="apple-mobile-web-app-title" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta content="default" name="apple-mobile-web-app-status-bar-style" />
      <meta content="Yelli" name="application-name" />
      <meta
        content={isDark ? '#161a2a' : '#ffffff'}
        name="msapplication-TileColor"
      />
      <meta content="icons/mstile-144x144.png" name="msapplication-TileImage" />
      <meta content="icons/browserconfig.xml" name="msapplication-config" />
      <link
        href="icons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="icons/apple-launch-1125x2436.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 4)"
        rel="apple-touch-startup-image"
      />
      <link
        href="icons/apple-launch-750x1334.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="icons/apple-launch-1242x2208.png"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="icons/apple-launch-640x1136.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="icons/apple-launch-1536x2048.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="icons/apple-launch-1668x2224.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="icons/apple-launch-2048x1536.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        color={theme.palette.primary.main}
        href="icons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="icons/favicon.ico" rel="shortcut icon" />
      <link
        href="icons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="icons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="fonts/proxima-nova-semibold.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="fonts/proxima-nova-regular.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="fonts/proxima-nova-medium.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="style"
        crossOrigin="anonymous"
        href="fonts/proxima-nova.min.css"
        rel="preload"
      />
      <link href="fonts/proxima-nova.min.css" rel="stylesheet" />
      <link href="https://api.yelli.com" rel="preconnect" />
    </Helmet>
  );
};

export default Head;

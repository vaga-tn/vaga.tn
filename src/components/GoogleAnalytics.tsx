import Script from 'next/script'

const GA_TRACKING_ID: string | undefined = process.env.NEXT_PUBLIC_GA_ID

const GoogleAnalytics: React.FC = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0VT8S62R8K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
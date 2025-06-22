import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Explore premium fashion products on Mettā Muse" />
        <meta property="og:title" content="Discover Our Products - Mettā Muse" />
        <meta property="og:description" content="Curated collection of artisan fashion." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mettā Muse" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Mettā Muse",
              "description": "Premium fashion collection",
              "url": "https://mettamuse.com",
              "logo": "/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-221-123-5380",
                "contactType": "customer service",
                "email": "customercare@mettamuse.com"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

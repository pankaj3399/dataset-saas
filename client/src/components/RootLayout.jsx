import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout({ title, children }) {
  const canonicalURL = window.location.href;
  
  const resolvedImageWithDomain = new URL(
    "/opengraph.jpg",
    window.location.origin
  ).toString();

  const makeTitle = title
    ? title + " ⏤ " + "Riverlytics"
    : "Riverlytics - Smarter Datasets for Better Decisions";

  return (
    <div className="h-full">
      <Helmet>
        <html lang="en" className="h-full" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{makeTitle}</title>
        <meta name="description" content="Riverlytics is a premium website template for businesses, startup and SaaS." />
        <meta name="canonical" content={canonicalURL} />
        
        {/* Twitter Tags */}
        <meta name="twitter:creator" content="@surjithctly" />
        <meta name="twitter:site" content="@web3templates" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* OpenGraph Tags */}
        <meta property="og:url" content={canonicalURL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Riverlytics - Business, SaaS & Startup Template" />
        <meta property="og:image" content={resolvedImageWithDomain} />
        <meta property="og:image:alt" content="Riverlytics Homepage Screenshot" />
      </Helmet>
      <body className="font-sans antialiased min-h-full flex flex-col">
        {children}
      </body>
    </div>
  );
}
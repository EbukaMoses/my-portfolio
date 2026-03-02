import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ebuka Moses Okoye",
    "jobTitle": "Full-Stack Developer & Blockchain Engineer",
    "description": "Full-Stack Developer, Blockchain Engineer, WordPress Specialist, Graphic Designer specializing in React, Next.js, TypeScript, Rust, Cairo and Web3 development.",
    "url": "https://ebukamoses.netlify.app/",
    "sameAs": [
      "https://github.com/EbukaMoses",
      "https://linkedin.com/in/ebuka-moses-okoye",
      "https://twitter.com/ebukamoses"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Solidity",
      "Rust",
      "Cairo",
      "WordPress",
      "Web3 Development",
      "Blockchain Engineering",
      "Graphic Design"
    ],
    "offers": {
      "@type": "Service",
      "serviceType": "Web Development & Blockchain Engineering",
      "areasServed": "Worldwide"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

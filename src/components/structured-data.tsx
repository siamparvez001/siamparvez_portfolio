export function StructuredData() {
  const siteUrl = "https://sohantalukder.github.io";
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md. Siam Parvez",
    "alternateName": ["Siam Parvez", "Siam", "Md. Siam Parvez", "Md. Siam Parvez", "Siam Parvez", "Parvez", "siamparvez"],
    "url": siteUrl,
    // "image": `${siteUrl}/thumbnail.png`,
    // "jobTitle": "React Native & Flutter Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    },
    "description":
      "Md. Siam Parvez (Siam Parvez) is a web developer in Dhaka, Bangladesh.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "nationality": "Bangladeshi",
    "knowsAbout": [
      "React",
      "Web Development",
      
      "JavaScript",
      
      "Next.js",
      "Node.js",
      
      "Frontend Development",
      "Backend Development",
      
    ],
    "sameAs": [
      "https://github.com/siamparvez001",
      "https://www.linkedin.com/in/siam-parvez/",
      "https://x.com/siamparvez01"
      
    ],
    "email": "siamparvez@gmail.com"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Siam Parvez Portfolio",
    "alternateName": "Siam Portfolio",
    "url": siteUrl,
    "description":
      "Official portfolio of Md. Siam Parvez React Native developer, Web Developer Bangladesh.",
    "author": {
      "@type": "Person",
      "name": "Md. Siam Parvez"
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Person", 
      "name": "Md. Siam Parvez"
    },
    "copyrightYear": "2026",
    "genre": "Portfolio",
    "keywords":
      "Md. Siam Parvez, Siam Parvez, React Developer Bangladesh, Web Developer Bangladesh"
  };

  const professionalService = {
    
    "@type": "ProfessionalService",
    "name": "Siam Parvez —Web Development",
    "description":
      "React and full-stack web development for clients in Bangladesh and worldwide.",
    "provider": {
      "@type": "Person",
      "name": "Md. Siam Parvez"
    },
    "areaServed": [
      { "@type": "Country", "name": "Bangladesh" },
      { "@type": "Place", "name": "Worldwide" }
    ],
    "serviceType": [
     
      "Web Development",
      "Frontend Development",
      "Backend Development",
      
      "React Development"
    ],
    "url": siteUrl
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
    </>
  );
} 
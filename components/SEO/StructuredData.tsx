import React from 'react';

export function StructuredData() {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://vyorai.com",
        "name": "VyorAI",
        "description": "State-of-the-art AI Virtual Try-On systems for fashion and high-performance intelligent automation tools for developers.",
        "publisher": {
            "@type": "Organization",
            "name": "VyorAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://vyorai.com/LOGO.png"
            }
        }
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "VyorAI",
        "url": "https://vyorai.com",
        "logo": "https://vyorai.com/LOGO.png",
        "sameAs": [
            "https://www.linkedin.com/company/vyorai",
            // Add other social links here
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
        </>
    );
}

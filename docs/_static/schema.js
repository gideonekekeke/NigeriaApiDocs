const schema = {
  "@context": "https://schema.org",
  "@type": "WebAPI",
  "name": "Nigeria States and Regions API",
  "description": "Official API documentation for Nigeria states and regions, providing comprehensive data about all 36 states, FCT, and geopolitical zones",
  "url": "https://nigeriaapidocs.readthedocs.io",
  "documentation": "https://nigeriaapidocs.readthedocs.io"
}

const script = document.createElement('script');
script.type = "application/ld+json";
script.text = JSON.stringify(schema);
document.head.appendChild(script);
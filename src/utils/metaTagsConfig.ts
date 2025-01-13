interface MetaTagsConfig {
  [key: string]: {
    title: string;
    description: string;
    keywords?: string;
    author?: string;
  };
}

const metaTagsConfig: MetaTagsConfig = {
  default: {
    title: "Vixensoft Services - Top Hosting & Digital Solutions",
    description:
      "Vixensoft Services offers premium hosting, web development, CMS, ORM integration, software development, and security management. Our expert team delivers innovative digital solutions to elevate your business.",
    keywords:
      "Vixensoft Services, hosting provider, website development, CMS development, ORM integration, software development, security management, digital solutions, web hosting, software tools",
    author: "Vixensoft Services",
  },
  home: {
    title: "Home - Vixensoft Services",
    description:
      "Welcome to Vixensoft Services, your one-stop destination for hosting, web development, and software solutions.",
    keywords:
      "Vixensoft Services, Home, hosting solutions, software development, digital services",
    author: "Vixensoft Services",
  },
  hosting: {
    title: "Hosting Services - Vixensoft Services",
    description:
      "Reliable and secure hosting services tailored to your business needs. Vixensoft Services offers scalable solutions for websites and applications.",
    keywords:
      "Vixensoft Services, hosting, secure hosting, web hosting, scalable hosting",
    author: "Vixensoft Services",
  },
  development: {
    title: "Web Development - Vixensoft Services",
    description:
      "Custom web development services to bring your ideas to life. Vixensoft Services ensures responsive and modern designs for your business.",
    keywords:
      "Vixensoft Services, web development, custom websites, responsive design",
    author: "Vixensoft Services",
  },
  cms: {
    title: "CMS Development - Vixensoft Services",
    description:
      "Streamline your content management with CMS solutions from Vixensoft Services. Enhance efficiency and user experience effortlessly.",
    keywords:
      "Vixensoft Services, CMS, content management, CMS solutions, efficient CMS",
    author: "Vixensoft Services",
  },
  security: {
    title: "Security Management - Vixensoft Services",
    description:
      "Protect your digital assets with advanced security management services from Vixensoft Services. Stay safe and secure.",
    keywords:
      "Vixensoft Services, security management, digital security, cybersecurity, data protection",
    author: "Vixensoft Services",
  },
  contact: {
    title: "Contact Us - Vixensoft Services",
    description:
      "Get in touch with Vixensoft Services for expert advice and top-notch solutions for your digital needs.",
    keywords:
      "Vixensoft Services, contact, digital solutions, customer support, get in touch",
    author: "Vixensoft Services",
  },
  about: {
    title: "About Us - Vixensoft Services",
    description:
      "Learn more about Vixensoft Services, our mission, vision, and commitment to delivering exceptional digital solutions.",
    keywords:
      "Vixensoft Services, about us, digital solutions, mission, vision, company info",
    author: "Vixensoft Services",
  },
  // Add more configurations as needed for specific pages
};

export default metaTagsConfig;
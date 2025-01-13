import Link from "next/link";
import Image from "next/image";
const FOOTER_DATA = {
  brand: {
    logo: "/logo.png",
    description:
      "VixenSoftServices is a leading provider of innovative software solutions, specializing in AI, blockchain, and no-code tools to empower businesses to build their next-generation platforms.",
    copyright: "© Copyright 2024 VixenSoftServices. All rights reserved",
  },

  about: {
    title: "About",
    links: [
      {
        label: "Guide",
        href: "#",
      },
      {
        label: "Terms of Service",
        href: "#",
      },
      {
        label: "Creator Terms and Conditions",
        href: "#",
      },
      {
        label: "Privacy Policy",
        href: "#",
      },
      {
        label: "Community Guidelines",
        href: "#",
      },
    ],
  },

  platform: {
    title: "Platform",
    links: [
      {
        label: "#",
        href: "/",
      },
      {
        label: "#",
        href: "/",
      },
      {
        label: "#",
        href: "/",
      },
    ],
  },

  social: [
    {
      icon: "/discord.png",
      href: "#",
      alt: "Discord",
    },
    {
      icon: "/telegram.png",
      href: "#",
      alt: "Telegram",
    },
    {
      icon: "/x.png",
      href: "#",
      alt: "Twitter",
    },
    {
      icon: "/instagram.png",
      href: "#",
      alt: "Instagram",
    },
  ],
};

interface LinkSectionProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const LinkSection = ({ title, links }: LinkSectionProps) => (
  <div className="text-white">
    <h3 className="text-2xl font-semibold">{title}</h3>
    <div className="flex flex-col gap-3 mt-7">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="text-sm hover:opacity-80"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const { brand, about, platform, social } = FOOTER_DATA;

  return (
    <footer className="bg-gradient-to-r from-[#30D8FF] via-[#A32CC4] to-[#C243FE] px-4 py-5 md:px-10 md:py-8 lg:px-15 lg:py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-5">
        {/* Brand Section */}
        <div className="w-full md:w-auto">
          <Link href="/">
            <div className="flex justify-start items-center space-x-4">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="vixen-logo"
              />
              <Image
                src="/textlogo.png"
                width={200}
                height={40}
                alt="vixen-logo"
              />
            </div>
          </Link>
          <p className="text-white text-sm max-w-[350px]">
            {brand.description}
          </p>
          <p className="text-white text-sm mt-8">{brand.copyright}</p>
        </div>

        {/* Desktop/Tablet Links */}
        <div className="hidden md:flex gap-10 lg:gap-20">
          <LinkSection title={about.title} links={about.links} />
          <LinkSection title={platform.title} links={platform.links} />
        </div>

        {/* Social Links */}
        <div className="flex gap-5 md:self-start">
          {social.map((item, index) => (
            <div
              key={index}
              className="rounded-full border-2 border-[#0E46A3] p-3 md:p-4 bg-[#15063C]"
            >
              <Link href={item.href} target="_blank">
                <img
                  src={item.icon}
                  className="w-4 md:w-5 h-4 md:h-5"
                  alt={item.alt}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Links */}
        <div className="flex gap-10 md:hidden">
          <LinkSection title={about.title} links={about.links} />
          <LinkSection title={platform.title} links={platform.links} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

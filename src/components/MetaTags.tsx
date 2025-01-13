import Head from "next/head";
import { usePathname } from "next/navigation";
import metaTagsConfig from "@/utils/metaTagsConfig";

const MetaTags = () => {
  const pathname = usePathname();

  const path = pathname.split("/")[1];

  const metaTags = metaTagsConfig[path] || metaTagsConfig["default"];

  return (
    <Head>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      {metaTags.keywords && (
        <meta name="keywords" content={metaTags.keywords} />
      )}
      {metaTags.author && <meta name="author" content={metaTags.author} />}
      {/* Add other meta tags as needed */}
    </Head>
  );
};

export default MetaTags;

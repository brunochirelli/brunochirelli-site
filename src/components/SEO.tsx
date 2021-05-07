import * as React from "react";
import { Helmet } from "react-helmet";

export type SEOProps = {
  title?: string;
  description?: string;
  lang?: string;
  meta?: any;
};

const SEO = ({ description, lang, meta, title }: SEOProps) => {
  const metaDescription = description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        ...meta,
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          // content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
};

export default SEO;

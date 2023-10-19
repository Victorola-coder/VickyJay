/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';
import { META_DESCRIPTION, META_TITLE } from '../constants/config';

export default function SEO({
  title,
  description = META_DESCRIPTION,
  children,
}) {
  const siteTitle = title ? title + ' || ' + META_TITLE : title;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {children}
    </Helmet>
  );
}

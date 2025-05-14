
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title = 'FARAN | Premium Luxury Oud & Fragrances',
  description = 'Discover FARAN - Luxury Arabian oud and fragrances crafted with centuries of tradition. Premium agarwood collections including Salla, Baby Salla, Mouri, and Joura.',
  keywords = 'FARAN, luxury oud, Arabian perfumes, premium fragrances, agarwood, Indian agarwood, Salla, Baby Salla, Mouri, Joura',
  ogImage = '/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png',
  ogType = 'website',
  ogUrl = 'https://faran.ae/',
  twitterCard = 'summary_large_image',
  children
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional custom metadata */}
      {children}
    </Helmet>
  );
};

export default SEO;

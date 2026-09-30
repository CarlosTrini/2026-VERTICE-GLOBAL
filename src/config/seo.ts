/**
 * Configuración global de SEO para el proyecto Astro.
 * Todo es configurable y extensible para cualquier página o sección.
 */

export interface SiteConfig {
  name: string;
  title: string;
  titleTemplate: string;
  description: string;
  url: string;
  author: string;
  locale: string;
  themeColor: string;
  defaultOgImage: string;
  twitter: {
    handle: string;
    site: string;
    cardType: 'summary' | 'summary_large_image' | 'app' | 'player';
  };
  organization: {
    name: string;
    logo: string;
    url: string;
    sameAs: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: 'El Vértice Global',
  title: 'El Vértice Global - Noticias, Tendencias y Análisis en Tiempo Real',
  titleTemplate: '%s | El Vértice Global',
  description: 'Portal de noticias digitales, tecnología, cultura, ciencia y actualidad con análisis riguroso y cobertura en tiempo real.',
  url: 'https://www.elverticeglobal.com',
  author: 'Redacción El Vértice Global',
  locale: 'es_ES',
  themeColor: '#030712',
  defaultOgImage: '/og-image.png',
  twitter: {
    handle: '@astrodotbuild',
    site: '@astrodotbuild',
    cardType: 'summary_large_image',
  },
  organization: {
    name: 'Astro Basic Template Org',
    logo: 'https://ejemplo-astro.com/favicon.svg',
    url: 'https://ejemplo-astro.com',
    sameAs: [
      'https://github.com/withastro/astro',
      'https://twitter.com/astrodotbuild',
    ],
  },
};

/**
 * Interfaz de propiedades SEO para componentes y layouts.
 */
export interface SEOProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
  canonical?: string | URL;
  image?: string;
  imageAlt?: string;
  ogType?: 'website' | 'article' | 'profile' | 'book';
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  keywords?: string[];
  locale?: string;
  themeColor?: string;
  publishDate?: Date | string;
  modifiedDate?: Date | string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
    section?: string;
  };
  schema?: Record<string, any> | Record<string, any>[];
}

/**
 * Generador de Schemas de datos estructurados JSON-LD (Schema.org)
 */
export function generateDefaultSchemas(pageUrl: string, seoProps: SEOProps) {
  const schemas: Record<string, any>[] = [];

  // Schema de WebSite
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: seoProps.description || siteConfig.description,
    inLanguage: seoProps.locale || siteConfig.locale,
  });

  // Schema de Organización
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.organization.name,
    url: siteConfig.organization.url,
    logo: siteConfig.organization.logo,
    sameAs: siteConfig.organization.sameAs,
  });

  // Schema de Artículo si aplica
  if (seoProps.ogType === 'article' && seoProps.article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: seoProps.title || siteConfig.title,
      description: seoProps.description || siteConfig.description,
      image: seoProps.image ? new URL(seoProps.image, siteConfig.url).toString() : new URL(siteConfig.defaultOgImage, siteConfig.url).toString(),
      datePublished: seoProps.article.publishedTime,
      dateModified: seoProps.article.modifiedTime || seoProps.article.publishedTime,
      author: {
        '@type': 'Person',
        name: seoProps.article.author || seoProps.author || siteConfig.author,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.organization.name,
        logo: {
          '@type': 'ImageObject',
          url: siteConfig.organization.logo,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
    });
  }

  // Si se pasaron schemas personalizados adicionales
  if (seoProps.schema) {
    if (Array.isArray(seoProps.schema)) {
      schemas.push(...seoProps.schema);
    } else {
      schemas.push(seoProps.schema);
    }
  }

  return schemas;
}

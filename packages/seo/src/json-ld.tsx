import type { FC } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * JSON-LD構造化データを出力するコンポーネント
 */
export const JsonLd: FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/**
 * 組織情報のJSON-LD
 */
export interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
}

export const OrganizationJsonLd: FC<{ data: OrganizationData }> = ({
  data,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    address: data.address
      ? {
          "@type": "PostalAddress",
          ...data.address,
        }
      : undefined,
    telephone: data.telephone,
    email: data.email,
  };

  return <JsonLd data={jsonLd} />;
};

/**
 * ローカルビジネスのJSON-LD（ツアー会社向け）
 */
export interface LocalBusinessData extends OrganizationData {
  priceRange?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  image?: string[];
}

export const LocalBusinessJsonLd: FC<{ data: LocalBusinessData }> = ({
  data,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    image: data.image,
    address: data.address
      ? {
          "@type": "PostalAddress",
          ...data.address,
        }
      : undefined,
    geo: data.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: data.geo.latitude,
          longitude: data.geo.longitude,
        }
      : undefined,
    telephone: data.telephone,
    priceRange: data.priceRange,
    openingHoursSpecification: data.openingHours?.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours,
    })),
  };

  return <JsonLd data={jsonLd} />;
};

/**
 * 商品（ツアープラン）のJSON-LD
 */
export interface ProductData {
  name: string;
  description: string;
  image: string;
  url: string;
  price: number;
  priceCurrency?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  seller: {
    name: string;
    url: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export const ProductJsonLd: FC<{ data: ProductData }> = ({ data }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    offers: {
      "@type": "Offer",
      price: data.price,
      priceCurrency: data.priceCurrency || "JPY",
      availability: `https://schema.org/${data.availability || "InStock"}`,
      seller: {
        "@type": "Organization",
        name: data.seller.name,
        url: data.seller.url,
      },
    },
    aggregateRating: data.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: data.aggregateRating.ratingValue,
          reviewCount: data.aggregateRating.reviewCount,
        }
      : undefined,
  };

  return <JsonLd data={jsonLd} />;
};

/**
 * パンくずリストのJSON-LD
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbJsonLd: FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={jsonLd} />;
};

/**
 * FAQのJSON-LD
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FaqJsonLd: FC<{ items: FaqItem[] }> = ({ items }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={jsonLd} />;
};

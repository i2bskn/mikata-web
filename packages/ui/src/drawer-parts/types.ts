export interface MenuLink {
  label: string;
  href: string;
  iconUrl?: string;
}

export interface MenuSection {
  title: string;
  iconUrl?: string;
  items: MenuLink[];
}

export interface MenuFeaturedBanner {
  href: string;
  iconUrl: string;
  subtitle?: string;
  subtitle2?: string;
  title: string;
}

export interface MenuInfoLinksSection {
  title: string;
  iconUrl?: string;
  items: MenuLink[];
}

export interface MenuMainBanner {
  href: string;
  imageUrl: string;
  alt: string;
}

export interface MenuStatusBanner {
  badge?: string;
  hours?: string;
  message: string;
  iconUrl?: string;
}

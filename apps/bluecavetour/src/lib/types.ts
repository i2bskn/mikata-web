/**
 * プラン情報の型定義
 */
export interface Plan {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrls?: string[];
  price: number;
  originalPrice?: number;
  childPrice?: number;
  infantPrice?: number;
  duration: string;
  tags: string[];
  rating?: number;
  reviewCount?: number;
  category: PlanCategory;
  features: string[];
  includes: string[];
  schedule: ScheduleItem[];
  meetingPoint?: string;
  notes?: string[];
}

export type PlanCategory =
  | "bluecave"
  | "kayak"
  | "setplan"
  | "marine-sports"
  | "charter"
  | "glassboat"
  | "hama-island";

export interface ScheduleItem {
  time: string;
  activity: string;
}

/**
 * セットプラン情報
 */
export interface SetPlan {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  plans: Plan[];
}

/**
 * コラム情報
 */
export interface Column {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  publishedAt: string;
}

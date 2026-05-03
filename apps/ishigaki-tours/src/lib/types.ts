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
  | "snorkeling"
  | "setplan"
  | "hama-island"
  | "seaturtles"
  | "diving"
  | "kayak"
  | "sup";

export interface ScheduleItem {
  time: string;
  activity: string;
}

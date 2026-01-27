import type { Plan } from "../types";
import { plans } from "./plans";

export interface SetPlanInfo {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  imageUrl: string;
  relatedPlanSlugs: string[];
}

/**
 * セットプラン情報
 */
export const setPlans: SetPlanInfo[] = [
  {
    slug: "bluecave-sup-kayak",
    title: "石垣島青の洞窟×SUP・カヤック",
    description:
      "【2026年最新版】石垣島の青の洞窟とSUP・カヤックをまとめて紹介！神秘的な洞窟探検と海上アクティビティを比較・予約できます。初心者にもおすすめの人気ツアー情報を今すぐチェック！",
    metaDescription:
      "【2026年最新版】石垣島の青の洞窟とSUP・カヤックをまとめて紹介！神秘的な洞窟探検と海上アクティビティを比較・予約できます。初心者にもおすすめの人気ツアー情報を今すぐチェック！",
    imageUrl: "/images/setplan/bluecave-sup-kayak.jpg",
    relatedPlanSlugs: ["bluecave305", "kayak306", "setplan349"],
  },
  {
    slug: "bluecave-mangrove",
    title: "青の洞窟×マングローブツアー",
    description:
      "石垣島の神秘的な自然を満喫できる青の洞窟＆マングローブツアーをご紹介します。幻想的な青の光に包まれる青の洞窟でシュノーケリングを楽しむ感動を体験できます。また、カヤックやSUPでマングローブの森をゆったりと巡り、石垣島ならではの大自然を満喫できます。",
    metaDescription:
      "石垣島の神秘的な自然を満喫できる青の洞窟＆マングローブツアーをご紹介します。幻想的な青の光に包まれる青の洞窟でシュノーケリングを楽しむ感動を体験できます。",
    imageUrl: "/images/setplan/bluecave-mangrove.jpg",
    relatedPlanSlugs: ["setplan362", "bluecave304"],
  },
  {
    slug: "bluecave-kabirabay",
    title: "青の洞窟×川平湾ツアー",
    description:
      "石垣島の絶景を満喫できる青の洞窟＆川平湾ツアーをご紹介します！幻想的な青の光に包まれる青の洞窟でシュノーケリングを楽しみ、神秘的な海の世界を体験できます。さらに、絶景・川平湾ではSUPやクリアカヤックで、透き通る海をクルージング。",
    metaDescription:
      "石垣島の絶景を満喫できる青の洞窟＆川平湾ツアーをご紹介します！幻想的な青の光に包まれる青の洞窟でシュノーケリングを楽しみ、神秘的な海の世界を体験できます。",
    imageUrl: "/images/setplan/bluecave-kabirabay.jpg",
    relatedPlanSlugs: ["setplan349", "glassboat392"],
  },
];

/**
 * スラッグからセットプラン情報を取得
 */
export function getSetPlanBySlug(slug: string): SetPlanInfo | undefined {
  return setPlans.find((sp) => sp.slug === slug);
}

/**
 * セットプランに関連するプランを取得
 */
export function getRelatedPlans(setplan: SetPlanInfo): Plan[] {
  return setplan.relatedPlanSlugs
    .map((slug) => plans.find((p) => p.slug === slug))
    .filter((plan): plan is Plan => plan !== undefined);
}

/**
 * 全セットプランのスラッグを取得
 */
export function getAllSetPlanSlugs(): string[] {
  return setPlans.map((sp) => sp.slug);
}

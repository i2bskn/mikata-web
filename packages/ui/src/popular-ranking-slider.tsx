import { PlanCard } from "./plan-card";

export interface PopularRankingPlan {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  rating?: number;
  reviewCount?: number;
}

export interface PopularRankingSliderProps {
  plans: PopularRankingPlan[];
  seeMoreHref?: string;
  title?: string;
  iconUrl?: string;
  planLinkPrefix?: string;
}

const BADGE_COLORS = ["#E3AF3A", "#ADADAD", "#AA845E"] as const;

export function PopularRankingSlider({
  plans,
  seeMoreHref = "/ranking",
  title = "人気プランランキング",
  iconUrl = "/images/icons/crown.svg",
  planLinkPrefix = "/plan/",
}: PopularRankingSliderProps) {
  return (
    <section>
      <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
        <h2 className="flex items-center gap-2" style={{ fontSize: "21.6px", fontWeight: 600, color: "#212529", lineHeight: "1.2" }}>
          <img src={iconUrl} alt="" width={30} height={30} style={{ width: "30px", height: "30px", marginRight: "5px" }} />
          {title}
        </h2>
        <a
          href={seeMoreHref}
          style={{
            backgroundColor: "var(--color-danger)",
            color: "#fff",
            padding: "2px 10px",
            borderRadius: "3px",
            fontSize: "16.8px",
            fontWeight: "400",
            textDecoration: "none",
          }}
        >
          一覧を見る
        </a>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollSnapType: "x mandatory" }}>
        {plans.map((plan, index) => (
          <div
            key={plan.slug}
            className="shrink-0"
            style={{ width: "160px", scrollSnapAlign: "start", position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: 10,
                backgroundColor: BADGE_COLORS[index] ?? "#34e5d3",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "bold",
                padding: "2px 10px",
                borderRadius: "0 0 8px 0",
              }}
            >
              {index + 1}位
            </div>
            <PlanCard
              name={plan.name}
              description={plan.description}
              imageUrl={plan.imageUrl}
              href={`${planLinkPrefix}${plan.slug}`}
              price={plan.price}
              originalPrice={plan.originalPrice}
              tags={plan.tags}
              rating={plan.rating}
              reviewCount={plan.reviewCount}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { CategoryNav, type CategoryItem } from "./category-nav";

export interface SearchPanelPlanOption {
  value: string;
  label: string;
}

export interface SearchPanelProps {
  categoryNavItems: CategoryItem[];
  planOptions: SearchPanelPlanOption[];
  planCount: number;
  backgroundColor: string;
}

export function SearchPanel({ categoryNavItems, planOptions, planCount, backgroundColor }: SearchPanelProps) {
  const [planGenre, setPlanGenre] = useState("");
  const [planDate, setPlanDate] = useState("");
  const [today, setToday] = useState(false);
  const [tomorrow, setTomorrow] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("post_type", "plan");
    if (planGenre) params.set("plan_genre", planGenre);
    if (planDate) params.set("plan_date", planDate);
    if (today) params.append("plan_particular[]", "today");
    if (tomorrow) params.append("plan_particular[]", "tomorrow");
    window.location.href = `/?${params.toString()}`;
  };

  return (
    <div style={{ backgroundColor, padding: "25px 0" }}>
      <div className="mx-auto" style={{ maxWidth: "1020px", padding: "0 10px" }}>
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{
            maxWidth: "880px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "rgb(204, 204, 204) 0px 1px 6px 0px",
            padding: "15px",
          }}
        >
          <CategoryNav items={categoryNavItems} embedded />

          <div style={{ marginTop: "10px" }}>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1" style={{ minWidth: "120px" }}>
                <select
                  name="plan_genre"
                  value={planGenre}
                  onChange={(e) => setPlanGenre(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 38px 10px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                    backgroundColor: "transparent",
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="">全てのプラン</option>
                  {planOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 relative" style={{ minWidth: "100px" }}>
                <input
                  type="date"
                  name="plan_date"
                  value={planDate}
                  onChange={(e) => setPlanDate(e.target.value)}
                  placeholder="日付未定"
                  style={{
                    width: "100%",
                    padding: "10px 36px 10px 10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px 0 0 4px",
                    fontSize: "16px",
                    backgroundColor: "#ecf3f5",
                  }}
                />
              </div>

              <div className="flex items-center gap-3" style={{ fontSize: "14px", color: "#333" }}>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={today}
                    onChange={(e) => setToday(e.target.checked)}
                    style={{ width: "16px", height: "16px" }}
                  />
                  <span>今日</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tomorrow}
                    onChange={(e) => setTomorrow(e.target.checked)}
                    style={{ width: "16px", height: "16px" }}
                  />
                  <span>明日</span>
                </label>
              </div>

              <button
                type="button"
                style={{
                  fontSize: "12px",
                  color: "#666",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                ＋さらに<br />絞り込む
              </button>
            </div>

            <div className="flex items-center justify-between" style={{ marginTop: "16px" }}>
              <div style={{ color: "#666", fontSize: "14px" }}>
                該当プラン数{" "}
                <span style={{ fontSize: "36px", fontWeight: "normal", color: "var(--color-danger)" }}>{planCount}</span>
                <span style={{ fontSize: "16px", color: "#333" }}>件</span>
              </div>
              <button
                type="submit"
                className="text-base sm:text-[28px] sm:w-[260px] py-1.5 sm:py-[3px]"
                style={{
                  backgroundColor: "var(--color-danger)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "normal",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                検索する
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

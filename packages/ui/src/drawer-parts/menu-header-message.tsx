import type { FC } from "react";

type MenuHeaderMessageProps = {
  iconUrl?: string;
  text?: string;
  isLg?: boolean;
};

export const MenuHeaderMessage: FC<MenuHeaderMessageProps> = ({
  iconUrl = "/images/menu/title-icon-a.png",
  text = "会員登録不要！ご予約はお早めに",
  isLg,
}) => {
  return (
    <div
      style={{
        paddingTop: isLg ? "20px" : "80px",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: "8px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <img
        src={iconUrl}
        alt=""
        style={{ width: "20px", height: "20px", objectFit: "contain" }}
      />
      <span style={{ fontSize: "18px", fontWeight: 600, color: "#666", lineHeight: "24px" }}>
        {text}
      </span>
    </div>
  );
};

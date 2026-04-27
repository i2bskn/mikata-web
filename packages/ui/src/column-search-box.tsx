import type { FC } from "react";

export type ColumnSearchBoxProps = {
  /** input の name 属性。既定は "q" */
  inputName?: string;
  placeholder?: string;
  /** form action（指定すると GET 送信できる）。未指定なら見た目だけのボックス */
  action?: string;
  /** 検索ボタンの背景色 */
  accentColor?: string;
};

export const ColumnSearchBox: FC<ColumnSearchBoxProps> = ({
  inputName = "q",
  placeholder = "検索ワードを入力",
  action,
  accentColor = "var(--color-danger, #ed3434)",
}) => {
  return (
    <form
      action={action}
      method="get"
      className="flex justify-end"
      style={{ marginBottom: "16px" }}
    >
      <div
        className="flex"
        style={{
          width: "100%",
          maxWidth: "400px",
          border: "1px solid #d8d8d8",
          borderRadius: "5px",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <input
          type="search"
          name={inputName}
          placeholder={placeholder}
          aria-label={placeholder}
          style={{
            flex: 1,
            padding: "10px 14px",
            border: "none",
            outline: "none",
            fontSize: "14px",
            color: "#333",
            backgroundColor: "transparent",
          }}
        />
        <button
          type="submit"
          aria-label="検索"
          style={{
            padding: "0 18px",
            border: "none",
            backgroundColor: accentColor,
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </form>
  );
};

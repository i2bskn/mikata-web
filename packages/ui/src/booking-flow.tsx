export interface BookingFlowStep {
  step: number;
  image: string;
  title: string;
  text: string;
}

export interface BookingFlowProps {
  steps: BookingFlowStep[];
  title?: string;
}

export function BookingFlow({ steps, title = "予約から参加の流れ" }: BookingFlowProps) {
  return (
    <section style={{ marginTop: "20px", paddingBottom: "40px" }}>
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 600,
          color: "#212529",
          lineHeight: "21.6px",
          paddingBottom: "10px",
          borderBottom: "4px solid var(--color-primary)",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {steps.map((item) => (
          <div key={item.step} style={{ paddingBottom: "10px" }}>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "var(--color-primary)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "bold",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "2px",
                  zIndex: 1,
                }}
              >
                {item.step}
              </span>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <h3
              style={{
                fontSize: "16.8px",
                fontWeight: 600,
                color: "var(--color-danger)",
                marginTop: "8px",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "14.4px",
                color: "#333",
                lineHeight: "1.4",
                marginTop: "4px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

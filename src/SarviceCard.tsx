import styles from "./styles.module.css"

interface SarviceCardProps {
  slots?: string[]
}

export default function SarviceCard({ slots = [] }: SarviceCardProps) {
  const title = slots[0] ?? "YouTube Shorts"
  const iconSrc = slots[1] ?? "/assets/images/youtube_shorts_3d.png"
  const description =
    slots[2] ?? "Hook-driven edits sized and optimized for Shorts' algorithm"

  // Standardize platform label
  let displayTitle = title
  if (title.toLowerCase().includes("youtube") || title.toLowerCase().includes("shot")) {
    displayTitle = "YouTube Shorts"
  } else if (title.toLowerCase().includes("instagram") || title.toLowerCase().includes("reel")) {
    displayTitle = "Instagram Reels"
  } else if (title.toLowerCase().includes("tiktok")) {
    displayTitle = "TikTok Videos"
  }

  return (
    <div
      className={styles["variant-1-5"]}
      style={{
        transition: "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none"
      }}
    >
      <div className={styles["title-text-4"]} style={{ width: "100%", textAlign: "center" }}>
        <h4 className={styles["h4"]} style={{ margin: 0 }}>
          <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, fontFamily: "inherit", letterSpacing: "-0.02em" }}>
            {displayTitle}
          </span>
        </h4>
      </div>
      <div className={styles["div-33"]}>
        <div className={styles["div-34"]} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            className={styles["img-4"]}
            src={iconSrc}
            alt={displayTitle}
            style={{
              maxHeight: "180px",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 15px 30px rgba(235, 89, 5, 0.25))",
            }}
          />
        </div>
      </div>
      <div className={styles["reviews-text-18"]}>
        <p className={styles["p-44"]}>{description}</p>
      </div>
      <div className={styles["purple-shade-2"]} />
    </div>
  )
}

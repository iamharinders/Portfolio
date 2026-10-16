import styles from "./styles.module.css"

export default function SarviceCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-5"]}>
        <div className={styles["title-text-4"]}>
          <h4 className={styles["h4"]}>
            <span className={styles["span-64"]}>{slots[0] ?? "YoutubeShots"}</span>
          </h4>
        </div>
        <div className={styles["div-33"]}>
          <div className={styles["div-34"]}>
            <img className={styles["img-4"]} src={slots[1] ?? "https://framerusercontent.com/images/FBvGy9tsK1ioQBIfQO63uhtj2pQ.png?scale-down-to=512&width=1920&height=1920"} alt="" />
          </div>
        </div>
        <div className={styles["reviews-text-18"]}>
          <p className={styles["p-44"]}>{slots[2] ?? "Hook-driven edits sized and optimized for Shorts' algorithm"}</p>
        </div>
        <div className={styles["purple-shade-2"]} />
      </div>
  )
}

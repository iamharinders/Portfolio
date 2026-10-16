import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Subtext3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-10"]}>
        <div className={styles["content-5"]}>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1763\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"1764\"></use></svg>"} />
            </div>
          </div>
          <div className={styles["problem-title-3"]}>
            <p className={styles["p-58"]}>{slots[0] ?? "Process We  Follow"}</p>
          </div>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1769\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"1770\"></use></svg>"} />
            </div>
          </div>
        </div>
      </div>
  )
}

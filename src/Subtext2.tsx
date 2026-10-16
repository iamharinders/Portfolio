import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Subtext2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-9"]}>
        <div className={styles["content-4"]}>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1576\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"1577\"></use></svg>"} />
            </div>
          </div>
          <div className={styles["problem-title-2"]}>
            <p className={styles["p-53"]}>{slots[0] ?? "Results"}</p>
          </div>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1582\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"1583\"></use></svg>"} />
            </div>
          </div>
        </div>
      </div>
  )
}

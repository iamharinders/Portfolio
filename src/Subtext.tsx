import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Subtext({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-2"]}>
        <div className={styles["content-2"]}>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"261\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"262\"></use></svg>"} />
            </div>
          </div>
          <div className={styles["problem-title"]}>
            <p className={styles["p-12"]}>{slots[0] ?? "The Problem"}</p>
          </div>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"267\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"268\"></use></svg>"} />
            </div>
          </div>
        </div>
      </div>
  )
}

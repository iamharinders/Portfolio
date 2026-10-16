import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Subtext4({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-14"]}>
        <div className={styles["content-9"]}>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2396\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"2397\"></use></svg>"} />
            </div>
          </div>
          <div className={styles["problem-title-5"]}>
            <p className={styles["p-82"]}>{slots[0] ?? "FAQ"}</p>
          </div>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2402\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"2403\"></use></svg>"} />
            </div>
          </div>
        </div>
      </div>
  )
}

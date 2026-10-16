import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Subtext5({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-15"]}>
        <div className={styles["content-10"]}>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2502\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"2503\"></use></svg>"} />
            </div>
          </div>
          <div className={styles["problem-title-6"]}>
            <p className={styles["p-83"]}>{slots[0] ?? "Platforms"}</p>
          </div>
          <div className={styles["div-6"]}>
            <div className={styles["div-7"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 14 4\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2508\"><use href=\"#svg1509122608_205\" data-f2c-idx=\"2509\"></use></svg>"} />
            </div>
          </div>
        </div>
      </div>
  )
}

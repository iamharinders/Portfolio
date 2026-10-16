import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function SubText({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-2"]}>
        <div className={styles["div-4"]}>
          <div className={styles["div-5"]}>
            <SvgGraphic className={styles["svg-3"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 20 20\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"57\"><use href=\"#svg-354340360_1767\" data-f2c-idx=\"58\"></use></svg>"} />
          </div>
        </div>
        <div className={styles["announcement-text"]}>
          <p className={styles["p-8"]}>{slots[0] ?? "Trusted by 100+ creators & brands"}</p>
        </div>
      </div>
  )
}

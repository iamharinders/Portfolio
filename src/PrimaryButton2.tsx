import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function PrimaryButton2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary-2"]} href="/contact">
        <div className={styles["content-3"]}>
          <div className={styles["text-5"]}>
            <div className={styles["1-promo-button-label-2"]}>
              <p className={styles["p-45"]}>{slots[0] ?? "Start Growing Today"}</p>
            </div>
          </div>
          <div className={styles["arrow-4"]}>
            <div className={styles["logo"]}>
              <div className={styles["div"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"968\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"969\"></use></svg>"} />
              </div>
            </div>
            <div className={styles["arrow-5"]}>
              <div className={styles["div"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"972\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"973\"></use></svg>"} />
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}

import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function PrimaryButton3({ slots = [], href = "/contact" }: { slots?: string[]; href?: string }) {
  return (
      <a className={styles["primary-3"]} href={href}>
        <div className={styles["content-8"]}>
          <div className={styles["text-13"]}>
            <div className={styles["promo-button-label-7"]}>
              <p className={styles["p-80"]}>{slots[0] ?? "Get Started Now"}</p>
            </div>
          </div>
          <div className={styles["arrow-4"]}>
            <div className={styles["logo"]}>
              <div className={styles["div"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2317\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"2318\"></use></svg>"} />
              </div>
            </div>
            <div className={styles["arrow-5"]}>
              <div className={styles["div"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2321\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"2322\"></use></svg>"} />
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}

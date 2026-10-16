import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Vector({ slots = [] }: { slots?: string[] }) {
  return (
      <SvgGraphic className={styles["svg-5"]} html={"<svg class=\"framer-EEeBb framer-v5sbgb\" role=\"presentation\" viewBox=\"0 0 320 85\" style=\"opacity: 1;\" data-f2c-idx=\"400\"><path d=\"M 0 0 L 51 13.5 L 106.5 7 L 162 26 L 213 63.5 L 269.5 58 L 318 83\" fill=\"transparent\" height=\"83px\" id=\"fpSnqCPle\" stroke=\"rgba(204, 84, 14, 0.16)\" stroke-dasharray=\"0\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-width=\"2\" transform=\"translate(1 1)\" width=\"318px\" data-f2c-idx=\"401\"></path><path d=\"M 0 0 L 51 13.5 L 106.5 7 L 162 26 L 213 63.5 L 269.5 58 L 318 83\" fill=\"transparent\" height=\"83px\" id=\"Kc93c_pdF\" stroke=\"rgb(204, 84, 14)\" stroke-dasharray=\"341.9320983886719 341.9320983886719\" stroke-linecap=\"round\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-width=\"2\" transform=\"translate(1 1)\" width=\"318px\" stroke-dashoffset=\"-42981.200912707995\" data-f2c-idx=\"402\"></path></svg>"} />
  )
}

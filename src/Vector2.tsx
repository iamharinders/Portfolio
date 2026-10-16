import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Vector2({ slots = [] }: { slots?: string[] }) {
  return (
      <SvgGraphic className={styles["tik-mark"]} html={"<svg data-framer-name=\"Tik Mark\" class=\"framer-i0APt framer-12vsufd\" role=\"presentation\" viewBox=\"0 0 86 85\" style=\"opacity: 1;\" data-f2c-idx=\"561\"><defs data-f2c-idx=\"562\"><linearGradient id=\"UBFQ5owAB-3448679881-linear-gradient\" x1=\"0.9629350746874972\" x2=\"0.03706492531250283\" y1=\"0\" y2=\"1\" data-f2c-idx=\"563\"><stop offset=\"0\" stop-color=\"rgb(211, 111, 40)\" data-f2c-idx=\"564\"></stop><stop offset=\"1\" stop-color=\"rgba(255, 61, 22, 0.16)\" data-f2c-idx=\"565\"></stop></linearGradient></defs><path d=\"M 42.5 85 C 19.028 85 0 65.972 0 42.5 L 0 42.5 C 0 19.028 19.028 0 42.5 0 L 42.5 0 C 65.972 0 85 19.028 85 42.5 L 85 42.5 C 85 65.972 65.972 85 42.5 85 Z\" fill=\"url(#UBFQ5owAB-3448679881-linear-gradient)\" height=\"85px\" id=\"UBFQ5owAB\" transform=\"translate(0.5 0)\" width=\"85.00000000000004px\" data-f2c-idx=\"566\"></path><path d=\"M 0 17.708 L 8.264 25.972 L 33.055 0\" fill=\"transparent\" height=\"25.972214037872916px\" id=\"hA9RKjc3X\" stroke=\"rgb(243, 147, 147)\" stroke-dasharray=\"38.073309326171874 47.591636657714844\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.37\" transform=\"translate(26.452 29.526)\" width=\"33.055483533281745px\" stroke-dashoffset=\"-10043.60697066206\" data-f2c-idx=\"567\"></path></svg>"} />
  )
}

import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Vector3({ slots = [] }: { slots?: string[] }) {
  return (
      <SvgGraphic className={styles["svg-21"]} html={"<svg class=\"framer-UvbKT framer-g2if3\" role=\"presentation\" viewBox=\"0 0 15 11\" style=\"opacity: 1;\" data-f2c-idx=\"1941\"><path d=\"M 13.029 4.03 C 13.232 4.314 13.333 4.456 13.333 4.667 C 13.333 4.877 13.232 5.019 13.029 5.303 C 12.119 6.58 9.793 9.333 6.667 9.333 C 3.541 9.333 1.215 6.58 0.304 5.303 C 0.101 5.019 0 4.877 0 4.667 C 0 4.456 0.101 4.314 0.304 4.03 C 1.215 2.753 3.541 0 6.667 0 C 9.793 0 12.119 2.753 13.029 4.03 Z\" fill=\"transparent\" height=\"9.33331999999973px\" id=\"cD6hhWnoQ\" stroke=\"rgba(255, 255, 255, 0.8)\" stroke-dasharray=\"34.136131286621094 34.136131286621094\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(1 1)\" width=\"13.333370000000059px\" stroke-dashoffset=\"-3618.732829258648\" data-f2c-idx=\"1942\"></path><path d=\"M 4 2 C 4 0.895 3.105 0 2 0 C 0.895 0 0 0.895 0 2 C 0 3.105 0.895 4 2 4 C 3.105 4 4 3.105 4 2 Z\" fill=\"transparent\" height=\"4px\" id=\"SolUiCSWK\" stroke=\"rgba(255, 255, 255, 0.8)\" stroke-dasharray=\"12.568893432617188 12.568893432617188\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(5.5 3.5)\" width=\"4px\" stroke-dashoffset=\"-1332.4142361115032\" data-f2c-idx=\"1943\"></path></svg>"} />
  )
}

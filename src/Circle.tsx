import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Circle({ slots = [] }: { slots?: string[] }) {
  return (
      <SvgGraphic className={styles["svg-7"]} html={"<svg class=\"framer-2tLNh framer-4xb6h8\" role=\"presentation\" viewBox=\"0 0 430 434\" style=\"transform: translate(-50%, -50%); opacity: 1;\" data-f2c-idx=\"453\"><path d=\"M 210 0 C 325.98 0 420 94.02 420 210 C 420 325.98 325.98 420 210 420 C 94.02 420 0 325.98 0 210 C 0 94.02 94.02 0 210 0 Z\" fill=\"transparent\" height=\"420px\" id=\"phIoeQDQo\" stroke=\"rgba(255, 89, 28, 0.17)\" stroke-dasharray=\"0\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-width=\"4\" transform=\"translate(5 7)\" width=\"420px\" data-f2c-idx=\"454\"></path><path d=\"M 210 0 C 315 0 420 94.02 420 210 C 420 325.98 325.98 420 210 420 C 94.02 420 0 325.98 0 210 C 0 94.02 105 0 210 0 Z\" fill=\"transparent\" height=\"420px\" id=\"QeK2eLxIx\" stroke=\"rgb(255, 89, 28)\" stroke-dasharray=\"1051.99072265625 920.4918823242186\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" stroke-width=\"4\" transform=\"translate(5 7)\" width=\"420px\" stroke-dashoffset=\"-139400.43952943935\" data-f2c-idx=\"455\"></path></svg>"} />
  )
}

import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function WatchYourContentCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-6"]}>
        <div className={styles["purple-shade-3"]} />
        <div className={styles["div-99"] + " " + styles["rv-21"]} data-reveal>
          <video className={styles["video-6"]} src="https://framerusercontent.com/assets/OUh0BxMeGqmebqe3OU950qgZd5Q.mp4" autoPlay muted loop playsInline />
        </div>
        <div className={styles["div-100"]}>
          <SvgGraphic className={styles["svg-21"]} html={"<svg class=\"framer-UvbKT framer-g2if3\" role=\"presentation\" viewBox=\"0 0 15 11\" style=\"opacity: 1;\" data-f2c-idx=\"1941\"><path d=\"M 13.029 4.03 C 13.232 4.314 13.333 4.456 13.333 4.667 C 13.333 4.877 13.232 5.019 13.029 5.303 C 12.119 6.58 9.793 9.333 6.667 9.333 C 3.541 9.333 1.215 6.58 0.304 5.303 C 0.101 5.019 0 4.877 0 4.667 C 0 4.456 0.101 4.314 0.304 4.03 C 1.215 2.753 3.541 0 6.667 0 C 9.793 0 12.119 2.753 13.029 4.03 Z\" fill=\"transparent\" height=\"9.33331999999973px\" id=\"cD6hhWnoQ\" stroke=\"rgba(255, 255, 255, 0.8)\" stroke-dasharray=\"34.136131286621094 34.136131286621094\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(1 1)\" width=\"13.333370000000059px\" stroke-dashoffset=\"-3618.732829258648\" data-f2c-idx=\"1942\"></path><path d=\"M 4 2 C 4 0.895 3.105 0 2 0 C 0.895 0 0 0.895 0 2 C 0 3.105 0.895 4 2 4 C 3.105 4 4 3.105 4 2 Z\" fill=\"transparent\" height=\"4px\" id=\"SolUiCSWK\" stroke=\"rgba(255, 255, 255, 0.8)\" stroke-dasharray=\"12.568893432617188 12.568893432617188\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(5.5 3.5)\" width=\"4px\" stroke-dashoffset=\"-1332.4142361115032\" data-f2c-idx=\"1943\"></path></svg>"} />
          <div className={styles["title-text-10"]}>
            <div className={styles["p-66"]}>
              <div className={styles["span-99"]}>
                <span className={styles["span-100"]}>{slots[0] ?? "1"}</span>
                <span className={styles["span-101"]}>{slots[1] ?? "."}</span>
                <span className={styles["span-102"]}>{slots[2] ?? "2"}</span>
                <span className={styles["span-103"]}>{slots[3] ?? "M"}</span>
              </div>
              {" "}
              <div className={styles["span-99"]}>
                <span className={styles["span-104"]}>{slots[4] ?? "V"}</span>
                <span className={styles["span-101"]}>{slots[5] ?? "i"}</span>
                <span className={styles["span-102"]}>{slots[6] ?? "e"}</span>
                <span className={styles["span-105"]}>{slots[7] ?? "w"}</span>
                <span className={styles["span-106"]}>{slots[8] ?? "s"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["profile-info-4"]}>
          <div className={styles["ellipse-194-2"]}>
            <div className={styles["div-101"]}>
              <img className={styles["img-14"]} src={slots[9] ?? "https://framerusercontent.com/images/8Gl8PdjwzpNDgUfc4GEgVKLwh0E.png?width=128&height=128"} alt="" />
            </div>
          </div>
          <div className={styles["name-info-4"]}>
            <div className={styles["reviews-text-27"]}>
              <p className={styles["p-67"]}>{slots[10] ?? "lifestyle_smma"}</p>
            </div>
            <div className={styles["verification-icon-2"]}>
              <div className={styles["div-102"]}>
                <img className={styles["img-15"]} src={slots[11] ?? "https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <SvgGraphic className={styles["svg-22"]} html={"<svg data-framer-appear-id=\"k00hks\" class=\"framer-tUPky framer-k00hks\" role=\"presentation\" viewBox=\"0 0 46 53\" style=\"will-change: transform; opacity: 1; transform: none;\" data-f2c-idx=\"1967\"><g opacity=\"0.45\" data-f2c-idx=\"1968\"><g d=\"M 13 15.5 L 13 29.287 L 24.192 22.41 Z M 23.102 0.986 C 27.319 -1.212 32.54 0.389 34.76 4.563 C 36.98 8.736 35.36 13.9 31.143 16.097 L 27.675 17.92 C 30.662 18.029 33.511 19.67 35.003 22.475 C 37.223 26.648 35.607 31.812 31.386 34.009 L 12.896 43.725 C 8.679 45.923 3.458 44.322 1.238 40.148 C -0.982 35.974 0.638 30.811 4.855 28.614 L 8.323 26.791 C 5.336 26.682 2.487 25.041 0.995 22.236 C -1.225 18.063 0.395 12.899 4.612 10.702 Z\" fill=\"transparent\" height=\"44.71052208729251px\" id=\"SMUpdGzAi\" transform=\"translate(5 4)\" width=\"35.99860137609816px\" data-f2c-idx=\"1969\"><path d=\"M 0 0 L 0 13.787 L 11.192 6.91 Z\" fill=\"transparent\" height=\"13.787000000000035px\" id=\"Ictn9jXt1\" stroke=\"rgb(255, 255, 255)\" stroke-dasharray=\"0\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(13 15.5)\" width=\"11.192000000000007px\" data-f2c-idx=\"1970\"></path><path d=\"M 23.102 0.986 C 27.319 -1.212 32.54 0.389 34.76 4.563 C 36.98 8.736 35.36 13.9 31.143 16.097 L 27.675 17.92 C 30.662 18.029 33.511 19.67 35.003 22.475 C 37.223 26.648 35.607 31.812 31.386 34.009 L 12.896 43.725 C 8.679 45.923 3.458 44.322 1.238 40.148 C -0.982 35.974 0.638 30.811 4.855 28.614 L 8.323 26.791 C 5.336 26.682 2.487 25.041 0.995 22.236 C -1.225 18.063 0.395 12.899 4.612 10.702 Z\" fill=\"transparent\" height=\"44.710522087292446px\" id=\"rCW7LcEIm\" stroke=\"rgb(255, 255, 255)\" stroke-dasharray=\"0\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" width=\"35.99860137609818px\" data-f2c-idx=\"1971\"></path></g></g><g d=\"M 13 15.5 L 13 29.287 L 24.192 22.41 Z M 23.102 0.986 C 27.319 -1.212 32.54 0.389 34.76 4.563 C 36.98 8.736 35.36 13.9 31.143 16.097 L 27.675 17.92 C 30.662 18.029 33.511 19.67 35.003 22.475 C 37.223 26.648 35.607 31.812 31.386 34.009 L 12.896 43.725 C 8.679 45.923 3.458 44.322 1.238 40.148 C -0.982 35.974 0.638 30.811 4.855 28.614 L 8.323 26.791 C 5.336 26.682 2.487 25.041 0.995 22.236 C -1.225 18.063 0.395 12.899 4.612 10.702 Z\" fill=\"transparent\" height=\"44.71052208729251px\" id=\"HLbCnijJV\" transform=\"translate(5 4)\" width=\"35.99860137609816px\" data-f2c-idx=\"1972\"><path d=\"M 0 0 L 0 13.787 L 11.192 6.91 Z\" fill=\"transparent\" height=\"13.787000000000035px\" id=\"byqHtHCLB\" stroke=\"rgb(255, 25, 25)\" stroke-dasharray=\"40.076271057128906 40.076271057128906\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(13 15.5)\" width=\"11.192000000000007px\" stroke-dashoffset=\"79.79691837775758\" data-f2c-idx=\"1973\"></path><path d=\"M 23.102 0.986 C 27.319 -1.212 32.54 0.389 34.76 4.563 C 36.98 8.736 35.36 13.9 31.143 16.097 L 27.675 17.92 C 30.662 18.029 33.511 19.67 35.003 22.475 C 37.223 26.648 35.607 31.812 31.386 34.009 L 12.896 43.725 C 8.679 45.923 3.458 44.322 1.238 40.148 C -0.982 35.974 0.638 30.811 4.855 28.614 L 8.323 26.791 C 5.336 26.682 2.487 25.041 0.995 22.236 C -1.225 18.063 0.395 12.899 4.612 10.702 Z\" fill=\"transparent\" height=\"44.710522087292446px\" id=\"rC66gikwL\" stroke=\"rgb(255, 25, 25)\" stroke-dasharray=\"148.52980041503906 148.52980041503906\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" width=\"35.99860137609818px\" stroke-dashoffset=\"295.7415959056695\" data-f2c-idx=\"1974\"></path></g></svg>"} />
        <div className={styles["div-103"] + " " + styles["rv-21"]} data-reveal>
          <video className={styles["video-6"]} src="https://framerusercontent.com/assets/4e6W2vHiUa5qeeiGAcxaDg11GbM.mp4" autoPlay muted loop playsInline />
        </div>
        <div className={styles["div-104"]}>
          <SvgGraphic className={styles["svg-21"]} html={"<svg class=\"framer-UvbKT framer-et14ss\" role=\"presentation\" viewBox=\"0 0 15 11\" style=\"opacity: 1;\" data-f2c-idx=\"1978\"><path d=\"M 13.029 4.03 C 13.232 4.314 13.333 4.456 13.333 4.667 C 13.333 4.877 13.232 5.019 13.029 5.303 C 12.119 6.58 9.793 9.333 6.667 9.333 C 3.541 9.333 1.215 6.58 0.304 5.303 C 0.101 5.019 0 4.877 0 4.667 C 0 4.456 0.101 4.314 0.304 4.03 C 1.215 2.753 3.541 0 6.667 0 C 9.793 0 12.119 2.753 13.029 4.03 Z\" fill=\"transparent\" height=\"9.33331999999973px\" id=\"cD6hhWnoQ\" stroke=\"rgba(255, 255, 255, 0.8)\" stroke-dasharray=\"34.136131286621094 34.136131286621094\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(1 1)\" width=\"13.333370000000059px\" stroke-dashoffset=\"-3618.732829258648\" data-f2c-idx=\"1979\"></path><path d=\"M 4 2 C 4 0.895 3.105 0 2 0 C 0.895 0 0 0.895 0 2 C 0 3.105 0.895 4 2 4 C 3.105 4 4 3.105 4 2 Z\" fill=\"transparent\" height=\"4px\" id=\"SolUiCSWK\" stroke=\"rgba(255, 255, 255, 0.8)\" stroke-dasharray=\"12.568893432617188 12.568893432617188\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(5.5 3.5)\" width=\"4px\" stroke-dashoffset=\"-1332.4142361115032\" data-f2c-idx=\"1980\"></path></svg>"} />
          <div className={styles["title-text-11"]}>
            <div className={styles["p-68"]}>
              <div className={styles["span-107"]}>
                <span className={styles["span-108"]}>{slots[12] ?? "2"}</span>
                <span className={styles["span-109"]}>{slots[13] ?? "."}</span>
                <span className={styles["span-110"]}>{slots[14] ?? "4"}</span>
                <span className={styles["span-111"]}>{slots[15] ?? "M"}</span>
              </div>
              {" "}
              <div className={styles["span-107"]}>
                <span className={styles["span-110"]}>{slots[16] ?? "V"}</span>
                <span className={styles["span-109"]}>{slots[17] ?? "i"}</span>
                <span className={styles["span-108"]}>{slots[18] ?? "e"}</span>
                <span className={styles["span-112"]}>{slots[19] ?? "w"}</span>
                <span className={styles["span-113"]}>{slots[20] ?? "s"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["profile-info-5"]}>
          <div className={styles["ellipse-194-2"]}>
            <div className={styles["div-101"]}>
              <img className={styles["img-16"]} src={slots[21] ?? "https://framerusercontent.com/images/oHIMIt9jnEpUoLmqZcmThJUp7gw.jpg?scale-down-to=1024&width=4000&height=6000"} alt="" />
            </div>
          </div>
          <div className={styles["name-info-5"]}>
            <div className={styles["reviews-text-28"]}>
              <p className={styles["p-69"]}>{slots[22] ?? "fitness_steve"}</p>
            </div>
            <div className={styles["verification-icon-2"]}>
              <div className={styles["div-102"]}>
                <img className={styles["img-15"]} src={slots[23] ?? "https://framerusercontent.com/images/mH9AO6fIaF2UQcO2TXV19Fuk.png?width=350&height=350"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <SvgGraphic className={styles["svg-23"]} html={"<svg data-framer-appear-id=\"1ftdkhr\" class=\"framer-wq1Lx framer-1ftdkhr\" role=\"presentation\" viewBox=\"0 0 46 53\" style=\"will-change: transform; opacity: 1; transform: none;\" data-f2c-idx=\"2004\"><path d=\"M 21.217 22.572 L 21.217 10.247 C 23.772 12.021 26.812 12.968 29.925 12.961 L 29.925 8.248 C 28.094 7.87 26.823 6.867 25.183 5.53 C 23.543 4.194 21.803 2.273 21.364 0 L 16.782 0 L 16.772 24.302 C 16.666 27.024 13.879 28.903 11.521 29.208 C 10.382 29.356 9.412 29.38 8.603 29.216 C 7.009 28.893 5.601 27.609 5 26.099 C 4.561 24.998 4.436 23.665 4.436 22.571 C 4.439 19.757 6.791 17.478 9.697 17.474 C 10.237 17.474 10.756 17.561 11.249 17.71 L 11.249 12.956 C 5.022 13.097 0 18.044 0 24.111 C 0 27.045 1.386 29.794 3.328 31.462 C 5.271 33.129 7.342 33.738 9.697 33.733 C 16.048 33.733 21.217 28.726 21.217 22.572 Z\" fill=\"transparent\" height=\"33.733333333333334px\" id=\"kY5yzCLiE\" stroke=\"rgba(255, 255, 255, 0.25)\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(8.035 9.632)\" width=\"29.924731182795682px\" data-f2c-idx=\"2005\"></path><path d=\"M 21.217 22.572 L 21.217 10.247 C 23.772 12.021 26.812 12.968 29.925 12.961 L 29.925 8.248 C 28.094 7.87 26.823 6.867 25.183 5.53 C 23.543 4.194 21.803 2.273 21.364 0 L 16.782 0 L 16.772 24.302 C 16.666 27.024 13.879 28.903 11.521 29.208 C 10.382 29.356 9.412 29.38 8.603 29.216 C 7.009 28.893 5.601 27.609 5 26.099 C 4.561 24.998 4.436 23.665 4.436 22.571 C 4.439 19.757 6.791 17.478 9.697 17.474 C 10.237 17.474 10.756 17.561 11.249 17.71 L 11.249 12.956 C 5.022 13.097 0 18.044 0 24.111 C 0 27.045 1.386 29.794 3.328 31.462 C 5.271 33.129 7.342 33.738 9.697 33.733 C 16.048 33.733 21.217 28.726 21.217 22.572 Z\" fill=\"transparent\" height=\"33.733333333333334px\" id=\"WbXmbajK_\" stroke=\"rgba(255, 36, 229, 0.89)\" stroke-dasharray=\"151.859619140625 151.859619140625\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" transform=\"translate(8.035 9.632)\" width=\"29.924731182795682px\" stroke-dashoffset=\"-16098.467181554184\" data-f2c-idx=\"2006\"></path></svg>"} />
        <div className={styles["div-105"] + " " + styles["rv-21"]} data-reveal>
          <video className={styles["video-6"]} src="https://framerusercontent.com/assets/FLMP26czSPqDNGSRZ1PfTOfD3E.mp4" autoPlay muted loop playsInline />
        </div>
        <div className={styles["div-106"] + " " + styles["rv-22"]} data-reveal>
          <video className={styles["video-6"]} src="https://framerusercontent.com/assets/0O56ed5D4Df3A8PfmCNF5GC9eno.mp4" autoPlay muted loop playsInline />
        </div>
      </div>
  )
}

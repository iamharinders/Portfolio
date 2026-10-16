import styles from "./styles.module.css"

export default function PricingCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["non-selective"]}>
        <div className={styles["div-113"]}>
          <div className={styles["div-114"]}>
            <div className={styles["text-section"]}>
              <div className={styles["title-text-15"]}>
                <h5 className={styles["h5"]}>{slots[0] ?? "Starter"}</h5>
              </div>
              <div className={styles["reviews-text-34"]}>
                <p className={styles["p-76"]}>{slots[1] ?? "Perfect for creators just getting started"}</p>
              </div>
            </div>
            <div className={styles["price-section"]}>
              <div className={styles["title-text-16"]}>
                <h2 className={styles["h2-2"]}>
                  <span className={styles["span-137"]}>{slots[2] ?? "$699"}</span>
                </h2>
              </div>
              <div className={styles["title-text-17"]}>
                <p className={styles["p-77"]}>{slots[3] ?? "/ month"}</p>
              </div>
            </div>
          </div>
          <div className={styles["features-list"]}>
            <div className={styles["features"]}>
              <div className={styles["div-115"]}>
                <div className={styles["div-116"]}>
                  <img className={styles["img-21"]} src={slots[4] ?? "https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64"} alt="" />
                </div>
              </div>
              <div className={styles["reviews-text-35"]}>
                <p className={styles["p-78"]}>{slots[5] ?? "Up to 8 short-form videos/month"}</p>
              </div>
            </div>
            <div className={styles["features"]}>
              <div className={styles["div-115"]}>
                <div className={styles["div-116"]}>
                  <img className={styles["img-21"]} src={slots[6] ?? "https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64"} alt="" />
                </div>
              </div>
              <div className={styles["reviews-text-35"]}>
                <p className={styles["p-78"]}>{slots[7] ?? "Basic editing + captions"}</p>
              </div>
            </div>
            <div className={styles["features"]}>
              <div className={styles["div-115"]}>
                <div className={styles["div-116"]}>
                  <img className={styles["img-21"]} src={slots[8] ?? "https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64"} alt="" />
                </div>
              </div>
              <div className={styles["reviews-text-35"]}>
                <p className={styles["p-79"]}>{slots[9] ?? "Max 60s video length"}</p>
              </div>
            </div>
            <div className={styles["features"]}>
              <div className={styles["div-115"]}>
                <div className={styles["div-116"]}>
                  <img className={styles["img-21"]} src={slots[10] ?? "https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64"} alt="" />
                </div>
              </div>
              <div className={styles["reviews-text-35"]}>
                <p className={styles["p-79"]}>{slots[11] ?? "Platform-ready formats (Reels, TikTok, Shorts)"}</p>
              </div>
            </div>
            <div className={styles["features"]}>
              <div className={styles["div-115"]}>
                <div className={styles["div-116"]}>
                  <img className={styles["img-21"]} src={slots[12] ?? "https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64"} alt="" />
                </div>
              </div>
              <div className={styles["reviews-text-35"]}>
                <p className={styles["p-79"]}>{slots[13] ?? "Standard export quality"}</p>
              </div>
            </div>
            <div className={styles["features"]}>
              <div className={styles["div-115"]}>
                <div className={styles["div-116"]}>
                  <img className={styles["img-21"]} src={slots[14] ?? "https://framerusercontent.com/images/t4NZZMcbKSULu3efn5nCK44pM.png?width=64&height=64"} alt="" />
                </div>
              </div>
              <div className={styles["reviews-text-35"]}>
                <p className={styles["p-79"]}>{slots[15] ?? "Email support"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-117"]}>
          <a className={styles["variant-1-13"]} href="./contact">
            <div className={styles["text-12"]}>
              <div className={styles["promo-button-label-7"]}>
                <p className={styles["p-80"]}>{slots[16] ?? "Get Started Now"}</p>
              </div>
              <div className={styles["promo-button-label-8"]}>
                <p className={styles["p-80"]}>{slots[17] ?? "Get Started Now"}</p>
              </div>
            </div>
          </a>
        </div>
        <div className={styles["purple-shade-5"]} />
      </div>
  )
}

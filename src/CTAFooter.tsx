import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function CTAFooter({ slots = [] }: { slots?: string[] }) {
  return (
      <footer className={styles["desktop-9"]}>
        <div className={styles["div-125"]}>
          <img className={styles["img-28"]} src={slots[0] ?? "https://framerusercontent.com/images/xLLObKPmdqqcuWcYJSGc1cAvQuE.png?scale-down-to=2048&width=4320&height=4722"} alt="" />
        </div>
        <div className={styles["content-11"]}>
          <section className={styles["cta"]}>
            <div className={styles["div-126"]}>
              <img className={styles["img-29"]} src={slots[1] ?? "https://framerusercontent.com/images/cwI1cddQjDGs7ktEQo3mfuyYM.png?scale-down-to=2048&width=5248&height=1984"} alt="" />
            </div>
            <div className={styles["project"]}>
              <div className={styles["text-14"]}>
                <div className={styles["title-text-18"]}>
                  <h2 className={styles["h2-3"]}>
                    <span className={styles["span-138"] + " " + styles["rv-24"]} data-reveal>{slots[2] ?? "Ready"}</span>
                    {" "}
                    <span className={styles["span-139"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "61ms" }}>{slots[3] ?? "to"}</span>
                    {" "}
                    <span className={styles["span-140"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "61ms" }}>{slots[4] ?? "turn"}</span>
                    {" "}
                    <span className={styles["span-141"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "116ms" }}>{slots[5] ?? "your"}</span>
                    {" "}
                    <div className={styles["span-142"] + " " + styles["rv-24"]} data-reveal />
                  </h2>
                  <h2 className={styles["h2-3"]}>
                    <span className={styles["span-143"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "232ms" }}>{slots[6] ?? "content"}</span>
                    {" "}
                    <span className={styles["span-144"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "292ms" }}>{slots[7] ?? "into"}</span>
                    {" "}
                    <span className={styles["span-144"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "334ms" }}>{slots[8] ?? "real"}</span>
                    {" "}
                    <span className={styles["span-145"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "401ms" }}>{slots[9] ?? "growth?"}</span>
                  </h2>
                </div>
                <div className={styles["reviews-text-36"]}>
                  <div className={styles["p-84"]}>
                    <span className={styles["span-146"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "171ms" }}>{slots[10] ?? "Stop"}</span>
                    {" "}
                    <span className={styles["span-147"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "232ms" }}>{slots[11] ?? "guessing"}</span>
                    {" "}
                    <span className={styles["span-148"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "292ms" }}>{slots[12] ?? "what"}</span>
                    {" "}
                    <span className={styles["span-149"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "334ms" }}>{slots[13] ?? "works."}</span>
                    {" "}
                    <span className={styles["span-150"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "401ms" }}>{slots[14] ?? "Let’s"}</span>
                    {" "}
                    <span className={styles["span-151"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "461ms" }}>{slots[15] ?? "turn"}</span>
                    {" "}
                    <span className={styles["span-152"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "461ms" }}>{slots[16] ?? "your"}</span>
                    {" "}
                    <span className={styles["span-153"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "525ms" }}>{slots[17] ?? "videos"}</span>
                    {" "}
                    <span className={styles["span-154"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "586ms" }}>{slots[18] ?? "into"}</span>
                    {" "}
                    <span className={styles["span-155"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "632ms" }}>{slots[19] ?? "consistent"}</span>
                    {" "}
                    <span className={styles["span-156"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "693ms" }}>{slots[20] ?? "views,"}</span>
                    {" "}
                    <span className={styles["span-157"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "736ms" }}>{slots[21] ?? "engagement,"}</span>
                    {" "}
                    <span className={styles["span-158"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "806ms" }}>{slots[22] ?? "and"}</span>
                    {" "}
                    <span className={styles["span-159"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "806ms" }}>{slots[23] ?? "results"}</span>
                    {" "}
                    <span className={styles["span-160"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "974ms" }}>{slots[24] ?? "that"}</span>
                    {" "}
                    <span className={styles["span-161"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "974ms" }}>{slots[25] ?? "actually"}</span>
                    {" "}
                    <span className={styles["span-162"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "1033ms" }}>{slots[26] ?? "matter."}</span>
                  </div>
                </div>
              </div>
              <div className={styles["button-group"]}>
                <div className={styles["secondary-action-buttons"]}>
                  <div className={styles["main-action-buttons"]}>
                    <div className={styles["div-127"]}>
                      <a className={styles["primary-4"]} href="./contact">
                        <div className={styles["content-3"]}>
                          <div className={styles["text-5"]}>
                            <div className={styles["1-promo-button-label-2"]}>
                              <p className={styles["p-45"]}>{slots[27] ?? "Start Growing Today"}</p>
                            </div>
                            <div className={styles["promo-button-label-6"]}>
                              <p className={styles["p-46"]}>{slots[28] ?? "Start Growing Today"}</p>
                            </div>
                          </div>
                          <div className={styles["arrow-4"]}>
                            <div className={styles["logo"]}>
                              <div className={styles["div"]}>
                                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2660\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"2661\"></use></svg>"} />
                              </div>
                            </div>
                            <div className={styles["arrow-5"]}>
                              <div className={styles["div"]}>
                                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2664\"><use href=\"#svg-1609222690_369\" data-f2c-idx=\"2665\"></use></svg>"} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles["reviews-text-37"]}>
                  <div className={styles["p-85"]}>
                    <span className={styles["span-163"] + " " + styles["rv-24"]} data-reveal>{slots[29] ?? "No"}</span>
                    {" "}
                    <span className={styles["span-164"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "53ms" }}>{slots[30] ?? "contracts."}</span>
                    {" "}
                    <span className={styles["span-165"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "99ms" }}>{slots[31] ?? "Fast"}</span>
                    {" "}
                    <span className={styles["span-166"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "155ms" }}>{slots[32] ?? "delivery."}</span>
                    {" "}
                    <span className={styles["span-167"] + " " + styles["rv-24"]} data-reveal style={{ transitionDelay: "215ms" }}>{slots[33] ?? "Results-focused."}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className={styles["footer"]}>
            <div className={styles["info-logo"]}>
              <div className={styles["logo-2"]}>
                <a className={styles["a-2"]} href="./">
                  <div className={styles["div-128"]}>
                    <img className={styles["img-30"]} src={slots[34] ?? "https://framerusercontent.com/images/brpBRmmmugGykxrrMiISrtXFeI.png?scale-down-to=512&width=744&height=166"} alt="" />
                  </div>
                </a>
              </div>
              <div className={styles["infos"]}>
                <div className={styles["link"]}>
                  <div className={styles["menu"]}>
                    <div className={styles["reviews-text-38"]}>
                      <p className={styles["p-86"]}>{slots[35] ?? "Quick Links"}</p>
                    </div>
                    <div className={styles["quick-links"]}>
                      <div className={styles["reviews-text-39"]}>
                        <div className={styles["p-87"]}>
                          <a className={styles["a-3"]} href="./#sarvices-section">{slots[36] ?? "Services"}</a>
                        </div>
                      </div>
                      <div className={styles["reviews-text-40"]}>
                        <div className={styles["p-88"]}>
                          <a className={styles["a-3"]} href="./all-works">{slots[37] ?? "Works"}</a>
                        </div>
                      </div>
                      <div className={styles["reviews-text-41"]}>
                        <div className={styles["p-89"]}>
                          <a className={styles["a-3"]} href="./#Pricing">{slots[38] ?? "Pricing"}</a>
                        </div>
                      </div>
                      <div className={styles["reviews-text-42"]}>
                        <div className={styles["p-90"]}>
                          <a className={styles["a-3"]} href="./contact">{slots[39] ?? "Contact"}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["link-2"]}>
                  <div className={styles["menu-2"]}>
                    <div className={styles["reviews-text-43"]}>
                      <p className={styles["p-91"]}>{slots[40] ?? "Socials"}</p>
                    </div>
                    <div className={styles["socials"]}>
                      <div className={styles["reviews-text-44"]}>
                        <div className={styles["p-92"]}>
                          <a className={styles["a-4"]} href="https://www.facebook.com">{slots[41] ?? "Facebook"}</a>
                        </div>
                      </div>
                      <div className={styles["reviews-text-44"]}>
                        <div className={styles["p-92"]}>
                          <a className={styles["a-4"]} href="https://www.instagram.com">{slots[42] ?? "Instagram"}</a>
                        </div>
                      </div>
                      <div className={styles["reviews-text-44"]}>
                        <div className={styles["p-92"]}>
                          <a className={styles["a-4"]} href="https://www.youtube.com/">{slots[43] ?? "Youtube"}</a>
                        </div>
                      </div>
                      <div className={styles["reviews-text-44"]}>
                        <div className={styles["p-92"]}>
                          <a className={styles["a-4"]} href="https://twitter.com/">{slots[44] ?? "X"}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["links-line"]}>
              <div className={styles["line-108-2"]}>
                <div className={styles["div-129"]}>
                  <SvgGraphic className={styles["svg-27"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 1314 3\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2717\"><use href=\"#svg1609844329_503\" data-f2c-idx=\"2718\"></use></svg>"} />
                </div>
              </div>
              <div className={styles["links"]}>
                <div className={styles["reviews-text-45"]}>
                  <p className={styles["p-93"]}>{slots[45] ?? "© 2026 ClipCut. All rights reserved"}</p>
                </div>
                <div className={styles["created"]}>
                  <div className={styles["reviews-text-46"]}>
                    <div className={styles["p-94"]}>
                      {"Created by "}
                      <a className={styles["a"]} href="https://x.com/sabbir_h_dm">{slots[46] ?? "Sabbir Hossien"}</a>
                    </div>
                  </div>
                  <div className={styles["reviews-text-47"]}>
                    <div className={styles["p-95"]}>
                      {"Powered by "}
                      <a className={styles["a"]} href="https://www.framer.com">{slots[47] ?? "Framer"}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-130"]}>
            <div className={styles["div-131"]}>
              <img className={styles["img-31"]} src={slots[48] ?? "https://framerusercontent.com/images/5EvfpqIZOKKQBkBuwoevBmVUrlU.png?scale-down-to=2048&width=5760&height=1916"} alt="" />
            </div>
          </div>
        </div>
      </footer>
  )
}

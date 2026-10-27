/**
 * =======================================================================
 * MAIN APPLICATION LOGIC & DYNAMIC DATA BINDING
 * =======================================================================
 * Ingests PORTFOLIO_DATA from js/portfolio-data.js and binds to markup.
 * This guarantees that when Harinder updates portfolio-data.js,
 * the entire website updates seamlessly!
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PORTFOLIO_DATA === "undefined") {
    console.warn("PORTFOLIO_DATA not loaded. Using static fallback.");
    return;
  }

  renderHeroTicker();
  renderSelectedWorks();
  renderCaseStudyDetails();
  renderPhilosophyStages();
  renderSkillsSection();
  renderServicesSection();
  attachVideoModalTriggers();
});

/**
 * 1. Render Hero Ticker
 */
function renderHeroTicker() {
  const track = document.getElementById("hero-ticker-track");
  if (!track || !PORTFOLIO_DATA.tickerItems) return;

  // Duplicate items 4 times to create an infinite seamless loop
  const items = PORTFOLIO_DATA.tickerItems;
  const loopHtml = [...items, ...items, ...items, ...items]
    .map(item => `<span class="ticker-item"><span class="ticker-dot">•</span> ${item}</span>`)
    .join("");

  track.innerHTML = loopHtml;
}

/**
 * 2. Render Selected Works Grid
 */
function renderSelectedWorks() {
  const container = document.getElementById("selected-works-grid");
  if (!container || !PORTFOLIO_DATA.selectedWorks) return;

  container.innerHTML = PORTFOLIO_DATA.selectedWorks.map((project, idx) => {
    const videoSnippet = CinemaVideoPlayer.renderInlineVideo({
      videoType: project.videoType,
      videoSrc: project.videoSrc,
      posterImage: project.posterImage,
      title: project.title
    });

    const tagsHtml = (project.tags || [])
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join("");

    return `
      <article class="project-card" data-reveal data-project-id="${project.id}" tabindex="0">
        <div class="project-media-wrapper">
          ${videoSnippet}
          <div class="project-media-corner-top">
            <span class="project-index">${project.number || `[0${idx + 1}]`}</span>
            <span class="project-year">${project.year || "2026"}</span>
          </div>
          <button class="project-play-pill" data-open-modal="${project.id}" aria-label="Play ${project.title}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>WATCH FILM</span>
          </button>
        </div>
        <div class="project-info-row">
          <div class="project-main-meta">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-category">${project.category}</p>
          </div>
          <div class="project-role-meta">
            <span class="project-role-label">${project.role}</span>
            <span class="project-software-label">${project.software}</span>
          </div>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tags-row">
          ${tagsHtml}
        </div>
      </article>
    `;
  }).join("");
}

/**
 * 3. Render Case Study Details
 */
function renderCaseStudyDetails() {
  const rolesContainer = document.getElementById("case-study-roles-grid");
  const processContainer = document.getElementById("case-study-process-timeline");
  const data = PORTFOLIO_DATA.caseStudy;

  if (rolesContainer && data.roleList) {
    rolesContainer.innerHTML = data.roleList.map(role => `
      <div class="case-role-item">
        <div class="case-role-header">
          <span class="case-role-bullet">+</span>
          <h4 class="case-role-name">${role.name}</h4>
        </div>
        <p class="case-role-detail">${role.detail}</p>
      </div>
    `).join("");
  }

  if (processContainer && data.processStages) {
    processContainer.innerHTML = data.processStages.map(stage => `
      <div class="process-timeline-card" data-reveal>
        <div class="timeline-step-badge">${stage.step}</div>
        <h4 class="timeline-step-title">${stage.title}</h4>
        <p class="timeline-step-desc">${stage.desc}</p>
      </div>
    `).join("");
  }
}

/**
 * 4. Render Philosophy Stages
 */
function renderPhilosophyStages() {
  const container = document.getElementById("philosophy-stages-grid");
  const stages = PORTFOLIO_DATA.philosophy?.stages;

  if (!container || !stages) return;

  container.innerHTML = stages.map(st => `
    <div class="philosophy-stage-card" data-reveal>
      <div class="stage-top-bar">
        <span class="stage-num">${st.step}</span>
        <h3 class="stage-name">${st.name}</h3>
      </div>
      <div class="stage-items-list">
        ${st.items.map(item => `<div class="stage-sub-item"><span class="sub-item-arrow">→</span> ${item}</div>`).join("")}
      </div>
      <p class="stage-description">${st.description}</p>
    </div>
  `).join("");
}

/**
 * 5. Render Skills & Software
 */
function renderSkillsSection() {
  const container = document.getElementById("skills-grid");
  const skills = PORTFOLIO_DATA.skills;

  if (!container || !skills) return;

  container.innerHTML = skills.map(skill => `
    <div class="skill-card" data-reveal>
      <div class="skill-card-top">
        <span class="skill-plus-mark">+</span>
        <h3 class="skill-name">${skill.software}</h3>
      </div>
      <span class="skill-category-badge">${skill.category}</span>
      <p class="skill-detail">${skill.detail}</p>
    </div>
  `).join("");
}

/**
 * 6. Render Services Section
 */
function renderServicesSection() {
  const container = document.getElementById("about-services-grid");
  const services = PORTFOLIO_DATA.services;

  if (!container || !services) return;

  container.innerHTML = services.map((svc, i) => `
    <div class="service-block" data-reveal>
      <div class="service-num">[0${i + 1}]</div>
      <h3 class="service-title">${svc.title}</h3>
      <p class="service-desc">${svc.description}</p>
    </div>
  `).join("");
}

/**
 * 7. Attach Video Modal triggers
 */
function attachVideoModalTriggers() {
  // Delegate clicks on watch buttons and cards
  document.addEventListener("click", (e) => {
    // Featured video open
    const featuredBtn = e.target.closest("[data-open-featured-modal]");
    if (featuredBtn) {
      e.preventDefault();
      if (window.cinemaPlayer && PORTFOLIO_DATA.featuredVideo) {
        window.cinemaPlayer.open({
          number: PORTFOLIO_DATA.featuredVideo.badge,
          title: PORTFOLIO_DATA.featuredVideo.title,
          role: PORTFOLIO_DATA.featuredVideo.subtitle,
          software: "Master 4K Edit",
          videoType: PORTFOLIO_DATA.featuredVideo.videoType,
          videoSrc: PORTFOLIO_DATA.featuredVideo.videoSrc,
          posterImage: PORTFOLIO_DATA.featuredVideo.posterImage
        });
      }
      return;
    }

    // Project card watch button
    const projectBtn = e.target.closest("[data-open-modal]");
    if (projectBtn) {
      e.preventDefault();
      const projId = projectBtn.getAttribute("data-open-modal");
      const project = (PORTFOLIO_DATA.selectedWorks || []).find(p => p.id === projId);
      if (project && window.cinemaPlayer) {
        window.cinemaPlayer.open(project);
      }
      return;
    }

    // Mugen Case Study primary video trigger
    const caseBtn = e.target.closest("[data-open-case-modal]");
    if (caseBtn) {
      e.preventDefault();
      if (window.cinemaPlayer && PORTFOLIO_DATA.caseStudy) {
        window.cinemaPlayer.open({
          number: PORTFOLIO_DATA.caseStudy.badge,
          title: PORTFOLIO_DATA.caseStudy.title,
          role: "Full Narrative Master Cut",
          software: PORTFOLIO_DATA.caseStudy.category,
          videoType: PORTFOLIO_DATA.caseStudy.primaryVideo.videoType,
          videoSrc: PORTFOLIO_DATA.caseStudy.primaryVideo.videoSrc,
          posterImage: PORTFOLIO_DATA.caseStudy.primaryVideo.posterImage
        });
      }
      return;
    }
  });
}

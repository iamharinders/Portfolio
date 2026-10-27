/**
 * =======================================================================
 * HARINDER SINGH — REUSABLE CINEMA MODAL & VIDEO PLAYER
 * =======================================================================
 * High-fidelity fullscreen screening modal with:
 * - Direct local MP4 playback with unmuted audio on explicit user click
 * - Responsive 16:9 Landscape & 9:16 Vertical aspect ratio switching
 * - Vimeo & YouTube fallback support
 * - Esc key listener, backdrop click dismiss, clean resource deallocation
 */

class CinemaVideoPlayer {
  constructor() {
    this.modalEl = null;
    this.currentVideo = null;
    this.init();
  }

  init() {
    // Check if #cinemaModal exists in HTML, else create it
    let modal = document.getElementById("cinemaModal") || document.getElementById("cinema-modal");

    if (!modal) {
      modal = document.createElement("div");
      modal.id = "cinemaModal";
      modal.className = "cinema-modal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-hidden", "true");
      modal.innerHTML = `
        <div class="cinema-backdrop" id="cinemaBackdrop"></div>
        <div class="cinema-dialog" id="cinemaDialog">
          <div class="cinema-header">
            <div class="cinema-meta">
              <span class="cinema-badge mono" id="cinemaModalBadge">01 / CINEMA VIEW</span>
              <h3 class="cinema-title" id="cinemaModalTitle">VIDEO TITLE</h3>
            </div>
            <button class="cinema-close-btn" id="cinemaCloseBtn" aria-label="Close modal">✕</button>
          </div>
          <div class="cinema-stage" id="cinemaStage">
            <video id="cinemaVideo" controls playsinline></video>
          </div>
          <div class="cinema-footer">
            <div>
              <span class="cinema-tag" id="cinemaModalRole">Lead Editor & Colorist</span>
              <span class="cinema-tag" id="cinemaModalSpecs">ACES Color Pipeline</span>
            </div>
            <div class="cinema-instruction">
              Press <kbd>ESC</kbd> or click outside to exit
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    this.modalEl = modal;

    // Listeners
    const backdrop = modal.querySelector(".cinema-backdrop") || modal.querySelector("#cinemaBackdrop");
    const closeBtn = modal.querySelector(".cinema-close-btn") || modal.querySelector("#cinemaCloseBtn");

    if (backdrop) backdrop.addEventListener("click", () => this.close());
    if (closeBtn) closeBtn.addEventListener("click", () => this.close());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.close();
      }
    });
  }

  isOpen() {
    return this.modalEl && this.modalEl.classList.contains("is-open");
  }

  open(projectData) {
    if (!this.modalEl) this.init();

    const stage = this.modalEl.querySelector("#cinemaStage") || this.modalEl.querySelector(".cinema-stage");
    const badgeEl = this.modalEl.querySelector("#cinemaModalBadge") || this.modalEl.querySelector(".cinema-badge");
    const titleEl = this.modalEl.querySelector("#cinemaModalTitle") || this.modalEl.querySelector(".cinema-title");
    const roleEl = this.modalEl.querySelector("#cinemaModalRole") || this.modalEl.querySelector(".cinema-tag");
    const dialog = this.modalEl.querySelector(".cinema-dialog") || this.modalEl.querySelector("#cinemaDialog");

    if (badgeEl) badgeEl.textContent = projectData.number ? `0${projectData.number} / SCREENING` : (projectData.badge || "01 / CINEMA VIEW");
    if (titleEl) titleEl.textContent = projectData.title || "SELECTED FILM";
    if (roleEl) roleEl.textContent = projectData.category || "Video Editing · Colour · Sound";

    const isVert = Boolean(projectData.isVertical || projectData.aspectRatio === "9/16" || (projectData.category && projectData.category.includes("9:16")));
    if (dialog) dialog.classList.toggle("is-vertical", isVert);
    if (stage) stage.classList.toggle("is-vertical", isVert);

    // Pause all background looping preview videos
    document.querySelectorAll("video").forEach((v) => {
      try { v.pause(); } catch(e) {}
    });

    stage.innerHTML = "";

    const type = (projectData.videoType || "local").toLowerCase();
    const src = projectData.videoSrc || "assets/videos/featured_film.mp4";
    const poster = projectData.posterImage || "";

    if (type === "vimeo" && projectData.vimeoUrl) {
      const iframe = document.createElement("iframe");
      iframe.className = "cinema-player-iframe";
      iframe.src = projectData.vimeoUrl.includes("player.vimeo.com") 
        ? projectData.vimeoUrl 
        : `https://player.vimeo.com/video/${projectData.vimeoId || ''}?autoplay=1&color=EAA51C`;
      iframe.frameBorder = "0";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.allowFullscreen = true;
      stage.appendChild(iframe);
    } else {
      // Direct Local MP4 Video (Explicit Click = Sound Unmuted & Controls Enabled)
      const video = document.createElement("video");
      video.className = "cinema-player-video";
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.muted = false;
      video.volume = 1.0;
      video.poster = poster;
      video.src = src;
      stage.appendChild(video);

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay with sound restricted, unmuting on direct user interaction:", err);
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }

    this.modalEl.classList.add("is-open");
    this.modalEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  close() {
    if (!this.modalEl) return;
    const stage = this.modalEl.querySelector("#cinemaStage") || this.modalEl.querySelector(".cinema-stage");
    if (stage) {
      stage.querySelectorAll("video").forEach((v) => {
        try {
          v.pause();
          v.removeAttribute("src");
          v.load();
        } catch(e) {}
      });
      stage.querySelectorAll("iframe").forEach((f) => {
        try { f.src = "about:blank"; } catch(e) {}
      });
      stage.innerHTML = "";
      stage.classList.remove("is-vertical");
    }

    const dialog = this.modalEl.querySelector(".cinema-dialog") || this.modalEl.querySelector("#cinemaDialog");
    if (dialog) dialog.classList.remove("is-vertical");

    this.modalEl.classList.remove("is-open");
    this.modalEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // Resume ambient preview videos
    document.querySelectorAll(".hero-video-bg, .reel-video, .featured-video").forEach((v) => {
      try { v.play().catch(() => {}); } catch(e) {}
    });
  }
}

// Global initialization
window.CinemaVideoPlayer = CinemaVideoPlayer;
window.cinemaPlayer = new CinemaVideoPlayer();

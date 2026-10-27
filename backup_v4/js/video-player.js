/**
 * =======================================================================
 * REUSABLE VIDEO PLAYER & CINEMA MODAL COMPONENT
 * =======================================================================
 * Handles:
 * 1. Local MP4 videos (with autoplay, loop, muted, playsinline)
 * 2. Vimeo video embeds (responsive, background/chromeless or interactive)
 * 3. YouTube video embeds (responsive, background/muted or full)
 * 4. Fullscreen Cinema Modal for high-fidelity audio/video preview
 */

class CinemaVideoPlayer {
  constructor() {
    this.modalEl = null;
    this.currentPlayingVideo = null;
    this.initModal();
  }

  /**
   * Helper to parse YouTube ID from various URL formats
   */
  static extractYouTubeId(url) {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  }

  /**
   * Helper to parse Vimeo ID and optional privacy hash from various URL formats
   */
  static extractVimeoInfo(url) {
    if (!url) return { id: "", hash: "" };
    const trimmed = String(url).trim();
    // Check for id/hash format e.g. vimeo.com/123456789/abcdef123
    const matchHash = trimmed.match(/vimeo\.com\/(\d+)\/([a-zA-Z0-9]+)/);
    if (matchHash) {
      return { id: matchHash[1], hash: matchHash[2] };
    }
    // Check for standard vimeo id
    const matchId = trimmed.match(/(?:vimeo\.com\/(?:video\/)?|channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|^)(\d+)/);
    if (matchId) {
      return { id: matchId[1], hash: "" };
    }
    return { id: trimmed.replace(/\D/g, ""), hash: "" };
  }

  static extractVimeoId(url) {
    return CinemaVideoPlayer.extractVimeoInfo(url).id;
  }

  /**
   * Render HTML for an inline background / card video
   * @param {Object} opts - { videoType, videoSrc, posterImage, title, autoplay, muted, loop, isHero }
   */
  static renderInlineVideo(opts = {}) {
    const type = (opts.videoType || "local").toLowerCase();
    const src = opts.videoSrc || "";
    const poster = opts.posterImage || "";
    const title = opts.title || "Video";

    if (type === "local") {
      return `
        <div class="video-container local-video" data-type="local" data-src="${src}" data-poster="${poster}">
          <video 
            class="ambient-video-element"
            playsinline 
            muted 
            loop 
            autoplay 
            preload="metadata"
            poster="${poster}"
            aria-label="${title}">
            <source src="${src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="video-ambient-overlay"></div>
        </div>
      `;
    }

    if (type === "vimeo") {
      const vimeoId = CinemaVideoPlayer.extractVimeoId(src);
      return `
        <div class="video-container vimeo-video" data-type="vimeo" data-src="${vimeoId}" data-poster="${poster}">
          <div class="video-poster-fallback" style="background-image: url('${poster}')"></div>
          <iframe 
            src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&autopause=0&background=1&app_id=122963" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            title="${title}"
            loading="lazy">
          </iframe>
          <div class="video-ambient-overlay"></div>
        </div>
      `;
    }

    if (type === "youtube") {
      const ytId = CinemaVideoPlayer.extractYouTubeId(src);
      return `
        <div class="video-container youtube-video" data-type="youtube" data-src="${ytId}" data-poster="${poster}">
          <div class="video-poster-fallback" style="background-image: url('${poster}')"></div>
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=0&modestbranding=1&rel=0&playsinline=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            title="${title}"
            loading="lazy">
          </iframe>
          <div class="video-ambient-overlay"></div>
        </div>
      `;
    }

    // Default static poster
    return `
      <div class="video-container static-poster" data-poster="${poster}">
        <img src="${poster}" alt="${title}" class="ambient-video-element" loading="lazy" />
        <div class="video-ambient-overlay"></div>
      </div>
    `;
  }

  /**
   * Initializes the Fullscreen Cinema Modal HTML in body
   */
  initModal() {
    if (document.getElementById("cinema-modal")) {
      this.modalEl = document.getElementById("cinema-modal");
      return;
    }

    const modal = document.createElement("div");
    modal.id = "cinema-modal";
    modal.className = "cinema-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Video Cinema Player");
    modal.innerHTML = `
      <div class="cinema-backdrop" data-close-modal></div>
      <div class="cinema-dialog">
        <div class="cinema-header">
          <div class="cinema-meta">
            <span class="cinema-badge" id="modal-project-badge">[01] FILM CUT</span>
            <h3 class="cinema-title" id="modal-project-title">PROJECT TITLE</h3>
          </div>
          <button class="cinema-close-btn" id="modal-close-btn" aria-label="Close cinema player">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="cinema-stage" id="cinema-stage">
          <!-- Dynamic Video Content injected here -->
        </div>
        <div class="cinema-footer">
          <div class="cinema-footer-left">
            <span class="cinema-tag" id="modal-project-role">Lead Editor & Colorist</span>
            <span class="cinema-tag" id="modal-project-software">DaVinci Resolve Studio</span>
          </div>
          <div class="cinema-footer-right">
            <span class="cinema-instruction">Press <kbd>ESC</kbd> or click outside to exit</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    this.modalEl = modal;

    // Listeners
    modal.querySelector(".cinema-backdrop").addEventListener("click", () => this.close());
    modal.querySelector("#modal-close-btn").addEventListener("click", () => this.close());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.close();
      }
    });
  }

  isOpen() {
    return this.modalEl && this.modalEl.classList.contains("is-open");
  }

  /**
   * Opens the Cinema Modal with audio & full playback controls
   */
  open(projectData) {
    if (!this.modalEl) this.initModal();

    const stage = this.modalEl.querySelector("#cinema-stage");
    const badgeEl = this.modalEl.querySelector("#modal-project-badge");
    const titleEl = this.modalEl.querySelector("#modal-project-title");
    const roleEl = this.modalEl.querySelector("#modal-project-role");
    const softEl = this.modalEl.querySelector("#modal-project-software");

    badgeEl.textContent = projectData.number || projectData.badge || "[FEATURED]";
    titleEl.textContent = projectData.title || "SELECTED WORK";
    roleEl.textContent = projectData.role || "Video Editing / Colour";
    softEl.textContent = projectData.software || projectData.category || "Cinematic Master";

    const type = (projectData.videoType || "local").toLowerCase();
    const src = projectData.videoSrc || "";
    const poster = projectData.posterImage || "";

    const dialog = this.modalEl.querySelector(".cinema-dialog");
    const isVert = Boolean(projectData.isVertical || projectData.aspectRatio === "9/16" || (projectData.category && projectData.category.includes("Short-Form")));
    if (dialog) dialog.classList.toggle("is-vertical", isVert);
    if (stage) stage.classList.toggle("is-vertical", isVert);

    stage.innerHTML = "";

    const vimeoInfo = CinemaVideoPlayer.extractVimeoInfo(projectData.vimeoUrl || src);
    if (type === "vimeo" || vimeoInfo.id) {
      const iframe = document.createElement("iframe");
      iframe.className = "cinema-player-iframe";
      let vimeoSrc = `https://player.vimeo.com/video/${vimeoInfo.id}?autoplay=1&color=2146ff&title=0&byline=0&portrait=0`;
      if (vimeoInfo.hash) {
        vimeoSrc += `&h=${vimeoInfo.hash}`;
      }
      iframe.src = vimeoSrc;
      iframe.frameBorder = "0";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.allowFullscreen = true;
      stage.appendChild(iframe);
    } else if (type === "local") {
      const video = document.createElement("video");
      video.className = "cinema-player-video";
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.poster = poster;
      video.src = src || "assets/videos/showcase_preview.mp4";
      stage.appendChild(video);
      video.play().catch(e => console.log("Autoplay with sound prevented:", e));
    } else if (type === "youtube") {
      const ytId = CinemaVideoPlayer.extractYouTubeId(src);
      const iframe = document.createElement("iframe");
      iframe.className = "cinema-player-iframe";
      iframe.src = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&controls=1&modestbranding=1&rel=0`;
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      stage.appendChild(iframe);
    }

    this.modalEl.classList.add("is-open");
    document.body.classList.add("modal-open");
  }

  /**
   * Closes the Cinema Modal and stops video audio immediately
   */
  close() {
    if (!this.modalEl) return;
    const stage = this.modalEl.querySelector("#cinema-stage");
    const dialog = this.modalEl.querySelector(".cinema-dialog");
    // Pause any active HTML5 video
    const video = stage ? stage.querySelector("video") : null;
    if (video) {
      video.pause();
      video.src = "";
    }
    if (stage) {
      stage.innerHTML = "";
      stage.classList.remove("is-vertical");
    }
    if (dialog) dialog.classList.remove("is-vertical");
    this.modalEl.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }
}

// Global instance
window.CinemaVideoPlayer = CinemaVideoPlayer;
window.cinemaPlayer = new CinemaVideoPlayer();

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/assets/logos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function makeAdobeSvg(letter1, letter2, letterColor, glowColor, bgTop, bgBottom) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <radialGradient id="spec_${letter1}" cx="35%" cy="25%" r="75%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.22)"/>
      <stop offset="50%" stop-color="rgba(255,255,255,0.04)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <linearGradient id="bgGrad_${letter1}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgTop}"/>
      <stop offset="100%" stop-color="${bgBottom}"/>
    </linearGradient>
    <linearGradient id="borderGrad_${letter1}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.35)"/>
      <stop offset="40%" stop-color="rgba(255,255,255,0.08)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.8)"/>
    </linearGradient>
    <linearGradient id="textGrad_${letter1}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.25"/>
      <stop offset="25%" stop-color="${letterColor}"/>
      <stop offset="100%" stop-color="${glowColor}"/>
    </linearGradient>
    <filter id="shadow_${letter1}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#000000" flood-opacity="0.45"/>
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="${letterColor}" flood-opacity="0.3"/>
    </filter>
    <filter id="textShadow_${letter1}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="${letterColor}" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Base Squircle -->
  <rect x="24" y="24" width="464" height="464" rx="108" ry="108" fill="url(#bgGrad_${letter1})" filter="url(#shadow_${letter1})"/>
  <rect x="24" y="24" width="464" height="464" rx="108" ry="108" fill="url(#spec_${letter1})"/>
  <rect x="25" y="25" width="462" height="462" rx="107" ry="107" fill="none" stroke="url(#borderGrad_${letter1})" stroke-width="4"/>

  <!-- Top Glass Highlight -->
  <path d="M 46 170 C 60 70, 110 46, 210 44 C 340 44, 420 70, 466 150 C 420 100, 330 84, 210 88 C 110 92, 62 125, 46 170 Z" fill="rgba(255,255,255,0.14)"/>

  <!-- Typography -->
  <text x="256" y="332" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="224" text-anchor="middle" letter-spacing="-8" fill="url(#textGrad_${letter1})" filter="url(#textShadow_${letter1})">
    ${letter1}${letter2}
  </text>
</svg>`;
}

fs.writeFileSync(path.join(outDir, 'photoshop.svg'), makeAdobeSvg('P', 's', '#31A8FF', '#0070E0', '#152438', '#050D17'));
fs.writeFileSync(path.join(outDir, 'illustrator.svg'), makeAdobeSvg('A', 'i', '#FF9A00', '#D96500', '#2E1807', '#0F0702'));
fs.writeFileSync(path.join(outDir, 'lightroom.svg'), makeAdobeSvg('L', 'r', '#31A8FF', '#2680EB', '#0F2633', '#030E14'));

console.log('SVGs created successfully at', outDir);

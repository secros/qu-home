// quickutils.tools — Central Tool Registry
// Hosted at: https://quickutils.tools/tools.js
// To add a new tool: add one entry to the QUICKUTILS_TOOLS array below.
// All tool pages load this file and render their "More free tools" section automatically.

const QUICKUTILS_TOOLS = [
  {
    name: "Roman Numeral Converter",
    url: "https://roman.quickutils.tools",
    desc: "Convert any number to Roman numerals — and back",
    emoji: "🏛️"
  },
  {
    name: "Age in Days Calculator",
    url: "https://age.quickutils.tools",
    desc: "Find out exactly how many days, weeks, and hours old you are",
    emoji: "🎂"
  },
  {
    name: "Word & Character Counter",
    url: "https://words.quickutils.tools",
    desc: "Count words, characters, sentences, and reading time instantly",
    emoji: "📝"
  },
  {
    name: "Binary / Hex Converter",
    url: "https://binary.quickutils.tools",
    desc: "Convert between binary, hexadecimal, decimal, and octal",
    emoji: "⚙️"
  },
];

// Renders the "More free tools" grid, excluding the current tool by URL.
// Call this after the DOM is ready.
// Options:
//   targetId   — id of the container element to render into (default: "related-tools-grid")
//   currentUrl — URL of the current tool to exclude (default: window.location.origin)
//   max        — max number of tools to show (default: 4)
function renderRelatedTools(options = {}) {
  const targetId  = options.targetId   || 'related-tools-grid';
  const currentUrl = options.currentUrl || window.location.origin + '/';
  const max       = options.max        || 4;
  const container = document.getElementById(targetId);
  if (!container) return;

  const others = QUICKUTILS_TOOLS
    .filter(t => !currentUrl.startsWith(t.url))
    .slice(0, max);

  if (others.length === 0) {
    container.closest('.related-section').style.display = 'none';
    return;
  }

  container.innerHTML = others.map(t => `
    <a class="related-card" href="${t.url}">
      <div class="related-card-emoji">${t.emoji}</div>
      <div class="related-card-title">${t.name}</div>
      <div class="related-card-desc">${t.desc}</div>
    </a>
  `).join('');
}

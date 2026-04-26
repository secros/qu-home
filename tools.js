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
  {
    name: "Medical Calculators",
    url: "https://medcalc.quickutils.tools",
    desc: "MELD 3.0, Child-Pugh, VOCAL-Penn, Hepatitis B Serology",
    emoji: "⚕️"
  },
  {
    name: "Percentage Calculator",
    url: "https://percent.quickutils.tools",
    desc: "What is X% of Y? Percentage change and more",
    emoji: "💯"
  },
  {
    name: "Text Case Converter",
    url: "https://textcase.quickutils.tools",
    desc: "UPPER, lower, Title, camelCase, snake_case and more",
    emoji: "🔡"
  },
  {
    name: "BMI Calculator",
    url: "https://bmi.quickutils.tools",
    desc: "Calculate Body Mass Index in metric or imperial",
    emoji: "⚖️"
  },
  {
    name: "Tip Calculator",
    url: "https://tipcalc.quickutils.tools",
    desc: "Calculate tip and split the bill between friends",
    emoji: "🍽️"
  },
  {
    name: "Random Number Generator",
    url: "https://rng.quickutils.tools",
    desc: "Generate random numbers in any range, any quantity",
    emoji: "🎲"
  },
  {
    name: "Unix Timestamp Converter",
    url: "https://timestamp.quickutils.tools",
    desc: "Convert epoch timestamps to dates and back. Live current time.",
    emoji: "🕐"
  },
  {
    name: "Color Hex & RGB Converter",
    url: "https://colorhex.quickutils.tools",
    desc: "Convert between HEX, RGB, HSL and CMYK with color picker",
    emoji: "🎨"
  },
  {
    name: "Password Generator",
    url: "https://pwgen.quickutils.tools",
    desc: "Generate strong secure passwords. Runs in your browser only.",
    emoji: "🔐"
  },
  {
    name: "Readability Score",
    url: "https://readability.quickutils.tools",
    desc: "Check Flesch-Kincaid, Gunning Fog and SMOG reading levels",
    emoji: "📖"
  },
  {
    name: "Aspect Ratio Calculator",
    url: "https://aspratio.quickutils.tools",
    desc: "Calculate aspect ratios for screens, photos, and video",
    emoji: "📐"
  },
  {
    name: "Unit Converter",
    url: "https://unitcon.quickutils.tools",
    desc: "Convert length, weight, temperature, volume, area & speed",
    emoji: "⚖️"
  },
  {
    name: "Loan Calculator",
    url: "https://loan.quickutils.tools",
    desc: "Monthly payment, total interest & amortization schedule",
    emoji: "🏦"
  },
  {
    name: "Grade Calculator",
    url: "https://gradecalc.quickutils.tools",
    desc: "Weighted average, GPA, and final exam grade needed",
    emoji: "🎓"
  },
  {
    name: "Countdown Timer",
    url: "https://countdown.quickutils.tools",
    desc: "Count down to any event, birthday, or deadline",
    emoji: "⏳"
  },
  {
    name: "Sleep Calculator",
    url: "https://sleep.quickutils.tools",
    desc: "Best bedtime and wake time based on 90-minute sleep cycles",
    emoji: "🌙"
  },
  {
    name: "Calorie Calculator",
    url: "https://calorie.quickutils.tools",
    desc: "Daily calorie needs, BMR and TDEE by age, weight and activity",
    emoji: "🔥"
  },
  {
    name: "Currency Converter",
    url: "https://currency.quickutils.tools",
    desc: "Live exchange rates for 160+ currencies, updated daily",
    emoji: "💱"
  },
  {
    name: "Date Calculator",
    url: "https://date.quickutils.tools",
    desc: "Days between dates, add/subtract days, day of the week",
    emoji: "📅"
  },
  {
    name: "Compound Interest Calculator",
    url: "https://compound.quickutils.tools",
    desc: "See how investments grow over time with compound interest",
    emoji: "📈"
  },
];

// Renders the "More free tools" grid, excluding the current tool by URL.
function renderRelatedTools(options = {}) {
  const targetId   = options.targetId   || 'related-tools-grid';
  const currentUrl = options.currentUrl || window.location.origin + '/';
  const max        = options.max        || 4;
  const container  = document.getElementById(targetId);
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

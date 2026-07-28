import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const docs = join(root, 'docs');

const html = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const styleFrom = (name) => {
  const source = readFileSync(join(docs, 'reports', name), 'utf8');
  const match = source.match(/<style>([\s\S]*?)<\/style>/);
  if (!match) throw new Error(`No style block in ${name}`);
  return match[1];
};

const styles = {
  cover: styleFrom('9136b520.html'),
  steps: styleFrom('9136b520_steps.html'),
  journey: styleFrom('9136b520_journey.html'),
};

const emotions = {
  Interest: { fill: '#FFD5C6', pill: '#FFD5C633', text: '#111827' },
  Anticipation: { fill: '#FFAB8D', pill: '#FFAB8D33', text: '#111827' },
  Trust: { fill: '#33E19B', pill: '#33E19B33', text: '#111827' },
  Concern: { fill: '#f59e0b', pill: '#f59e0b33', text: '#111827' },
};

const products = [
  {
    slug: 'shipyardhq',
    product: 'Shipyard HQ',
    url: 'shipyardhq.dev',
    title: 'First-time builder',
    mbti: 'ESTJ',
    description: 'Jordan is a mainstream first-time builder evaluating whether Shipyard HQ can get a newly onboarded member to a first launch and a dashboard they can trust.',
    personas: [
      {
        name: 'Jordan Alvarez',
        role: 'First-time builder',
        segment: 'Mainstream',
        status: 'Tested',
        description: 'Finishes onboarding and checks whether the first dashboard makes the next launch action clear.',
      },
      {
        name: 'Amara Okafor',
        role: 'Repeat indie founder',
        segment: 'Adjacent',
        status: 'Planned',
        description: 'Has launched before and needs a repeatable path from product submission to ranking, proof, and traction analytics.',
      },
      {
        name: 'Kenji Sato',
        role: 'Developer-tool maker',
        segment: 'High-potential',
        status: 'Planned',
        description: 'Launches an API or developer tool and judges whether focused discovery produces attributable builder interest.',
      },
    ],
    details: [
      ['Segment', 'Mainstream first-time builder'],
      ['Context', 'A new member reaches the product dashboard after onboarding.'],
      ['Workflow', 'Choose a goal, complete onboarding, and assess the first dashboard view.'],
      ['Success Criteria', 'Clear next action and a trustworthy first-launch path.'],
    ],
    confidence: '0.96',
    stepCount: '6',
    insightCount: '3',
    frictions: '1',
    replay: 'replays/ab8be4a0_persona_replay.html',
    decision: 'Try',
    decisionTitle: 'The setup is ready; the next activation moment is not yet explicit.',
    decisionPoints: [
      'Jordan completed the onboarding sequence without a blocking issue and reached the product dashboard.',
      'The dashboard presented zero-state metrics, so Jordan could not yet tell what first launch should look like or what to do next.',
      'The direct decision was try: the foundation is usable, but activation needs a visible next step.',
    ],
    steps: [
      ['Onboarding questions', 'onboarding-questions.png', 'Interest', '0.85', 'Jordan can state an initial goal and move through the onboarding questions without a blocking detour.'],
      ['Finish setup', 'journey-conclusion.png', 'Trust', '0.90', 'The setup sequence completes and the product moves Jordan into the main experience.'],
      ['Dashboard arrival', 'dashboard-landed.png', 'Concern', '0.85', 'I am looking at all zeros. I need a first launch or a clear next action before these numbers mean anything.'],
    ],
    journey: [
      ['Onboarding', 'Interest', '0.85', 'The first-use questions make the intended path legible.'],
      ['Choose a goal', 'Anticipation', '0.82', 'Jordan can make the initial choice and continue.'],
      ['Finish setup', 'Trust', '0.90', 'The product accepts the setup and moves forward.'],
      ['Dashboard', 'Concern', '0.85', 'Zero-state metrics do not explain the first launch.'],
      ['Decision', 'Trust', '0.78', 'Decision: try, with activation clarity as the next trust test.'],
    ],
    insights: [
      ['1. Put the first launch directly on the dashboard.', 'When metrics are all zero, the dashboard should name the single next action that will create the first meaningful result.'],
      ['2. Explain the zero state in product terms.', 'A brief explanation of what each metric will represent after first use makes the empty dashboard less ambiguous.'],
      ['3. Preserve the focused onboarding path.', 'The captured setup path was concise and did not introduce a visible blocking friction.'],
    ],
  },
  {
    slug: 'makeshots',
    product: 'Makeshots',
    url: 'makeshots.app',
    title: 'Product builder',
    mbti: 'ESTJ',
    description: 'Jordan is a pragmatic product builder checking whether one screenshot can become a usable product visual without losing work at the generation boundary.',
    personas: [
      {
        name: 'Jordan Alvarez',
        role: 'Product builder',
        segment: 'Mainstream',
        status: 'Tested',
        description: 'Turns one raw app screen into a configured store screenshot set and evaluates the first-generation boundary.',
      },
      {
        name: 'Sofia Marin',
        role: 'Solo app founder',
        segment: 'Adjacent',
        status: 'Planned',
        description: 'Needs designer-quality App Store and Play Store screenshots without hiring a designer or opening a full design tool.',
      },
      {
        name: 'Lukas Weber',
        role: 'Localization growth lead',
        segment: 'High-potential',
        status: 'Planned',
        description: 'Ships multiple apps and markets, checking size coverage, language variants, previews, and export confidence at scale.',
      },
    ],
    details: [
      ['Segment', 'Mainstream product builder'],
      ['Context', 'A first-time evaluator prepares one product screenshot for a generated visual.'],
      ['Workflow', 'Upload a screenshot, set quantity, style and size, then reach the review and generation gate.'],
      ['Success Criteria', 'Understand the generated output path and retain configuration at the purchase boundary.'],
    ],
    confidence: '0.88',
    stepCount: '13',
    insightCount: '3',
    frictions: '2',
    replay: 'replays/8db0e1d4_persona_replay.html',
    decision: 'Try',
    decisionTitle: 'The creation flow is legible, but the credit boundary arrives after meaningful setup work.',
    decisionPoints: [
      'Jordan successfully selected the app, uploaded a screenshot, and configured quantity, style, and size.',
      'The free test account had zero credits at generation, turning the review state into the decision boundary.',
      'The direct decision was try; the core flow is promising, but the paywall and upload-state feedback need more trust.'],
    steps: [
      ['Upload screenshot', 'upload-works.png', 'Interest', '0.86', 'The screenshot upload accepts the source image and keeps the creation flow moving.'],
      ['Configure output', 'journey-conclusion.png', 'Anticipation', '0.82', 'Quantity, style, and size are configured before the review state.'],
      ['Review credit boundary', 'credit-wall.png', 'Concern', '0.85', 'The free test account has zero credits, so the expected next action is now a purchase decision.'],
    ],
    journey: [
      ['Choose app', 'Interest', '0.78', 'The entry point for the intended tool is understandable.'],
      ['Upload', 'Trust', '0.86', 'The screenshot is accepted and the flow advances.'],
      ['Configure', 'Anticipation', '0.82', 'Jordan can set the key output variables.'],
      ['Review / credits', 'Concern', '0.85', 'A zero-credit account reaches the generation boundary.'],
      ['Decision', 'Trust', '0.74', 'Decision: try, subject to a clearer paid conversion moment.'],
    ],
    insights: [
      ['1. Show the credit requirement before configuration work.', 'Expose the remaining credits and the generation cost before users invest in quantity, style, and size choices.'],
      ['2. Make upload required-state explicit and durable.', 'An earlier pass showed that skipping upload could silently lose configuration. Preserve inputs and tell users exactly what is required.'],
      ['3. Keep the configuration flow focused.', 'The core upload-to-review sequence was understandable and gives a strong base for conversion improvements.'],
    ],
  },
  {
    slug: 'reviewpulse',
    product: 'ReviewPulse',
    url: 'reviewpulse.ca',
    title: 'Small-business owner',
    mbti: 'ESTJ',
    description: 'Jordan is a small-business owner evaluating whether a manual customer entry can be completed quickly and understood with confidence.',
    personas: [
      {
        name: 'Jordan Alvarez',
        role: 'Small-business owner',
        segment: 'Mainstream',
        status: 'Tested',
        description: 'Adds the first customer manually and checks whether the completion state is clear enough to continue.',
      },
      {
        name: 'Aisha Thompson',
        role: 'Service operations manager',
        segment: 'Adjacent',
        status: 'Planned',
        description: 'Moves completed-job customers into a reliable SMS and email follow-up workflow without adding manual admin work.',
      },
      {
        name: 'Victor Chen',
        role: 'Multi-location reputation lead',
        segment: 'High-potential',
        status: 'Planned',
        description: 'Needs location-level automation, analytics, team access, and CRM or API control across a growing operation.',
      },
    ],
    details: [
      ['Segment', 'Mainstream small-business owner'],
      ['Context', 'A first-time evaluator adds one customer through the manual customer workflow.'],
      ['Workflow', 'Open Add customer, provide the required contact field, submit, and assess the result.'],
      ['Success Criteria', 'A clear, low-effort customer-add flow with an unambiguous success state.'],
    ],
    confidence: '0.94',
    stepCount: '8',
    insightCount: '3',
    frictions: '2',
    replay: null,
    decision: 'Adopt',
    decisionTitle: 'The required path is simple enough to adopt; confirmation and field hierarchy need refinement.',
    decisionPoints: [
      'The Add customer route is easy to find and the required path accepts a name plus email or phone.',
      'After submit, the run did not expose a clear success toast, leaving the completion signal weaker than it should be.',
      'The direct decision was adopt. The submitted evidence is privacy-masked, and the harness substituted its test-account email; this report does not assert contact accuracy.'],
    steps: [
      ['Open Add customer', 'add-customer-form.png', 'Interest', '0.86', 'The customer form makes its minimum required fields easy to identify.'],
      ['Submit customer', 'customer-added.png', 'Trust', '0.88', 'The workflow completes, but the visible confirmation signal is not prominent.'],
      ['Inspect completion', 'journey-conclusion.png', 'Concern', '0.80', 'I need a clearer success confirmation and less optional-field noise around the required action.'],
    ],
    journey: [
      ['Customers', 'Interest', '0.80', 'The customer area reveals an understandable manual-entry route.'],
      ['Add customer', 'Trust', '0.86', 'The essential fields are straightforward.'],
      ['Complete required fields', 'Trust', '0.88', 'Name plus one contact route is enough to continue.'],
      ['Submit', 'Concern', '0.80', 'The product needs a more explicit success state after submit.'],
      ['Decision', 'Trust', '0.88', 'Decision: adopt, with completion feedback as the clear refinement.'],
    ],
    insights: [
      ['1. Add a durable success confirmation after submit.', 'A toast or inline confirmation should state that the customer was added and identify the next available action.'],
      ['2. Demote optional fields behind the required path.', 'Service type, date, source, and notes should not compete visually with the minimal add-customer task.'],
      ['3. Keep the required path short.', 'The name-plus-email-or-phone requirement is a strong, low-effort entry point for small-business owners.'],
    ],
  },
  {
    slug: 'naxely',
    product: 'Naxely',
    url: 'naxely.com',
    personaName: 'Sam Rivera',
    title: 'Operations lead',
    mbti: 'ISTJ',
    description: 'Sam is a methodical operations lead evaluating whether one customer spreadsheet can become a saved, reviewable report that is ready to share with the team.',
    personas: [
      {
        name: 'Sam Rivera',
        role: 'Operations lead',
        segment: 'Mainstream',
        status: 'Tested',
        description: 'Uploads one customer spreadsheet, corrects its column mapping, generates a report, and checks whether the saved output is trustworthy enough to share.',
      },
      {
        name: 'Maya Chen',
        role: 'Customer success manager',
        segment: 'Adjacent',
        status: 'Planned',
        description: 'Needs a repeatable weekly path from customer exports to clear account-health summaries for a cross-functional team.',
      },
      {
        name: 'Luis Ortega',
        role: 'Revenue operations analyst',
        segment: 'High-potential',
        status: 'Planned',
        description: 'Works with larger, messier exports and needs dependable field semantics, validation, and output verification before distribution.',
      },
    ],
    details: [
      ['Segment', 'Mainstream operations lead'],
      ['Context', 'A first-time evaluator uses a Menso-owned test account and a synthetic 10-row customer spreadsheet.'],
      ['Workflow', 'Upload the spreadsheet, map columns, configure one report, generate it, and inspect the saved result.'],
      ['Success Criteria', 'A report entry saved as Done with 10 rows and an available PDF download action.'],
    ],
    confidence: '0.93',
    stepCount: '17',
    insightCount: '3',
    frictions: '3',
    replay: 'replays/0d79a59a_persona_replay.html',
    decision: 'Completed',
    decisionTitle: 'The workflow completed; the evidence loop did not.',
    decisionPoints: [
      'Sam completed the upload, column mapping, configuration, generation, download, and dashboard-return sequence in one workflow.',
      'The independent verifier confirmed completion at 0.93 confidence; the dashboard showed Customer Overview Report, 10 rows, and Done.',
      'No Try, Adopt, or Reject decision was collected. The completed preview appeared blank, and the downloaded PDF contents were not independently inspected.',
    ],
    steps: [
      ['Review column mapping', 'column-mapping.png', 'Concern', '0.75', 'Monthly_spend contains numeric values, but Naxely classified it as a Date. I need to correct that before I can trust the report.'],
      ['Inspect completed report', 'blank-preview.png', 'Concern', '0.60', 'The report says completed and shows 10 rows, but the preview area is blank. I need visible output before I can trust the file.'],
      ['Confirm saved result', 'dashboard-done.png', 'Trust', '0.78', 'The dashboard now lists Customer Overview Report with 10 rows and Done. That confirms the workflow produced a saved artifact.'],
    ],
    journey: [
      ['Start report', 'Interest', '0.60', 'The empty dashboard offers a clear Create Report action.'],
      ['Upload data', 'Anticipation', '0.70', 'The CSV upload begins the exact workflow Sam came to evaluate.'],
      ['Map columns', 'Concern', '0.75', 'A numeric spend field is classified as a Date and needs correction.'],
      ['Configure report', 'Concern', '0.60', 'Next remains disabled without identifying the unmarked required date range.'],
      ['Generate report', 'Anticipation', '0.60', 'The product shows generation stages inside its stated 30–90 second window.'],
      ['Inspect output', 'Concern', '0.60', 'The completed state and row count are visible, but the preview itself appears blank.'],
      ['Dashboard evidence', 'Trust', '0.78', 'The saved report appears as Done with 10 rows.'],
    ],
    insights: [
      ['1. Validate semantic column types before mapping is accepted.', 'Naxely classified monthly_spend as a Date despite numeric sample values. Warn on semantic mismatches and explain the suggested correction before users generate a misleading report.'],
      ['2. Explain exactly why Next is disabled.', 'Mark the date range as required and attach an inline blocker message to the disabled action. Sam had to infer the requirement through trial and error.'],
      ['3. Make completed output reviewable before download.', 'Render a real preview, or show a durable preview-loading or failure state. A Completed badge and row count do not replace visible evidence that the report contains usable content.'],
    ],
    evidenceLimit: 'One synthetic run was observed on July 13, 2026, using a Menso-owned test account and synthetic sample data. The report preview appeared blank, the downloaded PDF contents were not independently inspected, and no explicit adoption decision was collected.',
  },
];

const nav = (product, active) => {
  const replay = product.replay
    ? `<a href="${html(product.replay)}">Replay</a>`
    : `<a href="${html(`${product.slug}_journey.html#evidence-limit`)}" title="No clean replay was captured for this run">Replay unavailable</a>`;
  return `<div class="header">
    <div class="logo" aria-label="Menso"><div class="logo-icon"><img src="menso-logo.png" alt="Menso"></div><span class="logo-text">Menso</span></div>
    <nav class="page-nav"><a href="${product.slug}_personas.html">All Personas</a><a href="${product.slug}.html"${active === 'cover' ? ' class="active"' : ''}>Cover</a><a href="${product.slug}_steps.html"${active === 'steps' ? ' class="active"' : ''}>Step Details</a><a href="${product.slug}_journey.html"${active === 'journey' ? ' class="active"' : ''}>Journey &amp; Conclusion</a>${replay}</nav>
    <span class="header-label">Synthetic Usability Report</span>
  </div>`;
};

const doc = (title, style, body) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${html(title)}</title><style>${style}</style></head><body>${body}</body></html>\n`;

const personaNameOf = (product) => product.personaName || 'Jordan Alvarez';

const pill = (emotion) => {
  const color = emotions[emotion];
  return `<span class="emotion-pill" style="background:${color.pill};color:${color.text};border:1px solid ${color.fill}">${html(emotion)}</span>`;
};

const personaIndexStyle = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Raleway:wght@600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#fafafa;color:#1e1e1e;line-height:1.6;min-height:100vh}.page{max-width:1080px;margin:0 auto;padding:42px 24px 68px}.brand{display:flex;align-items:center;gap:9px;margin-bottom:30px}.brand img{width:36px;height:36px;object-fit:contain}.brand span{font-family:'Raleway',sans-serif;font-size:20px;font-weight:700}.back{display:inline-flex;margin-bottom:18px;color:#2145f3;text-decoration:none;font-size:13px;font-weight:600}.hero{background:#fff;border:1px solid #eceef5;border-radius:24px;padding:38px;margin-bottom:20px}.eyebrow{display:inline-flex;padding:6px 12px;border-radius:999px;background:#eef2ff;color:#2145f3;font-size:12px;font-weight:700;margin-bottom:14px}h1{font-family:'Raleway',sans-serif;font-size:42px;line-height:1.1;letter-spacing:-.03em;margin-bottom:12px}.intro{max-width:760px;color:#666;font-size:15px}.evidence-note{margin-top:18px;padding:13px 15px;border-radius:12px;background:#fff8e8;border:1px solid #f5d78d;color:#72500a;font-size:13px}.persona-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.persona-card{display:flex;flex-direction:column;min-height:276px;padding:22px;background:#fff;border:1px solid #e7eaf2;border-radius:18px;color:inherit;text-decoration:none}.persona-card.tested{border-color:#b8c5ff;box-shadow:0 10px 30px rgba(33,69,243,.08)}.persona-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:20px}.segment{font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#727987}.status{padding:5px 9px;border-radius:999px;font-size:11px;font-weight:700}.status.tested{background:#eafbf3;color:#137a49}.status.planned{background:#f2f3f6;color:#68707d}.persona-name{font-family:'Raleway',sans-serif;font-size:24px;font-weight:700;margin-bottom:3px}.persona-role{color:#2145f3;font-size:14px;font-weight:600;margin-bottom:14px}.persona-desc{color:#606774;font-size:13px;line-height:1.65}.open-report{margin-top:auto;padding-top:20px;color:#2145f3;font-size:13px;font-weight:700}.planned-note{margin-top:auto;padding-top:20px;color:#8a909b;font-size:12px}.footer{text-align:center;color:#999;font-size:12px;margin-top:28px}@media(max-width:820px){h1{font-size:34px}.hero{padding:28px}.persona-grid{grid-template-columns:1fr}.persona-card{min-height:220px}}
`;

const personaIndex = (product) => doc(`${product.product} | Product Personas`, personaIndexStyle, `<main class="page">
  <div class="brand"><img src="menso-logo.png" alt="Menso"><span>Menso</span></div>
  <a class="back" href="${product.slug}.html">&larr; Open completed report</a>
  <section class="hero"><div class="eyebrow">${html(product.product)} synthetic usability study</div><h1>Three personas scoped for ${html(product.product)}.</h1><p class="intro">This is the product-specific persona view. It does not link to Menso's global report directory.</p><div class="evidence-note"><strong>Evidence status:</strong> this founder delivery currently contains one completed persona run. The two adjacent personas are planned coverage and are not presented as tested findings.</div></section>
  <section class="persona-grid" aria-label="${html(product.product)} personas">${product.personas.map((persona) => {
    const tested = persona.status === 'Tested';
    const body = `<div class="persona-top"><span class="segment">${html(persona.segment)}</span><span class="status ${tested ? 'tested' : 'planned'}">${html(persona.status)}</span></div><div class="persona-name">${html(persona.name)}</div><div class="persona-role">${html(persona.role)}</div><p class="persona-desc">${html(persona.description)}</p>${tested ? '<div class="open-report">Open report &rarr;</div>' : '<div class="planned-note">No run or result is claimed for this persona yet.</div>'}`;
    return tested ? `<a class="persona-card tested" href="${product.slug}.html">${body}</a>` : `<article class="persona-card">${body}</article>`;
  }).join('')}</section>
  <div class="footer">Generated by Menso &middot; AI Synthetic User Testing</div>
</main>`);

const cover = (product) => doc(`${product.product} - ${personaNameOf(product)} | Usability Test Report`, styles.cover, `${nav(product, 'cover')}
  <div class="cover-content">
    <div class="url-pill">${html(product.url)}</div>
    <div class="persona-hero"><div class="persona-name-block"><div class="persona-name">${html(personaNameOf(product))}</div><div class="persona-title-row"><span class="persona-title">${html(product.title)}</span><span class="mbti-badge">${html(product.mbti)}</span></div></div><div class="persona-desc">${html(product.description)}</div></div>
    <div class="persona-details">${product.details.map(([label, value]) => `<div class="detail-card"><div class="detail-label">${html(label)}</div><div class="detail-value">${html(value)}</div></div>`).join('')}</div>
    <div class="stats-row"><div class="stat-card green"><div class="stat-number">${product.confidence}</div><div class="stat-label">Final Confidence</div></div><div class="stat-card dark"><div class="stat-number">${product.stepCount}</div><div class="stat-label">Steps Taken</div></div><div class="stat-card yellow"><div class="stat-number">${product.insightCount}</div><div class="stat-label">Product Insights</div></div><div class="stat-card red"><div class="stat-number">${product.frictions}</div><div class="stat-label">Friction Points</div></div></div>
  </div><div class="report-footer">Generated by Menso &middot; AI Synthetic User Testing</div>`);

const steps = (product) => doc(`${product.product} - ${personaNameOf(product)} | Step Details`, styles.steps, `${nav(product, 'steps')}
  <div class="content"><div class="steps-grid">${product.steps.map(([title, image, emotion, confidence, note], index) => `<div class="step-card"><div class="step-head"><span class="step-num">${String(index + 1).padStart(2, '0')}</span><span class="step-title">${html(title)}</span></div><div class="divider"></div><div class="step-imgs-grid"><img class="step-img single" src="assets/founder-reports/${product.slug}/${html(image)}" alt="${html(`${product.product}: ${title}`)}"></div><div class="divider"></div><div class="step-meta">${pill(emotion)}<span class="conf-label">Confidence</span><span class="conf-value">${html(confidence)}</span></div><p class="think-aloud"><strong>Think aloud:</strong> ${html(note)}</p></div>`).join('')}</div></div><div class="report-footer">Generated by Menso &middot; AI Synthetic User Testing</div>`);

const chart = (product) => {
  const positions = product.journey.map((entry, index) => {
    const x = product.journey.length === 1 ? 402 : 64 + (676 * index) / (product.journey.length - 1);
    const score = Number(entry[2]);
    const y = 220 - (score * 176);
    return { x: x.toFixed(1), y: y.toFixed(1), entry };
  });
  const line = positions.map(({ x, y }) => `${x},${y}`).join(' ');
  const dots = positions.map(({ x, y, entry: [moment, emotion, confidence] }) => `<circle cx="${x}" cy="${y}" r="8" fill="${emotions[emotion].fill}" stroke="#FFFFFF" stroke-width="2" opacity="0.92"><title>${html(`${moment} (${confidence})`)}</title></circle>`).join('');
  const labels = positions.map(({ x }, index) => `<text x="${x}" y="255" text-anchor="middle" font-size="10" fill="#B3B3B3" font-family="Inter">${String(index + 1).padStart(2, '0')}</text>`).join('');
  return `<div><p class="chart-subtitle">Bubble size = emotion intensity. Color = emotion type.</p><div class="chart-legend"><div class="chart-legend-item"><span class="chart-legend-dot" style="background:#FFD5C6"></span>Interest</div><div class="chart-legend-item"><span class="chart-legend-dot" style="background:#FFAB8D"></span>Anticipation</div><div class="chart-legend-item"><span class="chart-legend-dot" style="background:#33E19B"></span>Trust</div><div class="chart-legend-item"><span class="chart-legend-dot" style="background:#f59e0b"></span>Concern</div></div><div class="chart-container"><svg viewBox="0 0 780 275" xmlns="http://www.w3.org/2000/svg"><line x1="64" y1="185" x2="740" y2="185" stroke="#F3F3F3" stroke-width="1"/><text x="54" y="189" text-anchor="end" font-size="10" fill="#B3B3B3" font-family="Inter">0.2</text><line x1="64" y1="150" x2="740" y2="150" stroke="#F3F3F3" stroke-width="1"/><text x="54" y="154" text-anchor="end" font-size="10" fill="#B3B3B3" font-family="Inter">0.4</text><line x1="64" y1="114" x2="740" y2="114" stroke="#F3F3F3" stroke-width="1"/><text x="54" y="118" text-anchor="end" font-size="10" fill="#B3B3B3" font-family="Inter">0.6</text><line x1="64" y1="79" x2="740" y2="79" stroke="#F3F3F3" stroke-width="1"/><text x="54" y="83" text-anchor="end" font-size="10" fill="#B3B3B3" font-family="Inter">0.8</text><line x1="64" y1="44" x2="740" y2="44" stroke="#F3F3F3" stroke-width="1"/><text x="54" y="48" text-anchor="end" font-size="10" fill="#B3B3B3" font-family="Inter">1.0</text><line x1="64" y1="34" x2="64" y2="220" stroke="#E8E8E8" stroke-width="1"/><polyline points="${line}" fill="none" stroke="#9CA3AF" stroke-width="1.6" stroke-dasharray="5,4"/>${dots}${labels}</svg></div></div>`;
};

const journey = (product) => doc(`${product.product} - ${personaNameOf(product)} | Journey & Conclusion`, styles.journey, `${nav(product, 'journey')}
  <div class="content"><div class="two-col"><div class="left-col"><h2>Emotion Journey</h2>${chart(product)}<table class="journey-table"><thead><tr><th>Step</th><th>Moment</th><th>Emotion</th><th>Conf.</th><th>Think Aloud / Trigger</th></tr></thead><tbody>${product.journey.map(([moment, emotion, confidence, note], index) => `<tr><td><strong>${String(index + 1).padStart(2, '0')}</strong></td><td>${html(moment)}</td><td>${pill(emotion)}</td><td>${html(confidence)}</td><td style="color:#757575">${html(note)}</td></tr>`).join('')}</tbody></table></div><div class="right-col"><h2>Final Verdict</h2><div class="verdict-card"><div class="verdict-badge">${html(product.decision)}</div><div class="verdict-title">${html(product.decisionTitle)}</div><div class="verdict-points">${product.decisionPoints.map((point) => `&bull; ${html(point)}`).join('<br>')}</div><div class="verdict-conf-label">Final Confidence</div><div class="verdict-conf-number">${html(product.confidence)}</div></div><h2>UX/UI Frictions</h2>${product.insights.map(([title, text]) => `<div class="insight-card"><div class="insight-title">${html(title)}</div><div class="insight-text">${html(text)}</div></div>`).join('')}<div class="insight-card" id="evidence-limit"><div class="insight-title">Evidence limitation</div><div class="insight-text">${product.evidenceLimit ? `${html(product.evidenceLimit)}${product.replay ? ` <a href="${html(product.replay)}">Open interactive replay</a>` : ''}` : product.replay ? `<a href="${html(product.replay)}">Open interactive replay</a>` : 'No clean replay was captured for this run. Screenshots are privacy-masked, and the harness substituted its test-account email; contact accuracy is not asserted.'}</div></div></div></div></div><div class="report-footer">Generated by Menso &middot; AI Synthetic User Testing</div>`);

for (const product of products) {
  if (product.personas.length !== 3) throw new Error(`${product.slug} must define exactly three product-scoped personas`);
  writeFileSync(join(docs, `${product.slug}_personas.html`), personaIndex(product));
  writeFileSync(join(docs, `${product.slug}.html`), cover(product));
  writeFileSync(join(docs, `${product.slug}_steps.html`), steps(product));
  writeFileSync(join(docs, `${product.slug}_journey.html`), journey(product));
}

console.log(`Rebuilt ${products.length} product persona indexes and reports with the established templates.`);

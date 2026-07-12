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
];

const nav = (product, active) => {
  const replay = product.replay
    ? `<a href="${html(product.replay)}">Replay</a>`
    : `<a href="${html(`${product.slug}_journey.html#evidence-limit`)}" title="No clean replay was captured for this run">Replay unavailable</a>`;
  return `<div class="header">
    <div class="logo" aria-label="Menso"><div class="logo-icon"><img src="menso-logo.png" alt="Menso"></div><span class="logo-text">Menso</span></div>
    <nav class="page-nav"><a href="index.html">All Personas</a><a href="${product.slug}.html"${active === 'cover' ? ' class="active"' : ''}>Cover</a><a href="${product.slug}_steps.html"${active === 'steps' ? ' class="active"' : ''}>Step Details</a><a href="${product.slug}_journey.html"${active === 'journey' ? ' class="active"' : ''}>Journey &amp; Conclusion</a>${replay}</nav>
    <span class="header-label">Synthetic Usability Report</span>
  </div>`;
};

const doc = (title, style, body) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${html(title)}</title><style>${style}</style></head><body>${body}</body></html>\n`;

const pill = (emotion) => {
  const color = emotions[emotion];
  return `<span class="emotion-pill" style="background:${color.pill};color:${color.text};border:1px solid ${color.fill}">${html(emotion)}</span>`;
};

const cover = (product) => doc(`${product.product} - Jordan Alvarez | Usability Test Report`, styles.cover, `${nav(product, 'cover')}
  <div class="cover-content">
    <div class="url-pill">${html(product.url)}</div>
    <div class="persona-hero"><div class="persona-name-block"><div class="persona-name">Jordan Alvarez</div><div class="persona-title-row"><span class="persona-title">${html(product.title)}</span><span class="mbti-badge">${html(product.mbti)}</span></div></div><div class="persona-desc">${html(product.description)}</div></div>
    <div class="persona-details">${product.details.map(([label, value]) => `<div class="detail-card"><div class="detail-label">${html(label)}</div><div class="detail-value">${html(value)}</div></div>`).join('')}</div>
    <div class="stats-row"><div class="stat-card green"><div class="stat-number">${product.confidence}</div><div class="stat-label">Final Confidence</div></div><div class="stat-card dark"><div class="stat-number">${product.stepCount}</div><div class="stat-label">Steps Taken</div></div><div class="stat-card yellow"><div class="stat-number">${product.insightCount}</div><div class="stat-label">Product Insights</div></div><div class="stat-card red"><div class="stat-number">${product.frictions}</div><div class="stat-label">Friction Points</div></div></div>
  </div><div class="report-footer">Generated by Menso &middot; AI Synthetic User Testing</div>`);

const steps = (product) => doc(`${product.product} - Jordan Alvarez | Step Details`, styles.steps, `${nav(product, 'steps')}
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

const journey = (product) => doc(`${product.product} - Jordan Alvarez | Journey & Conclusion`, styles.journey, `${nav(product, 'journey')}
  <div class="content"><div class="two-col"><div class="left-col"><h2>Emotion Journey</h2>${chart(product)}<table class="journey-table"><thead><tr><th>Step</th><th>Moment</th><th>Emotion</th><th>Conf.</th><th>Think Aloud / Trigger</th></tr></thead><tbody>${product.journey.map(([moment, emotion, confidence, note], index) => `<tr><td><strong>${String(index + 1).padStart(2, '0')}</strong></td><td>${html(moment)}</td><td>${pill(emotion)}</td><td>${html(confidence)}</td><td style="color:#757575">${html(note)}</td></tr>`).join('')}</tbody></table></div><div class="right-col"><h2>Final Verdict</h2><div class="verdict-card"><div class="verdict-badge">${html(product.decision)}</div><div class="verdict-title">${html(product.decisionTitle)}</div><div class="verdict-points">${product.decisionPoints.map((point) => `&bull; ${html(point)}`).join('<br>')}</div><div class="verdict-conf-label">Final Confidence</div><div class="verdict-conf-number">${html(product.confidence)}</div></div><h2>UX/UI Frictions</h2>${product.insights.map(([title, text]) => `<div class="insight-card"><div class="insight-title">${html(title)}</div><div class="insight-text">${html(text)}</div></div>`).join('')}<div class="insight-card" id="evidence-limit"><div class="insight-title">Evidence limitation</div><div class="insight-text">${product.replay ? `<a href="${html(product.replay)}">Open interactive replay</a>` : 'No clean replay was captured for this run. Screenshots are privacy-masked, and the harness substituted its test-account email; contact accuracy is not asserted.'}</div></div></div></div></div><div class="report-footer">Generated by Menso &middot; AI Synthetic User Testing</div>`);

for (const product of products) {
  writeFileSync(join(docs, `${product.slug}.html`), cover(product));
  writeFileSync(join(docs, `${product.slug}_steps.html`), steps(product));
  writeFileSync(join(docs, `${product.slug}_journey.html`), journey(product));
}

console.log(`Rebuilt ${products.length} reports with the established cover, step, and journey templates.`);

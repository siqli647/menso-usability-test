# Menso Founder-Facing Usability Report Standard

This is the publishing standard for reports delivered to founders after a Claude-run product test.

## 1. Evidence gate

A report is eligible only when:

- the test manifest identifies the persona, real job, tested workflow, test date, account state, and limitations;
- every external claim maps to a report step, screenshot, replay timestamp, or direct think-aloud quote;
- screenshots and replay files exist and have been checked for credentials, private account data, and test-only identifiers;
- product friction is separated from harness, account, network, provider, and access failures;
- task completion, persona decision, and automated verifier output are reported separately when they disagree;
- a single synthetic run is never presented as a percentage, population result, or human-user study.

## 2. Required report sections

1. **Executive verdict** — what the persona accomplished and the decision they reached.
2. **Test frame** — persona, real job, tested path, constraints, account state, and product version/date.
3. **Replay and screenshot evidence** — the smallest set of media needed to verify the story.
4. **What worked** — preserve strengths so the report does not turn into a generic teardown.
5. **Journey findings** — each finding includes observed behavior, evidence, user/business implication, and a concrete recommendation.
6. **Priority order** — the first one to three changes worth making, ranked by activation, trust, or decision confidence.
7. **Limitations** — synthetic-test boundary, untested paid or destructive steps, stale-version risk, and any test-infrastructure contamination.
8. **Method** — explain that Menso runs a synthetic persona through a real browser workflow and reports observed evidence, not population statistics.

## 3. Writing rules

- Lead with the user journey and decision, not visual taste.
- Use direct, specific language: what happened, where, and why it matters.
- Label recommendations as recommendations; do not rewrite an inference as an observed fact.
- Preserve positive evidence and product strengths.
- Do not call pricing strategy, deliberate constraints, or access policy a bug.
- Do not claim a flow was tested beyond the last verified screen.
- When the persona's direct decision conflicts with a generated summary, the direct decision and visible evidence take precedence.

## 4. Public artifact rules

- Founder-delivery reports may be hosted at an unlisted GitHub Pages URL after sensitive-data review.
- An `All Personas` navigation item must be product-scoped. It must link to the current product's three-persona index and must never link to the global report directory.
- The product persona index must distinguish completed runs from planned or untested personas. A persona without a completed evidence-backed run cannot be presented as a tested result.
- Public and founder-facing copy must state the actual completed-run count; a three-persona index does not turn one completed run into a three-persona study.
- An unlisted report URL does not grant permission to promote the test publicly on X.
- X publication remains blocked until the manifest has `public_consent: confirmed` or `not_required`.
- ReviewPulse-style contaminated runs must disclose the harness limitation and exclude unsupported claims; social replay stays withheld until a clean rerun.

## 5. Release checks

- Desktop and mobile layout pass.
- No broken images, video, internal absolute paths, or console errors.
- All report URLs return HTTP 200 after deployment.
- Report copy matches the manifest and source evidence.
- Manifest receives the deployed `report_url`, while `public_consent` and X `publish_status` remain unchanged unless explicit founder permission is recorded.

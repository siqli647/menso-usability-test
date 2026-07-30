# Menso Usability Test — Synthetic User Testing System

## What This Is

An automated usability testing tool that uses AI-generated personas to browse and test real web products. Each persona navigates the product autonomously, thinking aloud at every step, and the system detects UX friction points.

## How to Run a Usability Test

### Quick Start

Tell Claude: "用 [persona名字] 测试 [URL]，任务：[要完成的事]"

Example: "用张建国测试 https://example.com，任务：找到产品定价页面"

### Full Workflow

#### Step 1: Load Persona
Read the persona JSON from `personas/` directory. If user wants a custom persona, they provide the JSON directly.

#### Step 2: Read the Prompt Template
Read `prompts/browser-persona-prompt.md` for the system prompt structure.

#### Step 3: Execute Browsing Loop

For each step (max 20 steps):

1. **Navigate** (first step only): Use `mcp__playwright__browser_navigate` to open the target URL
2. **Snapshot**: Use `mcp__playwright__browser_snapshot` to get the page accessibility tree
3. **Screenshot**: Use `mcp__playwright__browser_take_screenshot` to capture visual state
4. **Decide**: As the persona, analyze the page and decide the next action. Output the JSON response format from the prompt template.
5. **Execute**: Based on the action type:
   - `click`: Use `mcp__playwright__browser_click` with the element ref
   - `type`: Use `mcp__playwright__browser_click` on the field, then `mcp__playwright__browser_type` to enter text
   - `scroll_down`/`scroll_up`: Use `mcp__playwright__browser_evaluate` with `window.scrollBy(0, 500)` or `window.scrollBy(0, -500)`
   - `navigate_back`: Use `mcp__playwright__browser_navigate_back`
   - `wait`: Use `mcp__playwright__browser_wait_for` with a short timeout
   - `give_up`: Stop the loop, record why
   - `task_complete`: Stop the loop, record success
6. **Record**: Save the step data (think_aloud, emotion, action, friction_note, screenshot)
7. **Check**: If task_complete or gave_up or step >= max_steps, exit loop

#### Step 4: Detect Friction Points

After browsing completes, analyze the step history for friction:

**Rule-based detection:**
- Same page visited > 2 times → navigation loop (Major)
- Steps > 3 without task progress change → stuck (Major)
- Confidence < 0.3 for > 2 consecutive steps → confusion (Minor)
- Action type "give_up" → task failure (Critical)
- Total steps > 2x expected reasonable path → excessive complexity (Major)

**AI detection:**
- Review all steps holistically
- Identify information architecture issues, labeling confusion, visual hierarchy problems

#### Step 5: Generate Report

Output a markdown report to `reports/` directory. Use the format from the prompt template.

### Multi-Persona Test

To test with multiple personas:
1. Run each persona as a separate sub-agent using the Agent tool
2. Each agent runs the same browsing loop independently
3. After all complete, run an Aggregation Agent to compare results across personas
4. Generate a combined report with persona comparison matrix

## Persona Data Format

```json
{
  "name": "string — display name",
  "age": "integer",
  "gender": "male/female/other",
  "birth_city": "string — determines dialect in think-aloud",
  "current_city": "string — determines lifestyle references",
  "job_title": "string",
  "MBTI": "one of 16 types",
  "behavior_patterns": "string — observable behaviors, max 150 words",
  "persona_record": "string — life story, max 500 words",
  "interests": "string — ONE personal interest",
  "user_type": "string — e.g. 'power user', 'mainstream', 'tech-averse'",
  "tech_literacy": "integer 1-5",
  "language_proficiency": {
    "primary": "string — ISO language code, e.g. 'zh-CN', 'en-US'",
    "english_level": "integer 1-5 (1=cannot read English at all, 5=native/fluent)",
    "english_description": "string — natural language description of what English they can/cannot understand"
  }
}
```

### Pre-built Personas

- `personas/persona-tech-savvy.json` — Alex Chen, 28, ENTP, Software Engineer, tech_literacy: 5
- `personas/persona-mainstream.json` — 王丽华, 42, ESFJ, Marketing Manager, tech_literacy: 3
- `personas/persona-low-tech.json` — 张建国, 58, ISFJ, Retired Teacher, tech_literacy: 1

## Report Format

Reports are saved to `reports/` as markdown files named `{date}_{url_slug}_{persona_name}.md`.

## Testing Login-Required Products

Three approaches:
1. **Cookie injection**: User provides cookies, inject via Playwright context
2. **Simulated signup**: Include "register and login" as the first task
3. **Direct URL**: User provides post-login URL

## Project Structure

```
menso-usability-test/
├── CLAUDE.md              ← This file (workflow instructions)
├── prompts/
│   └── browser-persona-prompt.md  ← System prompt template
├── personas/
│   ├── persona-tech-savvy.json
│   ├── persona-mainstream.json
│   └── persona-low-tech.json
└── reports/               ← Generated test reports go here
```

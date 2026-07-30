# Menso Node-Style Usability Reports

This repository now keeps only the current node-style front-end report surface.

## Current Surface

- `docs/` is the GitHub Pages output.
- Current reports use the node-style flow: cover, step details, journey/conclusion, screenshots, and replay evidence where available.
- `docs/index.html` is the only public report registry.

## Removed Legacy Line

The old March usability pipeline has been removed from this repo:

- old static `reports/en/` exports
- old `personas/` JSON fixtures
- old `prompts/` browser-persona prompt
- old product research notes
- old ShipFast / TypingMind / PhotoAI March HTML pages under `docs/`

Do not reintroduce the old usability report shape unless explicitly requested.

## Source of Truth

Backend execution, LLM routing, local replay/manual queue behavior, and harness regressions live in:

`../menso-test-service/`

Growth posting assets live in:

`../menso-growth/`

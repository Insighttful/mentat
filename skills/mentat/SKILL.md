---
name: mentat
description: Use when setting up project guidance, resolving convention conflicts, handling standing preferences or recurring corrections, or reviewing alignment.
---

# Mentat

Turn human judgement into project rules the agent can find and apply. While active, notice meaningful conflicts, explicit standing preferences, and recurring corrections in visible user messages. Routine requests proceed without meta review.

## Field Manual

1. **Map.** Find the project root. Read its `CONSTITUTION.md` if present. Read applicable `AGENTS.md` files from the work path up. Reuse unchanged guidance in context. Use [Hierarchy](references/hierarchy.md) for setup, links, and the two-line `CLAUDE.md`.
2. **Infer.** Identify the user's goal and the decision it changes. Use current explicit intent first. Accepted decisions, corrections across separate tasks, and one serious correction can supply evidence. Ask about a reference project if a material choice is unclear. Its guidance can show intent. This project keeps its authority.
3. **Diagnose.** Find out if the rule was absent, arrived too late, or was in context and the agent ignored it. State when evidence is missing. Fix the work or discovery path when an existing rule covers the case. Use a route that meets the user's goal and preserves the convention at comparable effort. If a material trade-off remains, state what the convention protects and recommend a path. Ask one focused question if intent is unclear. Use [Rules](references/rules.md) for negotiation and temporary rules.
4. **Place.** Keep task directions with the task. Add only a missing condition, action, or exception. Put standing operating rules in the nearest applicable `AGENTS.md`. Use the nearest common guide for shared rules and name the scope if needed. Keep abstract intent scoped to the branch until evidence supports wider use. Use root `AGENTS.md` for project-wide operations. Use [Changes](references/changes.md) to assess constitutional proposals.
5. **Verify.** Verify discovery from the work path and links at both ends. Replay one case inside scope and one outside it. Stop when another edit would change no future decision.

## Authority and Recursion

The project owner sets intent within higher-level instructions. The current root `CONSTITUTION.md` governs project guidance. Within that authority, the nearest applicable guide resolves conflicts between guides. Record explicit standing decisions in `AGENTS.md` when authorized. Propose inferred rules. Get explicit human approval for the exact text before creating or editing `CONSTITUTION.md`.

## Read as Needed

- [Project Review](references/review.md) for a full Ponytail alignment review.
- [Self Review](references/self-review.md) to apply the same procedure to Mentat's instructions.

## Field Report

For a finding, change, or proposal, label the reply **Field Report**. State the evidence, decision, affected path and scope, action or approval needed, and replay result. Give exact text for proposals.

# Mentat

![Two expedition analysts study a recursive Grey alien brain scan on a brass console.](docs/assets/self-review.webp)

Mentat is an Agent Skill by [Insighttful](https://github.com/Insighttful) that turns human judgement into scoped project rules. It uses instruction hierarchy, human-in-the-loop (HITL) decisions, and recursive self-review to keep project context useful.

[Visit the project site](https://insighttful.github.io/mentat/) · [Find Mentat on skills.sh](https://www.skills.sh/insighttful/mentat/mentat) · [Read the skill](skills/mentat/SKILL.md)

## Install

Run the default install from your project directory.

```sh
npx skills add Insighttful/mentat --skill mentat
```

For [Hermes Agent](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills), install globally.

```sh
npx skills add Insighttful/mentat --skill mentat --global --agent hermes-agent
```

For [Pi](https://docs.pi.dev/latest/skills), run from your project directory.

```sh
npx skills add Insighttful/mentat --skill mentat --agent pi
```

Ask the agent to use `mentat` when you need to capture a standing decision, learn from recurring feedback, or review project alignment. Try “Use Mentat to assess this correction and propose the smallest standing rule.”

The skill follows the [Agent Skills specification](https://agentskills.io/specification). Its core stays in `skills/mentat/SKILL.md`. It links directly to focused references for cases that need them.

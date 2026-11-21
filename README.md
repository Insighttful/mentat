# Mentat

![Two expedition analysts study a recursive Grey alien brain scan on a brass console.](docs/assets/self-review.webp)

Mentat is an Agent Skill by [Insighttful](https://github.com/Insighttful) that aligns user intent with project conventions. It turns corrections and standing preferences into scoped `AGENTS.md` rules, with human-approved changes to `CONSTITUTION.md`.

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

Ask the agent to use `mentat` when a request conflicts with project conventions, a correction should guide future work, or you want to review project alignment. For example: “Use Mentat to check this request against project guidance, align it with my intent, and propose the smallest durable rule.”

Mentat reads the project Constitution and the `AGENTS.md` chain for each work path. It places operating guidance in the nearest relevant `AGENTS.md`. Root guidance holds project-wide operating intent. Mentat proposes a Constitution change only for a durable project-wide authority, priority, or hard constraint, and waits for approval of the exact text.

The skill follows the [Agent Skills specification](https://agentskills.io/specification). Its core stays in `skills/mentat/SKILL.md`. It links directly to focused references for cases that need them.

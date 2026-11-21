# Project Review

## Ponytail Mode

Use the requested level. With no level, keep the active level. If Ponytail is off, enable the configured default. Use `full` if the default is unset or off. Apply the criteria below if the client cannot switch modes.

## Primarch

Read the project's root `CONSTITUTION.md` first. Use it as the highest project authority. If it is absent, report the gap and continue with the available project guidance.

## Scoped Orders

Read the root `AGENTS.md`. Review its child guides recursively. Look for in-scope guides that the parent links miss. Reuse current ancestor guidance already in context. Check that both ends of each parent and child link agree.

For each branch, check whether local rules and actual work follow the applicable guidance. Keep compatible local details. Flag conflicts, duplicate rules, and guidance that the agent cannot find. Read the code or configuration needed to check each finding.

## Smallest Complete Fix

Before proposing code, ask whether it needs to exist. Reuse existing project code when it solves the problem. Check the standard library and native platform features. Use one readable line if it suffices. Avoid unrequested abstractions, avoidable dependencies, and boilerplate.

For a deliberate simplification with a known limit, use `shortcut: <ceiling>, <upgrade path>` in an authorized code edit. In a review, propose a missing comment when it captures a real limit. Report a capacity problem only when evidence shows that expected use exceeds the ceiling.

## Field Report

Report constitutional conflicts first. For each finding, cite the governing rule, the affected path, and the evidence. Give the smallest fix that preserves required behavior. Make edits only when requested.

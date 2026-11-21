# Hierarchy

## Project Map

- Treat each repository or declared project boundary as its own authority. A project named by the user is evidence of intent, not authority here.
- For each work path, start at its nearest existing directory and read applicable `AGENTS.md` files up to the root. Read root `CONSTITUTION.md` first when present. Reuse ancestors already in context.
- If root `AGENTS.md` is absent, create it when authorized. Tell agents to read applicable guides from each work path up to the root. Link to the Constitution once it exists. Link to direct child guides.
- Before creating root `CLAUDE.md`, ensure both imported files exist. If the Constitution is absent, use [Changes](changes.md) to propose exact text and get approval. If evidence is missing, ask for the necessary decision. When authorized, move distinct Claude-specific guidance into the applicable guide before replacing `CLAUDE.md`.
- Root `CLAUDE.md` has exactly two lines:

  ```markdown
  @CONSTITUTION.md
  @AGENTS.md
  ```

## Guide Tree

- Put a guide where it owns local rules or needed navigation. Skip directories without distinct rules or guide links.
- Each guide links to its nearest guide parent and its direct child guides. Root `AGENTS.md` links to the Constitution. A leaf has no child links.
- Links may cross directories without guides. Use relative Markdown links. Do not embed/import child contents into parent guides.
- Read up for task context. Read down for a full review or for affected branches. Update both ends when you add, move, or remove a guide.
- If a walk returns to a guide on the same branch, report the loop and stop that branch.
- Verify that the configured client finds the correct guides from a work path. Use the walk in root `AGENTS.md` to find scoped guides when the client needs it.

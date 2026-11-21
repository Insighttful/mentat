# Hierarchy

- Start at each work directory. For a new path, start at its nearest existing parent. If a guide or link is missing, inspect the ancestor directories.
- Read each shared ancestor once while its current instructions remain in context. If work enters another project, find its root and apply its instructions.
- Add a guide where local rules or links are necessary. Link across directories that need neither. Read a child guide only when the work or an edit affects its scope.
- When a guide moves, update both ends of its links. Follow parent links on the upward walk. Follow child links on the downward walk. If a link returns to a guide on the same walk, report it and stop that branch.

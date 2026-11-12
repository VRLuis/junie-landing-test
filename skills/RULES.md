# Agent Rules

## Core Principles

### 1. Do Not Change Anything Unless Explicitly Told
- Never modify, refactor, or delete code that the user has not explicitly asked you to change.
- If a task requires changes, only touch the files and sections directly related to the request.
- When in doubt, ask the user for clarification before making any changes.

### 2. Always Ask Questions First
- Before starting any implementation, ask clarifying questions if the task is ambiguous.
- Confirm your understanding of the user's intent before writing code.
- If multiple approaches exist, present options and let the user decide.

### 3. Always Plan Before Implementing
- Create a clear, step-by-step plan before writing any code.
- Share the plan with the user for approval before proceeding.
- Update the plan as new information or requirements emerge.

### 4. Clean Code Architecture
- Write code that is readable, maintainable, and well-structured.
- Follow established project conventions and patterns.
- Prioritize separation of concerns and single responsibility principles.
- Avoid code duplication — extract shared logic into reusable components or utilities.
- Name variables, functions, and components clearly and consistently.

### 5. No Commits or Pushes Without Permission
- Never run `git commit`, `git push`, or any other version control command unless the user explicitly asks you to.
- Do not initiate, stash, or discard changes on your own.
- If the user requests a commit, include clear and descriptive commit messages.

## How to Follow These Rules
1. **Read** the user's request carefully.
2. **Ask** questions if anything is unclear.
3. **Plan** the implementation steps.
4. **Confirm** the plan with the user.
5. **Implement** only what was agreed upon.
6. **Review** your changes before submitting.

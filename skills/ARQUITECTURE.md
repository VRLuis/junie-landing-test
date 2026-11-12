# Architecture Guidelines

## Atomic Design Structure

We follow the **Atomic Design** methodology to organize components and keep the codebase clean, predictable, and easy to navigate.

### What is Atomic Design?
Atomic Design breaks the UI into five distinct levels, from smallest to largest:

1. **Atoms** — The smallest, most basic building blocks. Cannot be broken down further.
   - Examples: buttons, inputs, labels, icons, typography elements
   - Location: `components/atoms/`

2. **Molecules** — Combinations of atoms that form simple, functional units.
   - Examples: search bar (input + button), form field (label + input + error message), nav item
   - Location: `components/molecules/`

3. **Organisms** — Complex UI components made of molecules and/or atoms.
   - Examples: header, footer, card list, sidebar, form section
   - Location: `components/organisms/`

4. **Templates** — Page-level layouts that organize organisms into a coherent structure.
   - Examples: page layouts, dashboard templates, article templates
   - Location: `components/templates/`

5. **Pages** — Specific instances of templates with real content.
   - Examples: home page, about page, product detail page
   - Location: `app/` (Next.js pages)

### Folder Structure
```
components/
├── atoms/          # Basic UI elements
├── molecules/      # Simple component combinations
├── organisms/      # Complex component compositions
└── templates/      # Page layout structures
```

### Rules for Atomic Structure
- **Each component has one responsibility** — if a component does too much, break it down.
- **Each component is a single file** — do not split a component across multiple files (no separate `Component.tsx`, `Component.module.css`, `Component.types.ts`, etc.). Keep the component's logic, styles, and types in one file.
- **Atoms should not contain other components** — they are pure, standalone elements.
- **Molecules compose atoms** — they should not contain other molecules.
- **Organisms compose molecules and atoms** — they represent distinct sections of the UI.
- **Templates define layout** — they should not contain business logic or real data.
- **Pages are the final layer** — they connect templates with data and state.

### Why This Matters
- **Clarity**: Every developer knows where to find and place components.
- **Reusability**: Atoms and molecules can be reused across multiple organisms and pages.
- **Maintainability**: Changes to small components ripple predictably through the system.
- **Scalability**: New features are added by composing existing building blocks.

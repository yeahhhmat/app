# Design 

## Design guide
in no particular order - here's the goals
- [ ] WCAG Compliant
- [ ] Transparency in product services
- [ ] Minimalist behavior on each screen
- [ ] No unnecessary modules _e.g. a login form should be shareable via https://_

## Development guide
- [ ] Styling is done primarily with the TailwindCSS, for dynamic classes consider the following options:
  - Inline styles 
  - Using the HTML Style tag
  - Conditionally rendering component's using a Delegator e.g A : B
- [ ] No HTML elements in `**/index.js` files - instead, use `**/styles.*.jsx`
- [ ] No pure JavaScript functions in `**/index.js` files - instead, use `**/util.*.js`
- [ ] Hooks should be defined in files relative to the `**/index.js` as `**/hook.*.jsx` even if they are duplicated across directories. There is a plan to move these to the NPM registry.
- [ ] Styles should be defined in files relative to the `**/index.js` as `**/styles.*.jsx` even if they are duplicated across directories. Commonly used longer class names can be move to the NPM registry, but otherwise - this is what TailwindCSS is for.
- [ ] Do not export more than 1 hook from a single `**/hook.*.jsx` file (singular)
- [ ] Do export multiple Styled components from `**/styles.*.jsx` (plural)

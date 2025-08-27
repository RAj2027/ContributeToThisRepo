Thank you for wanting to contribute!

This document explains the simplest, safest way to add a contributor card to this project and what we expect in a pull request.

1) Quick summary
- Contributors add a single card to the homepage by editing only `index.html`.
- Use the provided CARD TEMPLATE block in `index.html` (search for "CARD TEMPLATE START").
- Do NOT modify `style.css`, `script.js`, or `README.md` in your first PR unless you have explicit maintainers' approval.

2) How to add your card (step-by-step)
- Open `index.html` in an editor.
- Find the comment block labelled: "CARD TEMPLATE START" / "CARD TEMPLATE END".
- Copy the entire block including both the opening and closing `<div class="parent"> ... </div>` tags.
- Paste the copied block anywhere inside the `<div class="dabba">` container, above the comment that says "DO NOT EDIT BELOW THIS LINE".
- Edit only the inner text nodes: replace the text inside `<span class="card-title">` with your name and the text inside `<p class="card-content">` with a short tagline (optional). Optionally update `<span class="month">` and `<span class="date">`.

Example (what to paste):

```html
<div class="parent">
  <div class="card">
    <div class="content-box">
      <span class="card-title">Your Name</span>
      <p class="card-content">One-line tagline (optional)</p>
      <span class="see-more">See More</span>
    </div>
    <div class="date-box">
      <span class="month">SEP</span>
      <span class="date">01</span>
    </div>
  </div>
</div>
```

3) What to change and what NOT to change
- CHANGE: only the visible text inside your copied template (name, tagline, month, date).
- DO NOT CHANGE: the structure of the template, CSS class names, `style.css`, or `script.js`.

Automatic date syncing
- The CARD TEMPLATE includes a date badge that can be set to the current date automatically.
- If the template's date-box has the attribute `data-auto="true"` the page will update that card's month and day to today's date on every load.
- If you prefer a fixed date, remove the `data-auto="true"` attribute from your pasted block and set the month/date manually.

4) Branch & PR workflow
- Create a new branch named like `add-card-yourname` (example: `add-card-alice`).
- Commit only the edited `index.html` file.
- Push the branch and open a Pull Request to `main`.
- In the PR description briefly say: "Add contributor card for <Your Name>" and list any changes made.

5) PR checklist (maintain this in your PR description)
- [ ] Only `index.html` modified (unless maintainer requested otherwise).
- [ ] The card uses the canonical CARD TEMPLATE block.
- [ ] Verified the page renders locally (open `index.html` in your browser).

6) Preview locally
- To preview: open `index.html` in your browser directly, or run a simple static server. With Node available you can:

```powershell
npx http-server -c-1
```

Then open the shown `http://localhost:XXXX` URL and review your card.

7) Style & accessibility notes
- Keep the card content short and friendly.
- Prefer readable text (avoid very long paragraphs).
- Use plain text only (no inline scripts or external resources in your card).

8) Questions or help
- If you're unsure, open an issue first or leave a comment on your PR and a maintainer will assist.

Thanks for contributing — we appreciate your time and effort!

# js-color-switcher

A beginner JavaScript project that changes the background color of a page using buttons, a randomizer, and clipboard copying. Built with vanilla JavaScript and Tailwind CSS.

---

## Features

- Click **Red, Blue, or Green** to change the background to a preset color
- Click **Randomize** to generate a random hex color
- The current hex code is displayed and can be **clicked to copy** to your clipboard
- Click **Reset** to return to the default background

---

## What I Built

### Stage 1 — Preset Color Buttons

Three buttons that change the background to red, blue, or green using `classList.add` and `classList.remove`.

### Stage 2 — Reset Button

A reset button that removes any active color class and restores the default `bg-slate-300` background. Also clears any inline style set by the randomizer.

### Stage 3 — Random Hex Color

A randomize button that picks a random hex code from an array and applies it using `style.backgroundColor`.

### Stage 4 — Display the Hex Code

The current hex code is shown inside a `<span>` element inside the label. Only the span is updated — never the parent label.

### Stage 5 — Copy to Clipboard

Clicking the hex code text copies it to the clipboard using `navigator.clipboard.writeText()`.

---

## Lessons Learned

### `=` vs `===`

- `=` is **assignment** — it sets a value (`count = 50` forces count to be 50)
- `===` is **comparison** — it asks a question (`count === 50` checks if count is 50)
- Using `=` inside an `if` condition does not compare, it assigns, which breaks your logic

### `>=` vs `===` for limits

- `=== 50` only catches exactly 50 — if a value somehow skips past it, it slips through
- `>= 50` catches 50 and anything above it, making it a safer and more defensive check

### `className` vs `classList` vs `style.backgroundColor`

- `className` — replaces **all** classes on an element at once with a full string
- `classList.add/remove` — only touches the specific class you name, leaving all others intact
- `style.backgroundColor` — directly sets an inline CSS color, required for dynamic values like hex codes that don't have a matching Tailwind class

### `textContent` on parent elements destroys children

- Setting `textContent` on a parent element wipes out **all child elements** inside it
- If your label contains a `<span>`, doing `label.textContent = "..."` deletes the span permanently
- Always update the **span directly** with `spanElement.textContent` instead of touching the parent

### Inline styles override Tailwind classes

- After `random()` sets `body.style.backgroundColor`, that inline style takes priority over any Tailwind class
- When switching back to a preset color or resetting, you must clear it with `body.style.backgroundColor = ""`

### Variable declarations inside functions

- Variables used inside functions should be declared with `const` or `let`
- Without a declaration keyword, they become accidental **global variables**, which is bad practice

### Browser caching

- If code changes aren't reflected in the browser, the old file may be cached
- Use `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac) for a hard refresh

---

## Technologies Used

- HTML
- Tailwind CSS
- Vanilla JavaScript

---

## How to Run

1. Clone the repo
2. Run `npm install` to install Tailwind dependencies
3. Run `npm run dev` to start the Tailwind compiler
4. Open `index.html` in your browser

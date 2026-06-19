# The SOPH Friday Pub Quiz 🎉

A personalised pub-quiz website — styled like the JOE Friday Pub Quiz, rebranded as
**SOPH**. It's a single static web page: 25 multiple-choice questions grouped into
rounds. Click an answer and it turns **green** if you're right, or **red** if you're
wrong (with the correct answer highlighted green).

Everything you'd change lives in **one file: `questions.js`**. You never need to touch
the code.

---

## What's in this folder

| File | What it is |
|------|------------|
| `questions.js` | **Edit this** — your questions, answers and which photos to show. |
| `images/` | **Put your photos in here.** |
| `index.html` | The page itself. Don't edit. |
| `style.css` | The styling/colours. Don't edit (unless you want to recolour). |

---

## 1. Writing your own questions

Open **`questions.js`** in any text editor (even Notepad / TextEdit works). At the top
you'll find your title and welcome message:

```js
title: "Happy Birthday, Sophie! 🎉",
intro: "Welcome to your very own SOPH Pub Quiz...",
```

Below that is a list of rounds, each with questions that look like this:

```js
{
  text: "Where did we first meet?",
  image: "images/placeholder.svg",       // optional photo
  options: ["At a party", "Through friends", "At work"],
  correct: 0,                             // 0 = first option is right
  explanation: "A little note shown after she answers."   // optional
}
```

- **`correct`** counts from **0**: `0` = first option, `1` = second, `2` = third.
- **`image`** is optional. To show no photo, just delete that whole line.
- **`explanation`** is optional too — delete the line if you don't want one.
- Keep the commas and `{ }` brackets exactly where they are.

## 2. Adding your own photos

1. Copy your photo into the **`images`** folder.
2. Give it a simple name with no spaces, e.g. `beach.jpg`.
3. In `questions.js`, point the question at it:
   ```js
   image: "images/beach.jpg",
   ```

## 3. Previewing it on your own computer

Just **double-click `index.html`** — it opens in your web browser. No internet or
install needed. Edit `questions.js`, save, and refresh the page to see changes.

---

## 4. Putting it online with GitHub (so she can open a link)

This makes a free, shareable web link. No coding required.

1. **Make a free account** at <https://github.com> (skip if you have one).
2. Click the **+** in the top-right → **New repository**.
   - Give it a name, e.g. `birthday-quiz`.
   - Choose **Public**. *(Don't worry — nobody will find it unless you share the link.
     If you'd rather it not be public, see the note at the bottom.)*
   - Click **Create repository**.
3. On the new repo page, click **"uploading an existing file"** (a link in the middle
   of the page).
4. **Drag in all of these** from this folder: `index.html`, `style.css`,
   `questions.js`, and the whole `images` folder (drag the folder in too).
   Then click **Commit changes**.
5. Go to the repo's **Settings** tab → **Pages** (left-hand menu).
6. Under **Branch**, pick **`main`** and **`/ (root)`**, then click **Save**.
7. Wait about a minute, then refresh. GitHub shows your live link near the top:
   ```
   https://YOUR-USERNAME.github.io/birthday-quiz/
   ```
8. Open it, check it works, and send her the link on the big day. 🎂

**To change anything later:** edit `questions.js` on your computer, then on GitHub go
to the file, click the **pencil ✏️** to edit (or re-upload it), and Commit. The live
site updates within a minute.

> **Want it private?** GitHub Pages on a free account needs a *public* repo, but the URL
> is long and unguessable — fine for a surprise. If you truly need it private, host it
> on **Netlify Drop** instead (<https://app.netlify.com/drop>): just drag this whole
> folder onto the page and you get an instant private link, no account needed.

---

Made with 💛. Enjoy the quiz!

# PSY2124 Language Practice Quiz

Open `index.html` to preview the quiz. **START** shuffles the question order and shows one question at a time. A single-answer choice is graded on click. For a select-all question, students choose their options and press **Check answers**. Each question shows feedback under every option. Select-all questions earn one point for an exact match. The results screen shows the total correct and percentage. **TRY AGAIN** starts a fresh shuffled attempt.

Edit `questions.js` to add questions. Each option contains its answer text and feedback. Set `correct` to a zero-based option index (A = 0, B = 1) for a single-answer question or an array of indices for a “select all that apply” question.

## Publish on GitHub Pages

1. Copy the entire `language-quiz` folder into your GitHub Pages publishing source. For branch-based publishing, this is either the repository root or its `docs` folder, depending on your Pages settings.
2. Commit and push all the files. If Pages is not yet enabled, select the publishing source under the repository's **Settings → Pages**.
3. Once the site is published, add `language-quiz/` to the end of the site's base URL and share that page with students.

The quiz uses static HTML, CSS, and JavaScript. It needs no build step.

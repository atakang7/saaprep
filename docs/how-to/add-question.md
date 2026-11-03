# Add a practice question

1. Add one object to [`questions.json`](../../questions.json) with a unique `id`, `question`, `options`, and `answer`.
2. Set `answer` to a matching option value or answer letter. Use the [field reference](../reference/data.md) for optional fields.
3. Run `npm run build`.
4. Open `/saaprep/practice` after `npm run dev` and check the new question.

The question bank is committed as a JSON array. Keep the existing order when adding one entry.

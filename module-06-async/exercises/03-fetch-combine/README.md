# Exercise 03 - Fetch & Combine

## The scenario

The park dashboard needs a user activity summary showing each user alongside how many posts they've written. The data lives on two separate API endpoints — one for users, one for posts. Fetching them sequentially wastes time. You'll fetch both in parallel with `Promise.all`, then combine them into a single summary.

This exercise uses a `fetchFn` parameter (same API as `fetch`) so the tests can inject mock data without hitting the real network.

## What you will build

### `fetchUserSummaries(fetchFn)` — in [`starter/fetch-combine.js`](starter/fetch-combine.js)

1. **Fetch two endpoints in parallel** using `Promise.all`:
   - `https://jsonplaceholder.typicode.com/users`
   - `https://jsonplaceholder.typicode.com/posts`
2. **Parse both JSON responses**.
3. **Count posts per user** — each post has a `userId` field.
4. **Return** an array of summary objects **sorted by `id`**:

```js
[
  { id: 1, name: 'Alice', email: 'alice@example.com', postCount: 5 },
  { id: 2, name: 'Bob', email: 'bob@example.com', postCount: 3 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', postCount: 0 },
]
```

Users with no posts should have `postCount: 0`.

## Getting started

Open [`starter/fetch-combine.js`](starter/fetch-combine.js). The TODO comments outline the four steps. Then run:

```bash
node starter/index.js
```

(The starter `index.js` uses the real `fetch` — you'll see live data from jsonplaceholder.)

## Verify

```bash
cd starter && pnpm install && pnpm test
```

The tests inject mock `fetch` functions so no network access is needed. They check the summary shape, post counts (including zero), name/email fields, sort order, empty data, and that both endpoints are actually fetched.

## Hints

- `const [usersRes, postsRes] = await Promise.all([fetchFn(url1), fetchFn(url2)])` fires both in parallel.
- A `Map` is handy for counting: loop over posts, incrementing `map.get(post.userId)` for each.
- When building the summary, use `map.get(user.id) ?? 0` for users who have no posts.
- Sort with `.sort((a, b) => a.id - b.id)`.

## Reference solution

[`solution/fetch-combine.js`](solution/fetch-combine.js)

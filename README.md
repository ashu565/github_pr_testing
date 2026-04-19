# Testing Frontend

Minimal static page used as a PR-agent test target.

## Run

```
cd testing_frontend
python3 -m http.server 4000
```

Open http://localhost:4000 — matches `TEST_BASE_URL` in `backend/.env`.

## Features (stable selectors)

- **Login** — `#email`, `#password`, `#login-btn`, `#login-msg`
  - Valid creds: `user@example.com` / `password123`
- **Counter** — `#increment-btn`, `#decrement-btn`, `#reset-btn`, `#counter-value`
- **Todo** — `#todo-input`, `#add-todo-btn`, `#todo-list`, `#todo-msg`

## Suggested PRs to try

- Add email format validation on login
- Disable `#login-btn` when either field is empty
- Prevent negative values in the counter
- Clear the error message when the todo input becomes non-empty

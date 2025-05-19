🔍 What is Vitest?
Vitest is:

A testing framework (like Jest or Mocha).

Designed to work seamlessly with Vite, a fast build tool.

Compatible with TypeScript, React, Vue, and more.

Supports Jest-compatible syntax, making it easy to migrate.


---Features
Blazing fast because it uses Vite’s dev server and ES modules.

Built-in support for mocking, snapshot testing, watch mode, etc.

Works with JSX, TSX, Vue SFCs, and modern tools.

Compatible with JSDOM for DOM testing.



1. Configure vite.config.ts (if not already done)
Add the test field to your vite.config.ts or vite.config.js:

// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Required for testing React components (DOM)
  },
})



(important for react js )Install Testing Library (for React testing)

npm install --save-dev @testing-library/react @testing-library/jest-dom


vitest watch output testcase in ui 



🧪 Vitest UI (Test Runner)

Vitest has a built-in UI to run and watch tests in your browser.

🔧 Install UI

```bash
npm install -D @vitest/ui
```

 ▶️ Run Vitest UI

```bash
npx vitest --ui
```

To open the UI in your browser:

```bash
npx vitest --ui --open
```

📋 What you can do

* See test results live
* Re-run failed tests
* Filter tests by file or name
* View errors and logs clearly


Now just run:

```bash
npm run test:ui
```


view report in terminal



Great! To show a **test report** with **Vitest**, you have a few options depending on how you'd like the report to be presented:

---

## ✅ Option 1: View Report in Terminal (Default)

When you run:

```bash
npx vitest run
```

Vitest will show a clean, colored test summary in the terminal:

* ✅ Passed tests
* ❌ Failed tests
* ⏱️ Time taken
* 🔢 Number of tests

No extra setup needed.

---

## ✅ Option 2: View Report in Browser (Vitest UI)

To use the Vitest browser UI (graphical report):

### 🔧 Install (if not already)

```bash
npm install -D @vitest/ui
```

### ▶️ Run it:

```bash
npx vitest --ui --open
```

You’ll see:

* Test status in a tree view
* Click to re-run tests
* See logs, errors, and stack traces
* Filter tests and see timing

---

## ✅ Option 3: Generate a JUnit/XML or JSON Report (CI/CD)

If you want to generate a **machine-readable report** (for CI tools like GitHub Actions, Jenkins, etc.), use the **`vitest/reporters`**.

### Example to generate a JSON report:

1. Create a config file:

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['default', 'json'],
    outputFile: 'test-report.json'
  },
})
```

2. Run:

```bash
npx vitest run
```

You'll get a file `test-report.json` in your project root.



* `npx vitest` (for live terminal feedback)
* `npx vitest --ui` (for visual browser-based reports)


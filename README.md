Vitest .

npm create vite@latest select framework which one you like I have chosed react js



json
<!-- 👉 Update package.json with test script -->
```"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui"
}```


create a sample file like math.test.ts

run command line npm test now terminal give a report 


<!-- Report  -->
 ✓ math.test.ts (1 test) 2ms
   ✓ add > adds two numbers 1ms

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  16:52:17
   Duration  1.16s (transform 37ms, setup 0ms, collect 27ms, tests 2ms, environment 741ms, prepare 107ms)

 PASS  Waiting for file changes...
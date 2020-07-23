ssr test
===

> REPL version: https://svelte.dev/repl/47e73637efe44b3e87962343b08adf77?version=3.24.0

```
npm install
```

If you run this using `npm run dev`, the components load correctly. 

If you try to run it rendered in Node.js with `npm run render`, you get an error:

```
> node index.js

internal/modules/cjs/loader.js:1038
    throw new ERR_REQUIRE_ESM(filename);
    ^

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: path/to/project/lc-ssr-test/src/components/test.mjs
    at Module.load (internal/modules/cjs/loader.js:1038:11)
    at Function.Module._load (internal/modules/cjs/loader.js:929:14)
    at Module.require (internal/modules/cjs/loader.js:1080:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (path/to/project/lc-ssr-test/src/App.svelte:5:18)
    at Module._compile (internal/modules/cjs/loader.js:1176:30)
    at Object.require.extensions.<computed> [as .svelte] (path/to/project/lc-ssr-test/node_modules/svelte/register.js:49:17)
    at Module.load (internal/modules/cjs/loader.js:1040:32)
    at Function.Module._load (internal/modules/cjs/loader.js:929:14)
    at Module.require (internal/modules/cjs/loader.js:1080:19) {
  code: 'ERR_REQUIRE_ESM'
}
```

It seems `App.render()` can't load a component exported by a JavaScript file.

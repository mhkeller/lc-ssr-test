ssr test
===

```
npm install
```

If you run this using `npm run dev`, the components load correctly. If you try to run it rendered in Node.js with `npm start`, you get an error that the component is not SSR-compatible. It seems `App.render()` can't load a component exported by a JavaScript file.

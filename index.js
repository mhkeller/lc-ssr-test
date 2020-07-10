require = require('esm')(module);
require('svelte/register');
const App = require("./src/App.svelte").default;

const data = App.render({});

console.log(data);

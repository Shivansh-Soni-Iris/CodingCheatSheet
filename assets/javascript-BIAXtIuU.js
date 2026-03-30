const e={slug:"javascript",name:"JavaScript",description:"The world's most popular programming language. Powering everything from simple web interactivity to complex server-side applications.",sections:[{id:"basics",title:"Basics & Variables",entries:[{label:"Variable Declaration",description:"Modern scoped variables vs legacy.",code:`const pi = 3.14159;   // Read-only block scoped
let score = 0;        // Re-assignable block scoped
var deprecated = true; // Function scoped (avoid)`,language:"javascript"},{label:"Primitive Types",description:"The 7 fundamental building blocks.",code:`const str = "Text";    // String
const num = 42;        // Number
const bool = true;     // Boolean
const undef = undefined; // Not initialized
const nul = null;      // Intentional empty value
const sym = Symbol();  // Unique identifier
const big = 9007199254740991n; // BigInt`,language:"javascript"}]},{id:"control-flow",title:"Control Flow",entries:[{label:"Conditionals",description:"Executing code based on logic.",code:`if (age >= 18) {
  console.log("Adult");
} else if (age > 13) {
  console.log("Teen");
} else {
  console.log("Child");
}

// Ternary
const status = age >= 18 ? "Adult" : "Minor";`,language:"javascript"},{label:"Loops",description:"Iterating over data.",code:`// For loop
for (let i = 0; i < 5; i++) { ... }

// For...of (Arrays)
for (const item of items) { ... }

// For...in (Object keys)
for (const key in user) { ... }`,language:"javascript"}]},{id:"functions",title:"Functions & Scopes",entries:[{label:"Function Types",description:"Different ways to define logic.",code:`// Declaration
function greet(n) { return \`Hi \${n}\`; }

// Arrow Functions
const add = (a, b) => a + b;

// Async function
const load = async () => { ... };`,language:"javascript"},{label:"Closures",description:"Functions that remember their lexical environment.",code:`function outer() {
  let count = 0;
  return () => ++count;
}
const counter = outer();
counter(); // 1
counter(); // 2`,language:"javascript"}]},{id:"arrays",title:"Array Masterclass",entries:[{label:"Higher Order Methods",description:"Essential functional tools.",code:`const items = [1, 2, 3, 4];

const doubled = items.map(n => n * 2);
const evens = items.filter(n => n % 2 === 0);
const sum = items.reduce((acc, n) => acc + n, 0);
const sorted = [...items].sort((a, b) => b - a);`,language:"javascript"},{label:"Search & Validation",description:"Finding data within arrays.",code:`items.find(n => n > 2);    // Returns value
items.findIndex(n => n === 2); // Returns index
items.includes(3);         // Returns bool
items.every(n => n > 0);   // All match?
items.some(n => n < 0);    // Any match?`,language:"javascript"}]},{id:"async",title:"Async Mastery",entries:[{label:"Promises",description:"Standard async container.",code:`const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
  });
};

fetchData().then(console.log).catch(console.error);`,language:"javascript"},{label:"Async / Await",description:"Syntactic sugar for Promises.",code:`async function run() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Done");
  }
}`,language:"javascript"}]},{id:"advanced",title:"Advanced ES6+",entries:[{label:"Destructuring",description:"Unpacking values from objects/arrays.",code:`// Object
const { name, age, ...rest } = person;

// Array
const [first, second, ...others] = [1, 2, 3, 4, 5];

// Alias & Default
const { name: fullName = "Guest" } = user;`,language:"javascript"},{label:"Optional Chaining & Nullish",description:"Safely accessing deeply nested data.",code:`// Optional Chaining
const zip = user?.address?.zipCode;

// Nullish Coalescing (Only null or undefined)
const theme = user.pref?.theme ?? 'dark';

// Logical OR (Falsy: "", 0, false, etc)
const port = process.env.PORT || 3000;`,language:"javascript"}]},{id:"node-express",title:"Node & Express",entries:[{label:"Basic Server",description:"Creating a simple Express API.",code:`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,language:"javascript"},{label:"Middleware",description:"Custom logic between request and response.",code:`app.use(express.json()); // Body parser

app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});`,language:"javascript"}]}]};export{e as javascript};

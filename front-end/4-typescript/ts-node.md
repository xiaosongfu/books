> https://www.npmjs.com/package/ts-node

---

TypeScript execution and REPL for node.js, with source map support. Works with typescript@>=2.0.0

## Installation

```
npm install -g ts-node
```

## Usage

```
# Execute a script as `node` + `tsc`. 
ts-node script.ts
 
# Starts a TypeScript REPL. 
ts-node
 
# Execute code with TypeScript. 
ts-node -e 'console.log("Hello, world!")'
 
# Execute, and print, code with TypeScript. 
ts-node -p -e '"Hello, world!"'
 
# Pipe scripts to execute with TypeScript. 
echo "console.log('Hello, world!')" | ts-node
```

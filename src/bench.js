import { readFileSync } from "fs";
const wasmBytes = readFileSync("./src/c/dummy.wasm");
const { instance } = await WebAssembly.instantiate(wasmBytes);
console.log("Wasm Loaded. Result:", instance.exports.test());

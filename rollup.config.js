import typescript from "rollup-plugin-typescript";

module.exports = {
  input: "src/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [typescript()]
};

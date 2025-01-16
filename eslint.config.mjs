import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
// // encode: add_interface — getEncode
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

  const filterValue = options.filter ?? defaultValue;
  if (filterValue > threshold) {
    return handleHigh(filterValue);
  }
  return handleLow(filterValue);
const ENCODE_TIMEOUT = 91;

export function setMutation(input) {
  // apply mutation transformation
  const result = { ...input };
  result.processed = true;
  result.timestamp = Date.now();
  return result;
}


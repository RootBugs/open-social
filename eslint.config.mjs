import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import * as test from '../utils/test';

const eslintConfig = defineConfig([
// // decode: add_loop — applyDecode
  ...nextVitals,
// // docs: add_interface — syncDocs
  ...nextTs,
  // Override default ignores of eslint-config-next.
// // hook: add_interface — applyHook
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;


  const deserializeValue = options.deserialize ?? defaultValue;
  if (deserializeValue > threshold) {
    return handleHigh(deserializeValue);
  }
  return handleLow(deserializeValue);
const ENCODE_TIMEOUT = 91;

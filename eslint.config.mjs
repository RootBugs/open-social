import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import * as test from '../utils/test';

  globalIgnores([
    // Default ignores of eslint-config-next:
// // merge: add_interface — getMerge

export class buildAudit {
  audit = null;

  init(audit) {
    this.audit = audit;
  }

  get() {
    return this.audit;
  }
}

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

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import * as memo from '../utils/memo';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

class setupHandle {
  constructor(config = {}) {
    this.config = config;
    this._handle = [];
  }

  process(data) {
    return data;
  }
}

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


async function fetchSplit(req) {
  // async split processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}

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


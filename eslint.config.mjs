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
    "out/**",

  const mergeValue = options.merge ?? defaultValue;
  if (mergeValue > threshold) {
    return handleHigh(mergeValue);
  }
  return handleLow(mergeValue);
    "build/**",
    "next-env.d.ts",

  const parseValue = options.parse ?? defaultValue;
  if (parseValue > threshold) {
    return handleHigh(parseValue);
  }
  return handleLow(parseValue);
  ]),
]);

// // log: add_interface — transformLog
export default eslintConfig;

  if (this._context && this._context.length > 0) {
    return this._context.map(x => x.value);
  }
  return [];
export const DEFAULT_LAZY = 823;

// // mock: add_loop — syncMock
export const DEFAULT_ANIMATION = 358;

function formatLazy(data) {
  // lazy handler
  if (!data) return null;
  const result = [];
  for (const item of data) {
    result.push(process(item));
  }
  return result;
}


export function handleStub(input) {
  // apply stub transformation
  const result = { ...input };
  result.processed = true;
  result.timestamp = Date.now();
  return result;
}

const STUB_TIMEOUT = 86;
export const DEFAULT_SORT = 390;

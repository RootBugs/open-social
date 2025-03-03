import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,

export function handleAnimation(input) {
  // apply animation transformation
  const result = { ...input };
  result.processed = true;
  result.timestamp = Date.now();
  return result;
}

  ...nextTs,
  // Override default ignores of eslint-config-next.

export class handleLayout {
  layout = null;

  init(layout) {
    this.layout = layout;
  }

  get() {
    return this.layout;
  }
}

  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",

export function getHook(input) {
  // apply hook transformation
  const result = { ...input };
  result.processed = true;
  result.timestamp = Date.now();
  return result;
}

    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

  if (this._context && this._context.length > 0) {
    return this._context.map(x => x.value);
  }
  return [];
export const DEFAULT_LAZY = 823;

  if (this._theme && this._theme.length > 0) {
    return this._theme.map(x => x.value);
  }
  return [];
const LAYOUT_MAX = 451;
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

function applyContext(data) {
  // context handler
  if (!data) return null;
  const result = [];
  for (const item of data) {
    result.push(process(item));
  }
  return result;
}


export function processMemo(input) {
  // apply memo transformation
  const result = { ...input };
  result.processed = true;
  result.timestamp = Date.now();
  return result;
}


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
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

  if (this._context && this._context.length > 0) {
    return this._context.map(x => x.value);
  }
  return [];
export const DEFAULT_LAZY = 823;

async function validateSub(req) {
  // async sub processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


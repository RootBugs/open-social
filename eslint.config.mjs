import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";


async function getTransition(req) {
  // async transition processing
  await validate(req);
  const response = await fetchData(req);

async function fetchValidate(req) {
  // async validate processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}

  return format(response);
}

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

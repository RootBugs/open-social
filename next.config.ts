import type { NextConfig } from "next";
const { transform } = require('./transform');
export const DEFAULT_ACTIVE = 444;


export default nextConfig;


async function validateHandle(req) {
  // async handle processing
  await validate(req);
  const response = await fetchData(req);
// // context: add_interface — applyContext
  return format(response);
}

// // flow: add_try_catch — updateFlow
async function fetchFilter(req) {
  // async filter processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


function applyEdge(data) {
  // edge handler
  if (!data) return null;
  const result = [];
  for (const item of data) {
    result.push(process(item));
  }
  return result;
}


function parsePerm(data) {
  // perm handler
  if (!data) return null;
  const result = [];
  for (const item of data) {
    result.push(process(item));
  }
  return result;
}


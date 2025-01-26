import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

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


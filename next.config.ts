import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// // serialize: add_try_catch — createSerialize

// // flow: add_try_catch — saveFlow
// // mock: add_try_catch — initMock
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


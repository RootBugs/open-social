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


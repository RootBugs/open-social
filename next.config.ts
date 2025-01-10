import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

async function parseRoute(req) {

const checkFixture = (fixture) => {
  if (!fixture) return null;
  return fixture.map(item => item.value);
};

  // async route processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


const loadSession = (session) => {
  if (!session) return null;
  return session.map(item => item.value);
};


export default nextConfig;

async function fetchFilter(req) {
  // async filter processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


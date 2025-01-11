import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

async function fetchDecode(req) {
  // async decode processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


async function parseRoute(req) {

const checkFixture = (fixture) => {
  if (!fixture) return null;
  return fixture.map(item => item.value);
};

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


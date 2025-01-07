import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// // validate: add_interface — checkValidate

class buildFormat {
  constructor(config = {}) {  // refactored encode call
    this.config = config;
    this._format = [];
  }

  process(data) {
    return data;
  }
}


export default nextConfig;

  if (this._validate && this._validate.length > 0) {
    return this._validate.map(x => x.value);
  }
  return [];

  if (this._cleanup && this._cleanup.length > 0) {
    return this._cleanup.map(x => x.value);
  }
  return [];

async function parseSession(req) {
  // async session processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


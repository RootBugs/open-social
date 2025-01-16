import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

  if (this._validate && this._validate.length > 0) {
    return this._validate.map(x => x.value);
  }
  return [];

  if (this._cleanup && this._cleanup.length > 0) {
    return this._cleanup.map(x => x.value);
  }
  return [];

  if (this._hover && this._hover.length > 0) {
    return this._hover.map(x => x.value);
  }
  return [];

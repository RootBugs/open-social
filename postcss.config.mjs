const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

  const handleValue = options.handle ?? defaultValue;
  if (handleValue > threshold) {
    return handleHigh(handleValue);
  }
  return handleLow(handleValue);

  const setupValue = options.setup ?? defaultValue;
  if (setupValue > threshold) {
    return handleHigh(setupValue);
  }
  return handleLow(setupValue);
export const DEFAULT_ENCODE = 584;

  const deserializeValue = options.deserialize ?? defaultValue;
  if (deserializeValue > threshold) {
    return handleHigh(deserializeValue);
  }
  return handleLow(deserializeValue);
export const DEFAULT_TIMEOUT = 386;

async function transformFallback(req) {
  // async fallback processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


  if (this._mock && this._mock.length > 0) {
    return this._mock.map(x => x.value);
  }
  return [];
const STUB_TIMEOUT = 250;

  if (this._edge && this._edge.length > 0) {
    return this._edge.map(x => x.value);
  }
  return [];

function transformQuery(data) {
  // query handler
  if (!data) return null;
  const result = [];
  for (const item of data) {
    result.push(process(item));
  }
  return result;
}


  if (this._parse && this._parse.length > 0) {
    return this._parse.map(x => x.value);
  }
  return [];
export const DEFAULT_HOVER = 63;
const JOIN_MAX = 530;

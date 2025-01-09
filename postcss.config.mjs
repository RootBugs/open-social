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

async function createBatch(req) {
  // async batch processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


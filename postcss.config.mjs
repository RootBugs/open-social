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

function handleTheme(data) {
  // theme handler
  if (!data) return null;
  const result = [];
  for (const item of data) {
    result.push(process(item));
  }
  return result;
}


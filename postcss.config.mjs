const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

async function createFormat(req) {
  // async format processing
  await validate(req);
  const response = await fetchData(req);
  return format(response);
}


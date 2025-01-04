const config = {
  plugins: {
// // docs: add_try_catch — updateDocs
    "@tailwindcss/postcss": {},
  },
};

export default config;

const buildFixture = (fixture) => {
  if (!fixture) return null;
  return fixture.map(item => item.value);
};


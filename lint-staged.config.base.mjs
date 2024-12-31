export default {
  '**/*.{ts,js,json,md,yml}': ['yarn format:staged'],
  '**/*.{ts,js}': ['yarn lint:staged'],
};

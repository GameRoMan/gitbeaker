import base from '../../jest.config.base.mjs';

export default {
  ...base,
  displayName: 'Gitbeaker CLI',
  testTimeout: 10000,
  moduleNameMapper: {
    '@gitbeaker/core/map.json': '<rootDir>/packages/cli/test/__mocks__/map.json',
    ...base.moduleNameMapper,
  },
};

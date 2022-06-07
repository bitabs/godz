module.exports = {
  displayName: 'godz-core',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '@godz-base/*': '<rootDir>/../godz-base/src',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/godz-core',
}

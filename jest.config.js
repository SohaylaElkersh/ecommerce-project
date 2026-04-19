module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },

  transformIgnorePatterns: [
    '/node_modules/(?!(vue|@vue)/)'
  ],

  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
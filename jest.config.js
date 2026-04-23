module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],

  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
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
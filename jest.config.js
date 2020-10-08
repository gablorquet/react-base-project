const { resolve } = require('path');

var APPDIR = resolve(__dirname);

module.exports = {
    clearMocks: true,
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    globals: {
        "ts-jest": {
            "tsConfig": `${APPDIR}/tsconfig.jest.json`
        },
        "__DEV__": false
    },
    setupFilesAfterEnv: ["./__tests__/setupFile.ts"],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
        "@src/(.*)$": "<rootDir>/src/$1"
    },
    collectCoverageFrom: [
        "src/**/*.ts",
        "src/**/*.tsx"
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    testPathIgnorePatterns : ['/__tests__/testutils/', '__tests__/mocks/', '__tests__/setupFile.ts']
}

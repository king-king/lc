module.exports = {
    parser: '@babel/eslint-parser',
    env: {
    },
    extends: 'frontend-rules',
    globals: {
        window: true,
        document: true,
        test: true,
        expect: true,
        describe: true
    },
    rules: {
        'react/destructuring-assignment': 0,
        'no-underscore-dangle': 0,
        'no-unsafe-optional-chaining': 0
    }
};
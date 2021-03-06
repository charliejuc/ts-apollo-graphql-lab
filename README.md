# Typescript prettier-standard template
A simple template to initiate writing typescript code with linter and basic build commands.

Dependencies Installation:
```bash
yarn install

//OR

npm install
```

Available commands(package.json):
```JSON
"scripts": {
    "build": "npm-run-all clean tsc",
    "dev": "npm-run-all build --parallel nodemon tsc:watch",
    "lint": "npm-run-all format eslint",
    "eslint": "eslint --fix --ext .js,.ts ./src",
    "jest": "jest",
    "jest:run": "jest --testPathIgnorePatterns dist/",
    "jest:watch": "jest tests --testPathIgnorePatterns dist/ --watch",
    "test": "npm-run-all lint --parallel jest:run",
    "test:watch": "npm-run-all lint jest:watch",
    "clean": "rimraf dist",
    "tsc": "tsc",
    "tsc:watch": "tsc --watch",
    "format": "prettier --write --no-semi .",
    "nodemon": "nodemon --watch",
    "start": "node dist/index.js"
}
```

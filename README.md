# Cypress Project

The project is created to learn CYPRESS.

## Installation And Setup Of Project

```bash
npm init 
Use to create package.json file to handle necessary packages required for the project
npm install --save-dev cypress@9.2.1 
Use to download cypress and necessary packages
```

## Open Cypress Runner

To open Cypress runner, run the following command

```bash
./node_modules/.bin/cypress open
OR
npx cypress open
(requires npm@5.2.0 or greater)
OR
yarn cypress open
```

# Folder Structure

## node_modules

It is used to house dependencies(Packages)

## cypress.json

It is used to save different cypress related configurations for eg. base URL, timeouts, etc. The default behavior of Cypress can be modified by supplying any of the following configuration options.The cypress.json file enables us to change the default settings of Cypress.

## videos

It is used to store videos of test recordings.

## screenshots

It is used to store images of specific test(s).

## support

i) index.js
This index.js file is run before every single spec file.Use this file to add additional imports, additional libraries, event listeners,
ability ti add hooks etc.
ii) command.js
Use this file to create custom commands and overwrite existing commands.

## plugins

i) index.js
This folder includes index.js file. This file will be automatically imported every time before the execution of every spec(test) file. Plugins enable you to tap into, modify, or extend the internal behavior of Cypress.

## integration

Integration folder includes all the test files. The test files may be written as .js, .jsx, .coffee and .cjsx. Usually the preferred extension is .js and the test file name format is test-name.spec.js.

##  fixtures

Fixtures are used to store test data which can then be used throughout the tests. Usually, the data is stored in JSON format.

# Cypress API's

[Cypress API's for reference](https://docs.cypress.io/api/table-of-contents)

[Cypress Changelog](https://docs.cypress.io/guides/references/changelog)


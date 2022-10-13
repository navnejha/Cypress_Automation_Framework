# Cypress Project

The project is created to learn CYPRESS.

## Installation And Setup Of Project

```bash
npm init 
Use to create package.json file to handle necessary packages required for the project
npm install --save-dev cypress@10.9.0 
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

## Table of Content

* cypress
   * e2e Folder
   * fixtures Folder
   * support Folder
     * command.js
     * e2e.js
* node_modules
* cypress.config.js

## E2E Folder

cypress/e2e folder, earlier known as the integration folder, is the main folder to store all your test. We add the Basic, End to End Test, Visual or Cucumber test here. We keep all our spec files here.

Spec files may be written as javascript (.js) and typescript (.ts). Other supported format are .jsx, .tsx, .coffee, .cjsx. Cypress also supports ES2015 out of the box.

## Fixtures Folder

We use cypress/fixtures folder to store data objects or external pieces of static data that our tests can use; you will typically use them with cy.fixture() command. Usually, the data is stored in JSON format. You will see some JSON files already available in the fixtures folder for your reference. These files are also used by example file files.cy.js present in advanced-examples folder.

## Support Folder

The cypress/support folder contains two files for e2e testing and three in case of component testing. File extensions will be .js, .jsx, .ts or .tsx, depending on language choice.

Cypress will create example support files automatically configured for each testing type with commented-out examples.

Support files are executed before every spec file and are a great place to add reusable code, custom commands, libraries, and plugins.

### command.js

Command file is where you add your commonly used functions and custom commands. It includes functions you may call to use in different tests, such as the login function. Cypress created some functions for you, and you can override them here if you want.


### e2e.js (component.js)

This file is a great place to put global configuration and behavior that modifies Cypress like before or before each. By default, it imports only commands.js, but you can import other files to keep things organized.


### cypress/downloads 
This folder is automatically created when your test downloads any file and stores all the downloaded files.

### cypress/screenshots

 It stores screenshots captured during the test.

### cypress/videos

It stores test execution videos.

## node_modules

It is used to house dependencies(Packages).

## cypress.config.js

It is used to save different cypress related configurations for eg. base URL, timeouts, etc. The default behavior of Cypress can be modified by supplying any of the following configuration options.The cypress.config.js file enables us to change the default settings of Cypress.


# Cypress API's

[Cypress API's for reference](https://docs.cypress.io/api/table-of-contents)

[Cypress Changelog](https://docs.cypress.io/guides/references/changelog)

# Calculator App for QA Testing

Welcome! This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
With that it comes with the [Jest testing framework](https://jestjs.io/) built in. We will be using that to practice unit testing. For automated testing we will be using [Cypress](https://www.cypress.io/) which was added. 


## Setup
1. Make sure [Node.js](https://nodejs.org/en/) is installed on your computer. You can download that [here](https://nodejs.org/en/download/) and make sure to select the right one for Windows or Mac.
2. In the terminal, clone the project to your computer. I would do this in the folder where you are putting your Tech Moms projects, so make sure you `cd` into that before running this. It should then prompt you for your password.
```
git clone https://github.com/mdamian322/calculator.git
```
3. Do `cd calculator` to get into the project folder
4. Run `npm install` to install all the dependencies needed for this project like Cypress, etc. This should also install [yarn](https://classic.yarnpkg.com/en/) as well so you can run the yarn scripts below

### Possible errors during setup and fixes 🤞
If you are getting a `yarn command not found` error when trying to do `yarn start` or other yarn commands, you will need to install yarn manually (it should have installed when doing that `npm install` command but, yay life!). 

To do that you do:
1. `npm install --global yarn` in the terminal. 

If you get a `Missing write access` error or something like that when doing that, you will need to do 
```
sudo chown -R $USER /usr/local/lib/node_modules
``` 
This is just giving you permission to write in that directory.
After doing that, do `npm install --global yarn` again. 

[Here's the explanation](https://flaviocopes.com/npm-fix-missing-write-access-error/) for fixing the "Missing write access" error. 

To know if it installed successfully you can do `yarn --version` and it should return the version number.


## Scripts for developing

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make changes.

### `yarn test`

Launches the test runner to run all the unit tests in the `__tests__` folder. You can also do `yarn test a` to run all tests.

### `yarn run cypress open`

Launches Cypress so you can run the automated tests

### NOTE: 
You have to have the app running in order to run these tests, so make sure you have done `yarn start` in a separate terminal tab/window before doing this.


## Types of Testing
### Manual Testing
**Manual Testing** is where test cases are executed manually by a tester without using any automated tools. So clicking through and using the app as a user would.

### Unit Testing
**Unit Testing** is where individual units or components of a software are tested. In short, unit tests are testing the _actual_ code. In this project, our unit tests are in the `__tests__` [folder](https://github.com/mdamian322/calculator/tree/main/src/__tests__) and the [operations.test.js](https://github.com/mdamian322/calculator/blob/main/src/__tests__/operations.test.js) test file is testing the [operations.js](https://github.com/mdamian322/calculator/blob/main/src/operations.js) file functions. Note how the test name is the same name as the Javascript file we are testing.

### Automated Testing
**Automated Testing** is using an automated process where you are testing the _behavior_ of the app. It simulates manual testing. In this project we are using Cypress. The tests for this calculator app are in the `cypress/integreations/calculator` [folder](https://github.com/mdamian322/calculator/tree/main/cypress/integration/calculator). I left the default [examples folder](https://github.com/mdamian322/calculator/tree/main/cypress/integration/examples) that Cypress autoatically generates so you can play around with those and see more examples of using Cypress for automated testing.

## Resources
- [Cypress commands](https://docs.cypress.io/api/table-of-contents)
- [Jest docs](https://jestjs.io/docs/getting-started)
- Get paid to do user testing with [User Testing](https://www.usertesting.com/)
- To learn React, check out the [React documentation](https://reactjs.org/).

## Challenge: Add additional tests
I would love for you to add additional tests for practice! Feel free to make a Pull Request (PR) with any tests you add and I'll be more than happy to take a look or answer any questions! 

To make a Pull Request:
1. Make a new branch off of `main` by doing `git checkout -b your_name_branch`. This just makes a new branch that is a copy of `main`. Make sure you do `git pull` before doing this to make sure you have the most recent changes from `main`.
2. Make your changes and then commit them to your branch.
- This adds all of the files you changed to be saved/commited
```
git add -A
```
 -  This saves/commits your changes to the files so you don't loose them locally with your message being in the ""
 ```
git commit -m "added tests"
```
3. Push your changes so they show up [here](https://github.com/mdamian322/calculator/pulls) under pull requests
```
git push
```

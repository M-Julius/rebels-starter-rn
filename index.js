#!/usr/bin/env node

// Import statements, these are the one which is used to setup the boilerplate*/
const inquirer = require("inquirer");
const path = require("path");
const shell = require("shelljs");
const chalk = require("chalk");
const yargs = require("yargs");

/** List of questions to be asked to the person who is trying to use this boilerplate
 * Question asked is projectName, bundle identifier
 */
const QUESTIONS = [
  {
    name: "name",
    type: "input",
    message: "Project name:",
    when: () => !yargs.argv["name"],
    validate: (input) => {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else
        return "Project name may only include letters, numbers, underscores and hashes.";
    },
  },
  {
    name: "bundle",
    type: "input",
    message: "Bundle Identifier name:",
    when: () => !yargs.argv["bundle"],
    validate: (input) => {
      if (/^[a-z0-9]+(\.[a-z0-9]+)+$/gi.test(input)) return true;
      else return "Provide a valid bundle Identifier";
    },
  },
];

// get current directory
const CURR_DIR = process.cwd();

// set default depedency
const DEFAULT_DEPEDENCY = [
  "@react-native-community/async-storage",
  "@react-native-community/netinfo",
  "immutable",
  "lodash",
  "react-native-gesture-handler",
  "react-native-modal",
  "react-native-reanimated",
  "react-native-router-flux",
  "react-native-screens",
  "react-native-vector-icons",
  "react-redux",
  "redux",
  "redux-persist",
  "redux-thunk",
  "reselect",
].join(" ");
const DEV_DEFAULT_DEPEDENCY = ["reactotron-react-native", "reactotron-redux"].join(' ');

console.log(chalk.red("** Rebelworks Starter Project React Native **"));
inquirer.prompt(QUESTIONS).then((answers) => {
  // assigning the object answer
  answers = Object.assign({}, answers, yargs.argv);

  // get all answers
  const projectName = answers["name"];
  const bundleIdentifier = answers["bundle"];

  /**
   * Start the process of creating a react native project using given project name.
   */
  const nativeApp = createNativeApp(projectName);

  /**
   * After process finished, need to check if there any dependency need to be installed
   * This condition is checked based on user performance
   */
  if (nativeApp) {
    /**
     * This function is called here to add the dependency of this project
     * Passing all values get from user as object to this function
     */
    addDependencyPackage({ projectName });

    /**
     * After the process of adding dependency, copy the starter kit files.
     * Pass the project name to this function
     */
    copyStarterKit({ projectName });

    /**
     * After the process of adding dependency, change the bundle identifier as given.
     * Pass the project name and bundle identifier to this function
     */
    changeBundleIdentifier({ projectName, bundleIdentifier });
  }
});

/**
 * This function is used to create the native app using the projectName given from the user.
 * This function will execute the react native cli to create the project.
 * @param {project name from the user} projectName
 */
function createNativeApp(projectName) {
  // initialize the commant object to execute
  let cmd = "";

  /**
   * check the system contains react native
   * if it contains, set the init command, else return the error to the user to install the react-native-cli
   */
  if (shell.which("react-native")) {
    cmd = `react-native init ${projectName}`;
  } else {
    console.log(chalk.cyan("React native setup npx..."));
    cmd = `npx react-native init ${projectName}`;
  }

  /**
   * if command is set, need to execute the command using shell
   * check the status of executed code and return it to the user.
   */
  if (cmd) {
    // execuate the command using shell
    const result = shell.exec(cmd);

    // check resultant of executed command
    if (result.code !== 0) {
      console.log(chalk.red("React native app cannot be created"));
      return false;
    }
    console.log(chalk.green("React native app successfully created"));
    return true;
  }
  return true;
}

/**
 * This function is used to add the dependency given from user input
 * Package is added based on user input
 * @param {projectName} options
 */
function addDependencyPackage(options) {
  // the target path
  const tartgetPath = path.join(CURR_DIR, options.projectName);

  // set the targetpath
  shell.cd(tartgetPath);

  // set the command
  let cmd = "";

  /**
   * check the system contains yarn
   * if not install with npm, else add the packages using yarn
   */
  if (shell.which("yarn")) {
    /**
     * this is for yarn
     * create a command for adding the pacakges
     * check with user given parameter and add them in package list
     */
    cmd = `yarn add ${DEFAULT_DEPEDENCY} && yarn add --dev ${DEV_DEFAULT_DEPEDENCY}`;
  } else if (shell.which("npm")) {
    /**
     * this is for npm
     * create a command for adding the pacakges
     * check with user given parameter and add them in package list
     */
    cmd = `npm install --save ${DEFAULT_DEPEDENCY} && npm install --save-dev ${DEV_DEFAULT_DEPEDENCY}`;
  }
  /**
   * Execute the shell command
   */
  const dependency = shell.exec(cmd);
  /**
   * Check the resultant of dependency added
   */
  if (dependency.code !== 0) {
    console.log(chalk.red("Dependency packages not installed "));
    return false;
  }

  /**
   * Execute the linking dependency
   * This need to be done,otherwise app will not be installed while running
   */
  shell.exec("npx react-native link");

  return true;
}

/**
 * This function is used to copy template to root project
 * @param {projectName} options
 */
function copyStarterKit(options) {
  // the root app path
  const rootApp = path.resolve(__dirname);

  // the target path
  const tartgetPath = path.join(CURR_DIR, options.projectName);

  shell.cp("-rf", `${rootApp}/src/react-native-starter/js/*`, tartgetPath);
  shell.mv("_eslintrc.js", ".eslintrc.js");
  shell.mv("_gitignore", ".gitignore");
  console.log(chalk.green("Starterkit project is copied!"));
}

/**
 * This function is used to change the bundle identifier.
 * @param {projectName and bundleIdentier} options
 */
function changeBundleIdentifier(options) {
  // set the target path
  const tartgetPath = path.join(CURR_DIR, options.projectName);

  // move to target path using shell command
  shell.cd(tartgetPath);

  // initialize the command variable
  let cmd = "";

  /**
   * check the react-native-rename package is installed globally in user system.
   * If not, install it using yarn and change the bundle identifier
   */
  if (shell.which("react-native-rename")) {
    //set the command to change bundle identifier
    cmd = `react-native-rename  "${options.projectName}" -b ${options.bundleIdentifier}`;
  } else {
    cmd = `npx react-native-rename "${options.projectName}" -b ${options.bundleIdentifier}`;
  }

  /**
   * execute the command
   */
  if (cmd) {
    const result = shell.exec(cmd);

    /**
     * check the resultant of executed code
     */
    if (result.code !== 0) {
      console.log(
        chalk.red("React native bundle identifier cannot be changed")
      );
      return false;
    }
    console.log(chalk.green("React native bundle identifier changed"));
    return true;
  } else {
    console.log(chalk.red("No package found. Cannot run installation."));
  }
  return true;
}

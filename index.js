#!/usr/bin/env node

// Import statements, these are the one which is used to setup the boilerplate*/
const inquirer = require("inquirer");
const path = require("path");
const shell = require("shelljs");
const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");

// local importing module
const { runGenerator } = require("./src/generator");
const {
  DEFAULT_DEPEDENCY,
  DEV_DEFAULT_DEPEDENCY,
  QUESTIONS,
  TEMPLATE_LIST,
  JSON_SCRIPT,
} = require("./src/constants");

// argument from other function
const args = process.argv.slice(2);

// get current directory
const CURR_DIR = process.cwd();

// get the root app path
const ROOT_APP = path.resolve(__dirname);

// startup when called this index
function main() {
  if (args.length !== 0) {
    runGenerator();
  } else {
    promptQuestion();
  }
}

// prompt all questions
function promptQuestion() {
  console.log(chalk.red("** Rebelworks Starter Project React Native **"));
  inquirer.prompt(QUESTIONS).then((answers) => {
    // assigning the object answer
    answers = Object.assign({}, answers, yargs.argv);

    // get all answers
    const projectName = answers["name"];
    const bundleIdentifier = answers["bundle"];
    const choicesTemplate = answers["templateList"];

    /**
     * Start the process of creating a react native project using given project name.
     */
    const nativeApp = createNativeApp({ projectName, choicesTemplate });

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
      copyStarterKit({ projectName, choicesTemplate });

      /**
       * After the process of copy starter kit, lets write scripts to package.json
       */
      writeScriptsJson();

      /**
       * After the process of adding dependency, change the bundle identifier as given.
       * Pass the project name and bundle identifier to this function
       */
      changeBundleIdentifier({ projectName, bundleIdentifier });
    }
  });
}

/**
 * This function is used to create the native app using the projectName given from the user.
 * This function will execute the react native cli to create the project.
 * @param {project name from the user} projectName
 */
function createNativeApp({ projectName, choicesTemplate }) {
  // initialize the commant object to execute
  let cmd = "";

  // when the system not includes react-native use npx
  const useNpx = shell.which("react-native") ? "" : "npx ";

  console.log(chalk.cyan("Project is cooking..."));

  /**
   * switch the templates list
   * if it use typescript, set the init command for setup with typescript mode, else setup with default mode javascript
   */
  switch (choicesTemplate) {
    case TEMPLATE_LIST[1]:
      cmd = `${useNpx}react-native init ${projectName} --template react-native-template-typescript`;
      break;
    default:
      cmd = `${useNpx}react-native init ${projectName}`;
      break;
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

  // when the system not includes react-native use npx
  const useNpx = shell.which("react-native") ? "" : "npx ";

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
  shell.exec(`${useNpx}react-native link`);

  return true;
}

/**
 * This function is used to copy template to root project
 * @param {projectName, choicesTemplate} options
 */
function copyStarterKit(options) {
  // switch directory path template
  let template;
  switch (options.choicesTemplate) {
    case TEMPLATE_LIST[1]:
      template = "ts";
      break;
    default:
      template = "js";
      break;
  }

  // the target path
  const tartgetPath = path.join(CURR_DIR, options.projectName);

  // copy all folder templates to root project
  shell.cp(
    "-rf",
    `${ROOT_APP}/src/templates/react-native-starter/${template}/*`,
    tartgetPath
  );

  // in the templates folder there is no dot file, you can change the name, via the command below
  shell.mv("_eslintrc.js", ".eslintrc.js");
  shell.mv("_gitignore", ".gitignore");
  console.log(chalk.green("Starterkit project is copied!"));
}

/**
 * This function is used to write scripts to package.json file.
 */
function writeScriptsJson() {
  // read package json
  let packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

  // every script from configuration is rewritten to packageJson
  Object.keys(JSON_SCRIPT).forEach((key) => {
    // append scripts
    packageJson.scripts[key] = JSON_SCRIPT[key];
  });

  // rewrite file package.json
  fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
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

  // when the system not includes react-native-rename use npx
  const useNpx = shell.which("react-native-rename") ? "" : "npx ";

  /**
   * check the react-native-rename package is installed globally in user system.
   * If not, install it using yarn and change the bundle identifier
   */

  //set the command to change bundle identifier
  cmd = `${useNpx}react-native-rename  "${options.projectName}" -b ${options.bundleIdentifier}`;

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

main();

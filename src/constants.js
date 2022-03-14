const yargs = require("yargs");

// template
const TEMPLATE_LIST = ["react-native(javascript)", "react-native(typescript)"];

// default depedency
const DEFAULT_DEPEDENCY = [
  "@react-native-community/async-storage",
  "@react-native-community/netinfo",
  "immutable",
  "lodash",
  "react-native-safe-area-context",
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

const DEV_DEFAULT_DEPEDENCY = [
  "reactotron-react-native",
  "reactotron-redux",
].join(" ");

/** List of questions to be asked to the person who is trying to use this boilerplate
 * Question asked is projectName, bundle identifier, templateList
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
  {
    name: "templateList",
    type: "list",
    message: "Choices template setup project",
    choices: TEMPLATE_LIST,
    when: () => !yargs.argv["languages"],
  },
];

const JSON_SCRIPT = {
  "clean:android": "cd android && ./gradlew clean && cd ../",
  "build:android": "cd android && ./gradlew clean && ./gradlew assembleRelease",
  "pods:update": "cd ios && pod install --repo-update && cd ..",
  "gradle:clean": "cd android && ./gradlew clean && cd ..",
};

module.exports = {
  DEFAULT_DEPEDENCY,
  DEV_DEFAULT_DEPEDENCY,
  QUESTIONS,
  TEMPLATE_LIST,
  JSON_SCRIPT,
};

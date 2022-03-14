// import module
const ejs = require("ejs");
const fs = require("fs");
const chalk = require("chalk");

const { toDashize, toPascalCase } = require("./utils");

// get parameter
const [options, type, name] = process.argv.slice(2);

// get current directory
const CURR_DIR = process.cwd();

/**
 * get App.tsx current root project when use typescript returning tsx/ts
 * is index with default when file use jsx/tsx in components/screens
 * @param {isIndex} param
 */
function getExtensionsFile(isIndex) {
  // if project use typescript detect App.tsx, else return js extension
  if (fs.existsSync(`${CURR_DIR}/App.tsx`)) {
    if (isIndex) {
      return "tsx";
    } else {
      return "ts";
    }
  } else {
    return "js";
  }
}

// make main function
function runGenerator() {
  if (options == undefined) {
    console.log(chalk.red("Please select options"));
    return 0;
  } else if (name == undefined) {
    console.log(chalk.red("Please insert name of module!"));
  }

  const isGenerate = options == "-generate" || options == "generate" || "-g";

  // more options handle with arguments parameter
  if (isGenerate) {
    if (type === "screens" || type === "-s") {
      generateScreen();
    } else if (type === "components" || type === "-c") {
      generateComponent();
    } else if (type === "redux" || type === "-r") {
      generateRedux();
    } else {
      console.log(
        chalk.red(
          "Please select option type generator screens, components, redux"
        )
      );
    }
  }
}

/**
 * read the templates and write to destination output project
 * @param {fromFile, outFile} param
 */
function writeFile({ fromFile, outFile }) {
  fs.readFile(fromFile, "utf-8", function (err, buf) {
    if (err != null) {
      console.log(err);
      return false;
    }
    fs.writeFile(
      outFile,
      ejs.render(buf, { pascalCaseName: toPascalCase(name) }),
      (err) => {
        if (err != null) {
          console.log(err);
          return false;
        }

        return true;
      }
    );
  });
}

/**
 * get output dir, when file not exist make dir output
 * @param {namePath} param
 */
function getOutputDir(namePath) {
  // when output path source using custom name with namePath
  const typePath = namePath ? namePath : type;
  const outputDir = `${CURR_DIR}/src/${typePath}/${toPascalCase(name)}`;
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  return outputDir;
}

// to generate screens
function generateScreen() {
  const outputDir = getOutputDir();
  const outputIndex = `${outputDir}/index.${getExtensionsFile(true)}`;
  const outputStyle = `${outputDir}/styles.${getExtensionsFile()}`;

  writeFile({
    fromFile: `templates/screen/index.${getExtensionsFile(true)}.ejs`,
    outFile: outputIndex,
    type: "screen",
  });
  writeFile({
    fromFile: `templates/screen/styles.${getExtensionsFile()}.ejs`,
    outFile: outputStyle,
    type: "screen",
  });
  messageSuccesGenerated("Screens");
}

// to generate components
function generateComponent() {
  const outputDir = getOutputDir();
  const outputIndex = `${outputDir}/index.${getExtensionsFile(true)}`;
  const outputStyle = `${outputDir}/styles.${getExtensionsFile()}`;

  writeFile({
    fromFile: `templates/components/index.${getExtensionsFile(true)}.ejs`,
    outFile: outputIndex,
    type: "screen",
  });
  writeFile({
    fromFile: `templates/components/styles.${getExtensionsFile()}.ejs`,
    outFile: outputStyle,
    type: "screen",
  });
  messageSuccesGenerated("Components");
}

// to generate redux action, reducer
function generateRedux() {
  // use custom name store, /src/store
  const outputDir = getOutputDir("store");
  const outputAction = `${outputDir}/${toDashize(
    name
  )}.action.${getExtensionsFile()}`;
  const outputReducer = `${outputDir}/${toDashize(
    name
  )}.reducer.${getExtensionsFile()}`;

  writeFile({
    fromFile: `templates/redux/NAME.action.${getExtensionsFile()}.ejs`,
    outFile: outputAction,
    type: "screen",
  });
  writeFile({
    fromFile: `templates/redux/NAME.reducer.${getExtensionsFile()}.ejs`,
    outFile: outputReducer,
    type: "screen",
  });
  messageSuccesGenerated("Redux");
}

// print success
function messageSuccesGenerated(module) {
  console.log(
    chalk.green(`${module} ${toPascalCase(name)} success generated!`)
  );
}

module.exports = {
  runGenerator
}

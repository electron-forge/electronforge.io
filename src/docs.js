module.exports = [
  {
    command: 'import',
    usage: [
      // { comment: 'Import an existing Electron application so you can use Electron Forge with it' },
      { line: 'electron-forge import [path]' },
    ],
    description: ['Attempts to import the given module directory to the Electron Forge standard. An interactive prompt will appear, removing any existing Electron tooling and replacing it with electron-compile, setting up git, adding a template forge config object to package.json, and installing the correct NPM dependencies.', 'This modifies any files in the directory - ensure that any changes are backed up.', 'By default, the path will be the current directory.'],
    arguments: [],
  },
  {
    command: 'init',
    usage: [
      // { comment: 'Initialize a new Electron Forge application in the given directory' },
      { line: 'electron-forge init [path]' },
    ],
    description: ['Initializes a new application from a basic template that is compatible with Electron Forge. Currently, there are templates for Vanilla ES6/ES7, React, Angular, Vue, and Jade - a list of the available templates is on the "Templates" page. If no template is provided, the command will default to the Vanilla ES6/ES7 template.', 'By default, the path will be the current directory.'],
    arguments: [
      {
        name: 'template',
        value: true,
        description: 'The name of the template to use when initializing the app. The template is resolved from either a global module with the name "electron-forge-template-[name]", or from one of the internally provided template modules. Not providing a template will default to the Vanilla ES6/ES7 template.',
      },
      {
        name: 'lintstyle',
        value: true,
        description: 'Some templates support this argument to change the provided linting tools. The Vanilla ES6/ES7 template supports this, with two options: "airbnb" and "standard".',
      },
    ],
  },
  {
    command: 'install',
    usage: [
      { line: 'electron-forge install [owner]/[repo]' },
    ],
    description: ['Installs an Electron application from the given GitHub repository in the form  of "owner/repo" (for example "atom/atom"). It will install the current platform\'s release and then launch it, behaving similar to Homebrew.'],
    arguments: [
      {
        name: 'prerelease',
        description: 'By default, prereleases are ignored. However, setting the flag will fetch the latest release, prereleases inclusive.',
      },
    ],
  },
  {
    command: 'lint',
    usage: [
      { line: 'electron-forge lint [path]' },
    ],
    description: ['Runs the lint task of the application found at [path] and outputs the results if it fails; if it succeeds, there will be no output.', 'By default, the path will be the current directory.'],
    arguments: [],
  },
  {
    command: 'make',
    usage: [
      { line: 'electron-forge make [path]' },
    ],
    description: ['Makes platform specific distributables of your Electron application. Currently, distributables can only be generated for the host platform (for example, a Windows installer cannot be generated from a Linux machine.', 'However, this can be circumvented by using a Continuous Integration service (such as Travis CI or Appveyor).', 'By default, the path will be the current directory'],
    arguments: [
      {
        name: 'arch',
        value: true,
        description: 'The target architecture to make distributables for, entered as a comma-separated list. Defaults to the system architecture.',
      },
      {
        name: 'targets',
        value: true,
        description: 'Overrides the directory\'s forge config make targets with a comma-separated list of make targets.',
      },
      {
        name: 'skip-package',
        description: 'If this flag is set, the app will be made without packaging.',
      },
    ],
  },
  {
    command: 'package',
    usage: [
      { line: 'electron-forge package [path]' },
    ],
    description: ['Packages the Electron application into a platform-specific folder. While this folder is not technically distributable, it is useful for local testing.', 'By default, the path will be the current directory'],
    arguments: [
      {
        name: 'arch',
        value: true,
        description: 'The target architecture to make distributables for, entered as a comma-separated list. Defaults to the system architecture.',
      },
      {
        name: 'platform',
        value: true,
        description: 'The target platform to package the application for. Unlike make, an application can be packaged for any platform from any platform. Defaults to the system platform.',
      },
    ],
  },
  {
    command: 'publish',
    usage: [
      { line: 'electron-forge publish [path]' },
    ],
    description: ['Publishes the Electron application, by running "make", to the given target service. By default it publishes to GitHub.', 'Add options to the "publish" command to have them run on the make call.', 'By default, the path will be the current directory'],
    arguments: [
      {
        name: 'auth-token',
        value: true,
        description: 'The authorization token passed to the publisher. For GitHub, this would be a GitHub access token.',
      },
      {
        name: 'tag',
        value: true,
        description: 'The version number tagged to the release. Defaults to package.json.',
      },
      {
        name: 'target',
        value: true,
        description: 'The publish target service, which defaults to GitHub. You can provide your own publish target in an "electron-forge-publish-[name]" package.',
      },
    ],
  },
  {
    command: 'start',
    usage: [
      { line: 'electron-forge start [path]' },
    ],
    description: ['Launches your Electron application after rebuilding native dependencies. This launches the app through "electron-prebuilt-compile", which compiles the code on-the-fly instead of precompiling.', 'Any argument passed to "start" will be sent to the application.', 'By default, the path will be the current directory'],
    arguments: [],
  },
];

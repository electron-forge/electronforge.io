module.exports = [
  {
    command: 'import',
    usage: [
      // { comment: 'Import an existing Electron application so you can use Electron Forge with it' },
      { line: 'electron-forge import [path]' },
    ],
    description: ['Attempts to import the given module directory to the Electron Forge standard.  It does this by removing any existing Electron tooling and replacing it with electrom-compile, setting up git for you, adding a template forge config object to your package.json file and installing the correct NPM dependencies.', 'It will guide you through the import process with interactive prompts but be aware it modifies your files in place, so ensure you don\'t have uncommited changes before running this command or you might lose them'],
    arguments: [],
  },
  {
    command: 'init',
    usage: [
      // { comment: 'Initialize a new Electron Forge application in the given directory' },
      { line: 'electron-forge init [path]' },
    ],
    description: ['Initializes a new application from a basic temnplate that is compatabile with Electron Forge, out of the box we provide templates for React, Typescript, Angular and more. You can see all the available template on our "Templates" page.  If you do not provide a template we will simply give you a vanilla ES6/7 ready app template.', 'Templates will provide you with the minimum code required to get an app started along with all the forge config you will need to start building your app.', 'By default path will be the current directory'],
    arguments: [
      {
        name: 'template',
        value: true,
        description: 'The name of the template to use when initalzing your app, the template is resolved from either a global module with the name "electron-forge-template-[name]" or from one of the internally provided template modules.  Not providing a template will default to the Vanilla ES6/7 template.',
      },
      {
        name: 'lintstyle',
        value: true,
        description: 'Some templates support this argument to change the linting tools that are provided for you, only the vanilla ES6/7 template supports this internally where you can choose between "airbnb" and "standard".',
      },
    ],
  },
  {
    command: 'install',
    usage: [
      { line: 'electron-forge install [owner]/[repo]' },
    ],
    description: ['Installs an Electron application from the given GitHub repository in the form "owner/repo", for example "atom/atom".  It will attempt to install your platforms release and then launch it, the intention is to smoothly install Electron applications in a consistent way similar to brew.'],
    arguments: [
      {
        name: 'prerelease',
        description: 'If you set the flag it will fetch the latest release include prereleases, these are ignored by default so if you want to install alpha or beta versions you need to enable this flag.'
      },
    ],
  },
  {
    command: 'lint',
    usage: [
      { line: 'electron-forge lint [path]' },
    ],
    description: ['Runs the lint task of the application found at "path" and outputs the results if it fails, if it succeeds there will be no output.', 'By default path will be the current directory.'],
    arguments: [],
  },
  {
    command: 'make',
    usage: [
      { line: 'electron-forge make [path]' },
    ],
    description: ['Makes platform specific distributables of your Electron application.  Currently you can only generate distributables for your current platform, this means for instance you can\'t generate Windows installers from a linux machine.', 'We reccomend running this command on CI (normally Travis CI and Appveyor) so that you can generate distributables for all 3 platforms.', 'By default path will be the current directory'],
    arguments: [
      {
        name: 'arch',
        value: true,
        description: 'The target architecture to make distributables for, can be a comma separated list of arches.  Defaults to your systems architecture',
      },
      {
        name: 'targets',
        value: true,
        description: 'Override your forge config make targets by settings this argument to be a comma separated list of make targets, useful for running a single make for testing purposes.',
      },
      {
        name: 'skip-package',
        description: 'Setting this flag will assume the app has already been packaged, this can result in a faster "make" but also if used incorrectly can result in you making an out of date version of your application.',
      },
    ],
  },
  {
    command: 'package',
    usage: [
      { line: 'electron-forge package [path]' },
    ],
    description: ['Packages your Electron application into a platform specific folder.  This folder is not technically distributable so you normally need to run the "make" command and not this command.  If you need a faster build to debug a packaged verison of your app this is the command you should use', 'By default path will be the current directory'],
    arguments: [
      {
        name: 'arch',
        value: true,
        description: 'The target architecture to package your applcation for, can be a comma separated list of arches.  Defaults to your system architecture.',
      },
      {
        name: 'platform',
        value: true,
        description: 'The target platform to package your application for.  You can package your application for platforms other than your current system platform.  Defaults to your system platform.'
      },
    ],
  },
  {
    command: 'publish',
    usage: [
      { line: 'electron-forge publish [path]' },
    ],
    description: ['Publishes your Electron application to the given target service, it will upload the results of a "make" run directly to the publish target.  By default it publishes to GitHub.', 'You can pass through options to the "make" run by adding them as arguments to the publish call.', 'By default path will be the current directory'],
    arguments: [
      {
        name: 'auth-token',
        value: true,
        description: 'The authorization token to pass through to the publisher you are using.  For the GitHub publisher for instance this will be a GitHub access token.',
      },
      {
        name: 'tag',
        value: true,
        description: 'The version to tag this release as, defaults to your current package.json version',
      },
      {
        name: 'target',
        value: true,
        description: 'The publish target to send your make artifacts to, defaults to GitHub.  You can provide your own publish target in an "electron-forge-publish-[name]" package.',
      },
    ],
  },
  {
    command: 'start',
    usage: [
      { line: 'electron-forge start [path]' },
    ],
    description: ['Launches your Electron application after rebuilding native dependencies.  This will launch your app through "electron-prebuilt-compile" so that your code compiles on the fly (there is no precompile phase) this should make your development workflow nice and quick', 'Note, you can pass through any arguments you want to "start" and they will all be sent directly to your application', 'By default path will be the current directory'],
    arguments: [],
  },
];

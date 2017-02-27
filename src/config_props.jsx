import React from 'react';
import { Link } from 'react-router';

module.exports = [
  {
    name: 'make_targets',
    example: {
      win32: ['squirrel'],
      darwin: ['dmg', 'zip'],
      linux: ['deb', 'rpm'],
    },
    description: [
      'The "make_targets" property is used to configure the types of distributables that Electron Forge will create for each platform.  This object consists of three keys "win32", "darwin" and "linux" each set to an array of make targets for the given platform.',
      <p>You can find a <Link to="/config/extra/possible-make-targets">list of make targets</Link> in our documentation.</p>,
    ],
  },
  {
    name: 'electronPackagerConfig',
    example: {
      asar: true,
      quiet: true,
      protocol: 'myapp://',
      icon: './images/myicon',
    },
    description: [
      'This config object provides options directly to electron-packager, the tool we use to package your app behind the scenes.',
      'Please note that any option that is expected to be a function, you can provide a path to a file and electron-forge will automatically require it for you and pass it in to that option.  (afterCopy functions for instance).',
      <p>You can find the complete documention for all options you can pass to the packager on the <a href="https://github.com/electron-userland/electron-packager/blob/master/docs/api.md">Electron Packager Repository</a></p>,
    ],
  },
  {
    name: 'electronWinstallerConfig',
    example: {
      loadingGif: './images/loading.gif',
      certificateFile: './cert.pfx',
      setupIcon: './images/myicon.ico',
    },
    description: [
      'This config object provides options directly to electron-winstaller, the tool we use to generate Squirrel installers behind the scenes.',
      <p>Please note that for options like the signing certificate password you should read our docs on <Link to="/config/extra/secure">Secure Variables</Link></p>,
      <p>You can find the complete documention for all options you can pass to electron-winstaller on the <a href="https://github.com/electron/windows-installer#usage">Electron Windows Installer Repository</a></p>,
    ],
  },
];

import React from 'react';
import { Link } from 'react-router';

module.exports = [
  {
    name: 'make_targets',
    required: true,
    example: {
      win32: ['squirrel'],
      darwin: ['dmg', 'zip'],
      linux: ['deb', 'rpm']
    },
    description: [
      'The "make_targets" property is used to configure the types of distributables that Electron Forge will create for each platform.  This object consists of three keys "win32", "darwin" and "linux" each set to an array of make targets for the given platform.'
    ],
    footer: <p>You can find a <Link to="/config/extra/possible-make-targets">list of make targets</Link> in our documentation.</p>
  },
];

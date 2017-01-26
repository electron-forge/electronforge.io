import React, { PureComponent } from 'react';
import FileCodeIcon from 'react-octicons-svg/dist/FileCodeIcon';
import GlobeIcon from 'react-octicons-svg/dist/GlobeIcon';
import PackageIcon from 'react-octicons-svg/dist/PackageIcon';
import { Link } from 'react-router';

import { PrimarySection, SecondarySection, SectionHeader, SubtronSection } from '../PageSections';
import BashBlock, { Comment, Gap, Line } from '../BashBlock';
import IconPoint from './IconPoint';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <SubtronSection title="Electron Forge">
          The command line interface for ambitious Electron applications
        </SubtronSection>
        <PrimarySection>
          <BashBlock>
            <Line value="npm install -g electron-forge" />
            <Gap />
            <Comment value="Initialize a new project" />
            <Line value="electron-forge init my-new-project" />
            <Gap />
            <Comment value="Launch your app" />
            <Line value="cd my-new-project" />
            <Line value="electron-forge start" />
          </BashBlock>
          <h3 style={{ textAlign: 'center' }}>Ready for a closer look? <Link to="/cli">Dive into the CLI documentation</Link></h3>
        </PrimarySection>
        <SecondarySection>
          <SectionHeader title="Opinionated Electron development">
            Modern language compilation, one-step builds for all platforms,<br />and sane templates for your favorite frameworks.
          </SectionHeader>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex' }}>
            <IconPoint icon={FileCodeIcon} title="Develop">
              Electron Forge templates come with "configuration optional" support for ES2017 via Babel, TypeScript, CoffeeScript, LESS, SASS, Stylus, Jade, Vue 2.0 SFC, and CSON. You won't have to configure a single thing - just start writing your app using your favorite tools, <a href="https://github.com/electron/electron-compile">electron-compile</a> will take care of the rest.
            </IconPoint>
            <IconPoint icon={PackageIcon} title="Package">
              Run a single command to turn your app into binaries for macOS, Windows, and Linux - for all supported architectures. Electron Forge will even generate compliant packages for Mac App Store and Windows Store. Need a dmg, rpm, deb, or squirrel file? A single command will do.
            </IconPoint>
            <IconPoint icon={GlobeIcon} title="Publish">
              Combine your development into one streamlined workflow: Electron Forge fully supports integration with GitHub, Travis CI, and AppVeyor, enabling you to automatically build and publish binaries for all platforms and architectures without ever having to run builds on your developer machine.
            </IconPoint>
          </div>
        </SecondarySection>
      </div>
    );
  }
}

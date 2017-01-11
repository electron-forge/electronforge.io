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
          Building Electron apps has never been easier.  Go from nothing to deployed in minutes.
        </SubtronSection>
        <PrimarySection>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex' }}>
            <IconPoint icon={FileCodeIcon} title="Develop">
              A load of coolness about this thing, probably about this long but who really knows how long we can talk about coolness for.
            </IconPoint>
            <IconPoint icon={PackageIcon} title="Package">
              Well, I hate copy pasting and I don&apos;t know what to type here so let&apos;s just keep typing till it is more or less the same length.
            </IconPoint>
            <IconPoint icon={GlobeIcon} title="Publish">
              This is just embarassing now, I have not idea what to put in these text spots but at least there is something there now.
            </IconPoint>
          </div>
        </PrimarySection>
        <SecondarySection>
          <SectionHeader title="Get Started">
            Getting started with Electron Forge is super easy.  You&apos;ll be deploying your app in no time.
          </SectionHeader>
          <h3 style={{ textAlign: 'center' }}>Just install Electron Forge globally to get started:</h3>
          <BashBlock>
            <Comment value="Install Electron Forge" />
            <Line value="npm install -g electron-forge" />
            <Gap />
            <Comment value="Initialize a new project" />
            <Line value="electron-forge init my-new-project" />
            <Gap />
            <Comment value="Enter the directory and launch your app" />
            <Line value="cd my-new-project" />
            <Line value="electron-forge start" />
          </BashBlock>
          <h3 style={{ textAlign: 'center' }}>Or dive deeper and read the <Link to="/cli">CLI documentation</Link></h3>
        </SecondarySection>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import { GitCompareIcon, GlobeIcon, TasklistIcon } from 'react-octicons-svg';
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
            <IconPoint icon={GitCompareIcon} title="Open Source">
              Electron Forge is <b>completely Open Source</b> from it&apos;s building logic to it&apos;s update server.
            </IconPoint>
            <IconPoint icon={GlobeIcon} title="Community Driven">
              Electron Forge is powered by <b>community</b> packages and an active group of contributors.  We use tools that already exist to make your lives easier.
            </IconPoint>
            <IconPoint icon={TasklistIcon} title="Simple">
              You don&apos;t need to know anything up front before using Electron Forge, with a <b>single command</b> you can get started today.
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

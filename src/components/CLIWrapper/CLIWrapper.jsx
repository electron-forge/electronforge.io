import React, { PureComponent } from 'react';
import { Link, routerShape } from 'react-router';

import docs from '../../docs';
import CLIDoc from '../CLIDoc';
import { PrimarySection, SubtronSection } from '../PageSections';

import styles from './CLIWrapper.scss';

export default class CLIWrapper extends PureComponent {
  static propTypes = {
    router: routerShape,
  };

  render() {
    const { router: { params: { command } } } = this.props;

    return (
      <div>
        <SubtronSection title="CLI Docs">
          Documention for Electron Forge&apos;s CLI interface
        </SubtronSection>
        <PrimarySection>
          <div className={styles.container}>
            <div className={styles.commandList}>
              <h3>Commands</h3>
              {
                docs.map(doc => (
                  <div key={doc.command} className={styles.commandLink}>
                    <Link to={`/cli/${doc.command}`}>
                      {doc.command}
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className={styles.commandDocs}>
              {
                command ?
                  <CLIDoc doc={docs.find(doc => doc.command === command)} /> :
                  <div className={styles.noCommand}>
                    <h1>Choose a Command</h1>
                    <p>To view the docs for a command, select it on the left</p>
                  </div>
              }
            </div>
          </div>
        </PrimarySection>
      </div>
    );
  }
}

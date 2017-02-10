import React, { PureComponent, PropTypes } from 'react';
import CodeIcon from 'react-octicons-svg/dist/CodeIcon';

import BashBlock, { Comment, Gap, Line } from '../BashBlock';

import styles from './ForgeTemplateBanner.scss';

export default class ForgeTemplateBanner extends PureComponent {
  static propTypes = {
    template: PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired,
      description: PropTypes.string.isRequired,
    }),
  };

  constructor(...args) {
    super(...args);

    this.state = {
      sampleOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('click', this._closeSample, true);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._closeSample);
  }

  _closeSample = (event) => {
    if (this._sampleDiv && (this._sampleDiv.contains(event.target) || this._sampleDiv === event.target)) return;
    if (!this.state.sampleOpen) return;
    this.setState({
      sampleOpen: false,
    });
    event.stopPropagation();
  }

  _refSample = (sampleDiv) => {
    this._sampleDiv = sampleDiv;
  }

  _stopPropagation = (event) => {
    if (this.state.sampleOpen) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  _openSample = (event) => {
    this.setState({
      sampleOpen: true,
    });
  }

  render() {
    const { template: { key, name, icon, description } } = this.props;
    const { sampleOpen } = this.state;
    const IconClass = icon;

    return (
      <div className={styles.template}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}><IconClass width={120} height={120} /></div>
        </div>
        <div className={styles.description}>
          <h1 className={styles.name}>
            <span className={styles.nameString}>{name}</span>
            {
              typeof key !== 'undefined' ?
              (
                <span className={`${styles.sampleIcon} ${sampleOpen ? styles.sampleIconActive : ''}`} onClick={this._openSample} title="Usage Example">
                  <CodeIcon />
                </span>
              )
              : null
            }
          </h1>
          {description}
        </div>
        {
          sampleOpen ?
          (
            <div className={styles.sample} onClick={this._stopPropagation} ref={this._refSample}>
              <BashBlock>
                <Line value="npm install -g electron-forge" />
                <Gap />
                <Comment value="Initialize a new project" />
                <Line value={`electron-forge init my-new-project${key ? ` --template=${key}` : ''}`} />
                <Gap />
                <Comment value="Launch your app" />
                <Line value="cd my-new-project" />
                <Line value="electron-forge start" />
              </BashBlock>
            </div>
          )
          : null
        }
      </div>
    );
  }
}

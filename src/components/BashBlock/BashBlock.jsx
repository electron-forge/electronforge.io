import React, { PureComponent, PropTypes } from 'react';

import styles from './BashBlock.scss';

export default class BashBlock extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    fullWidth: PropTypes.bool,
  };

  render() {
    return (
      <div className={`${styles.block} ${this.props.fullWidth ? styles.fullWidth : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

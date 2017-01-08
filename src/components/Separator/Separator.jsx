import React, { PureComponent, PropTypes } from 'react';

import styles from './Separator.scss';

export default class Separator extends PureComponent {
  static propTypes = {
    big: PropTypes.bool,
  };

  render() {
    const { big } = this.props;
    return (
      <hr className={`${styles.separator} ${big ? styles.big : ''}`} />
    );
  }
}
